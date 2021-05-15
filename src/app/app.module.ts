import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InfoReceivedComponent } from './pages/info-received/info-received.component';
import { DialogTermAcceptComponent } from './components/dialog-term-accept/dialog-term-accept.component';
import { InvestorQuestionnaireComponent } from './pages/investor-questionnaire/investor-questionnaire.component';
import { DialogSuccessfulRegistrationComponent } from './components/dialog-successful-registration/dialog-successful-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoReceivedComponent,
    DialogTermAcceptComponent,
    InvestorQuestionnaireComponent,
    DialogSuccessfulRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
