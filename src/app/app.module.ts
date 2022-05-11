import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayout, SharedModule, TranslateService, SettingService } from 'admin-ng';
import { AppComponent } from './app.component';
import * as fa from '../assets/i18n/fa.json';
import * as en from '../assets/i18n/en.json';
const routes: Routes = [
  {
    path: '',
    component: MasterLayout,
    loadChildren: () => import('./modules/base/config/base.module').then((r) => r.BaseModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translateService: TranslateService, private settingService: SettingService) {
    this.translateService.languages = [
      {
        text: 'فارسی',
        dir: 'rtl',
        code: 'fa',
        translateItems: fa,
        default: true
      },
      {
        text: 'english',
        dir: 'ltr',
        code: 'en',
        translateItems: en,
        default: false
      }
    ];
    this.settingService.menuItems = [
      {
        id: 1,
        text: 'منو 1',
        parrentId: 0,
        url: '',
        children: [
          {
            id: 100,
            parrentId: 1,
            children: [],
            text: 'زیر منو 1',
            url: ''
          },
          {
            id: 101,
            parrentId: 1,
            children: [],
            text: 'زیر منو 2',
            url: ''
          }
        ]
      },
      {
        id: 2,
        text: 'منو 2',
        parrentId: 0,
        url: '',
        children: []
      }
    ]
  }
}
