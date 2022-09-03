import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WalletItemModel } from './models/wallet-item-model';

@Component({
    selector: 'app-wallet-table',
    templateUrl: './wallet-table.component.html',
    styleUrls: ['./wallet-table.component.less'],
})
export class WalletTableComponent implements OnInit {
    dataSource$ = new BehaviorSubject<WalletItemModel[]>([]);
    constructor() {}

    ngOnInit() {}

    addRow(item: WalletItemModel) {
        this.dataSource$.next([...this.dataSource$.value, item]);
    }

    list(): Observable<WalletItemModel[]> {
        return this.dataSource$;
    }
}
