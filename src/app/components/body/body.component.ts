import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogResult } from './add-money-item-modal/add-money-item.component';
import { MoneyItemModel } from './wallet-table/models';
import { OpenBankService } from './wallet-table/services';
import { WalletTableComponent } from './wallet-table/wallet-table.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less'],
})
export class BodyComponent implements OnInit {
  @ViewChild('table') table: WalletTableComponent | undefined;

  totalBalance: number = 0;
  currencySymbol: currencySymbolType = currencySymbolType.rub;
  constructor(private openBankService: OpenBankService) {}
  ngOnInit() {}

  openDialog(dialog: any) {
    dialog.openDialog().subscribe((value: DialogResult<MoneyItemModel>) => {
      if (value.result) {
        this.table?.addRow(value.value);
        this.eval();
      }
    });
  }
  eval() {
    this.openBankService.getRates().subscribe((res) => {
      let usdToRub = res.find(
        (x) => x.from == 'USD' && x.to == 'RUB'
      )?.purchasePrice;
      let euroToRub = res.find(
        (x) => x.from == 'EUR' && x.to == 'RUB'
      )?.purchasePrice;
      const list = this.table?.list();
      let temp = 0;
      list?.forEach((value) => {
        switch (value.type) {
          case currencySymbolType.rub: {
            if (value.value) temp += value.value;
            break;
          }
          case currencySymbolType.euro: {
            if (value.value) if (euroToRub) temp += value.value * euroToRub;
            break;
          }
          case currencySymbolType.usd: {
            if (value.value) if (usdToRub) temp += value.value * usdToRub;
            break;
          }
        }
        value.type;
      });
      this.totalBalance = temp;
    });
  }
}
export enum currencySymbolType {
  rub = '₽',
  usd = '$',
  euro = '€',
}
