import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { AppAddMoneyItemComponent } from './add-money-item-modal/add-money-item.component';
import { SharedModule } from '../shared/shared.module';
import { WalletTableModule } from './wallet-table/wallet-table.module';

@NgModule({
    declarations: [BodyComponent, AppAddMoneyItemComponent],
    imports: [SharedModule, WalletTableModule],
    exports: [BodyComponent, AppAddMoneyItemComponent],
    providers: [AppAddMoneyItemComponent],
})
export class BodyModule {}
