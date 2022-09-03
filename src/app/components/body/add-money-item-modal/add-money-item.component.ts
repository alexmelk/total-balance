import { Component, EventEmitter, OnInit } from '@angular/core';
import { currencySymbolType } from '../body.component';
import { take } from 'rxjs';
import * as _ from 'lodash';
import { WalletItemModel } from '../wallet-table/models/wallet-item-model';

@Component({
    selector: 'app-add-money-item',
    templateUrl: './add-money-item.component.html',
    styleUrls: ['./add-money-item.component.less'],
})
export class AppAddMoneyItemComponent implements OnInit {
    visible = false;
    types = [
        { value: currencySymbolType.rub, title: 'RUB' },
        { value: currencySymbolType.euro, title: 'EURO' },
        { value: currencySymbolType.usd, title: 'USD' },
    ];
    type = _.first(this.types);
    model = <WalletItemModel>{
        type: this.type?.value,
        comment: '',
    };

    dialogResult: EventEmitter<DialogResult<WalletItemModel>> =
        new EventEmitter<DialogResult<WalletItemModel>>();

    constructor() {}

    ngOnInit(): void {}

    open() {
        this.visible = true;
        return this.dialogResult.pipe(take(1));
    }

    onEmit() {
        this.dialogResult.emit(<DialogResult<WalletItemModel>>{
            result: true,
            value: this.model,
        });
        this.close();
    }

    onClose() {
        this.close();
    }

    close() {
        this.dialogResult.emit(<DialogResult<WalletItemModel>>{
            result: false,
            value: this.model,
        });
        this.model = <WalletItemModel>{
            type: this.type?.value,
            comment: '',
        };
        this.visible = false;
    }

    setType(value: any) {
        this.type = value;
        this.model.type = value.value;
    }
}

export interface DialogResult<T> {
    result: boolean;
    value: T;
}
