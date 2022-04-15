import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoneyItemModel, OpenBankModel } from './models';
import { OpenBankService } from './services';

@Component({
  selector: 'app-wallet-table',
  templateUrl: './wallet-table.component.html',
  styleUrls: ['./wallet-table.component.less'],
})
export class WalletTableComponent implements OnInit {
  dataSource$: BehaviorSubject<MoneyItemModel[]> = new BehaviorSubject<
    MoneyItemModel[]
  >([]);
  constructor(private openBankService: OpenBankService) {}
  addRow(item: MoneyItemModel) {
    this.dataSource$.next([...this.dataSource$.value, item]);
  }
  list() {
    return this.dataSource$.value;
  }

  ngOnInit() {}
}
