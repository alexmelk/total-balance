import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import {
    AppAddMoneyItemComponent,
    DialogResult,
} from './add-money-item-modal/add-money-item.component';
import { OpenBankApiModel } from './wallet-table/models/open-bank-api-model';
import { WalletItemModel } from './wallet-table/models/wallet-item-model';
import { OpenBankService } from './wallet-table/services/open-bank-service';
import { WalletTableComponent } from './wallet-table/wallet-table.component';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.less'],
})
export class BodyComponent implements OnInit {
    @ViewChild('table') table: WalletTableComponent | undefined;

    totalBalance$: Observable<number> = of(0);
    currencySymbol: currencySymbolType = currencySymbolType.rub;

    constructor(private openBankService: OpenBankService) {}

    ngOnInit() {}

    openDialog(dialog: AppAddMoneyItemComponent) {
        dialog.open().subscribe((value: DialogResult<WalletItemModel>) => {
            if (value.result) {
                this.table?.addRow(value.value);
                this.eval();
            }
        });
    }

    eval() {
        let rates$ = new BehaviorSubject<OpenBankApiModel[]>([]);
        this.openBankService.getRates().subscribe((rates) => {
            rates$.next(rates);
        });

        const usdToRub$ = rates$.pipe(
            map(
                (res) =>
                    res.find((x) => x.from == 'USD' && x.to == 'RUB')
                        ?.purchasePrice
            ),
            map((x) => x ?? null)
        );

        const euroToRub$ = rates$.pipe(
            map(
                (res) =>
                    res.find((x) => x.from == 'EUR' && x.to == 'RUB')
                        ?.purchasePrice
            ),
            map((x) => x ?? null)
        );

        const wallet$ = this.table?.list() ?? of([]);

        this.totalBalance$ = combineLatest([
            wallet$,
            usdToRub$,
            euroToRub$,
        ]).pipe(
            map(([wallet, usdToRub, euroToRub]) =>
                this.calcTotalBalance(wallet, usdToRub, euroToRub)
            )
        );
    }

    calcTotalBalance(
        wallet: WalletItemModel[],
        usdToRub: number | null,
        euroToRub: number | null
    ): number {
        let totalBalance = 0;
        wallet.forEach((value) => {
            switch (value.type) {
                case currencySymbolType.rub: {
                    if (value.value) totalBalance += value.value;
                    break;
                }
                case currencySymbolType.euro: {
                    if (value.value)
                        if (euroToRub) totalBalance += value.value * euroToRub;
                    break;
                }
                case currencySymbolType.usd: {
                    if (value.value)
                        if (usdToRub) totalBalance += value.value * usdToRub;
                    break;
                }
            }
        });
        return totalBalance;
    }
}

export enum currencySymbolType {
    rub = '₽',
    usd = '$',
    euro = '€',
}

// let t = getFromField(arr[0], (x) => x.title)
// console.log(t)
// export function getFromField<T, U>(item: T, lambda: (item: T) => U) {
//     return lambda(item)
// }

// export const arr = [{ title: 'title', value: 'value' }];
