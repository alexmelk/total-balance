import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {}
