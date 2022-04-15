import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { WalletTableComponent } from './wallet-table/wallet-table.component';
import { AppAddMoneyItemComponent } from './add-money-item-modal/add-money-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BodyComponent, WalletTableComponent, AppAddMoneyItemComponent],
  imports: [SharedModule],
  exports: [BodyComponent, WalletTableComponent, AppAddMoneyItemComponent],
  providers: [AppAddMoneyItemComponent],
})
export class BodyModule {}
