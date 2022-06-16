import { NgModule } from '@angular/core';
import {
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MatDateFormats,
  MatNativeDateModule,
} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule  } from '@angular/fire/compat';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
