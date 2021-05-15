import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoReceivedComponent } from './pages/info-received/info-received.component';
import { InvestorQuestionnaireComponent } from './pages/investor-questionnaire/investor-questionnaire.component';

const routes: Routes = [
  {
    path: '',
    component: InfoReceivedComponent
  },
  {
    path: 'questionario-investimento',
    component: InvestorQuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
