import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoReceivedComponent } from './pages/info-received/info-received.component';
import { ProfileQuestionnaireComponent } from './pages/profile-questionnaire/profile-questionnaire.component';

const routes: Routes = [
  {
    path: '',
    component: InfoReceivedComponent
  },
  {
    path: 'profile-questionnaire',
    component: ProfileQuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
