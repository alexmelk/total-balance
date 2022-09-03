import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletTableComponent } from './/wallet-table.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [WalletTableComponent],
    exports: [WalletTableComponent],
})
export class WalletTableModule {}
