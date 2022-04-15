import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

import { AppAddMoneyItemComponent } from './components/body/add-money-item-modal/add-money-item.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { SharedModule } from './components/shared/shared.module';
import { BodyModule } from './components/body/body.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NavbarModule,
    BodyModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
