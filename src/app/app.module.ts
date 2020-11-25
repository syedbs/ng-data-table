import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TableComponent } from './table/table.component';
import { DemoNgZorroAntdModule } from './ng-zorro.module';
import { TableFilterDirective } from './table-filter.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    // directive
    TableFilterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    // NzLayoutModule,
    // NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule
  ],
  exports: [
    TableComponent,
    TableFilterDirective
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
