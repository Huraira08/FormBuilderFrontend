import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

// pages
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';
import { FillFormPageComponent } from './pages/fill-form-page/fill-form-page.component';

// custom components
import { MultipleChoiceOptionsComponent } from './components/multiple-choice-options/multiple-choice-options.component';
import { CheckboxOptionsComponent } from './components/checkbox-options/checkbox-options.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';

// Ng zorro imports
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ShortQuestionOptionsComponent } from './components/short-question-options/short-question-options.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderPageComponent,
    FillFormPageComponent,
    MultipleChoiceOptionsComponent,
    CheckboxOptionsComponent,
    DropdownOptionsComponent,
    ShortQuestionOptionsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzFlexModule,
    NzIconModule,
    NzCheckboxModule,
    NzRadioModule,
    NzDividerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
