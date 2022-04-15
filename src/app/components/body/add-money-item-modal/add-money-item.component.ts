import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoneyItemModel } from '../wallet-table/models';
import { currencySymbolType } from '../body.component';
import { map, take } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-money-item',
  templateUrl: './add-money-item.component.html',
  styleUrls: ['./add-money-item.component.less'],
})
export class AppAddMoneyItemComponent implements OnInit {
  types = [
    { value: currencySymbolType.rub, title: 'RUB' },
    { value: currencySymbolType.euro, title: 'EURO' },
    { value: currencySymbolType.usd, title: 'USD' },
  ];
  type = this.types[0];
  setType(value: any) {
    this.type = value;
    this.model.type = value.value;
  }
  model = <MoneyItemModel>{
    type: _.first(this.types)?.value,
    comment: '',
  };
  visible = false;
  dialogResult: EventEmitter<DialogResult<MoneyItemModel>> = new EventEmitter<
    DialogResult<MoneyItemModel>
  >();
  constructor() {}
  ngOnInit(): void {}

  openDialog() {
    this.visible = true;
    return this.dialogResult.pipe(take(1));
  }

  onEmit() {
    this.dialogResult.emit(<DialogResult<MoneyItemModel>>{
      result: true,
      value: this.model,
    });
    this.close();
  }

  onClose() {
    this.close();
  }
  close() {
    this.dialogResult.emit(<DialogResult<MoneyItemModel>>{
      result: false,
      value: this.model,
    });
    this.model = <MoneyItemModel>{
      type: this.type?.value,
      comment: '',
    };
    this.visible = false;
  }
}

export interface DialogResult<T> {
  result: boolean;
  value: T;
}
