import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ProfileQuestioraireService } from 'src/app/services/profile-questionaire.service';
import IDynamicQuestion from 'src/app/interfaces/IDynamicQuestion';

@Component({
  selector: 'app-profile-questionnaire',
  templateUrl: './profile-questionnaire.component.html',
  styleUrls: ['./profile-questionnaire.component.css']
})
export class ProfileQuestionnaireComponent implements OnInit {
  @ViewChild('success') successTemplateRef: TemplateRef<any>;
  public questionaireForm: FormGroup;
  public dynamicQuestions: IDynamicQuestion[];
  public selectOptions: string[];
  public investmentsTypesQuestions = [
    {
      question: 'Títulos de renda fixa ou tesouro direto',
      field: 'rendaFixaTesouroDireto'
    },
    {
      question: 'Fundos de investimento',
      field: 'fundosInvestimentos'
    },
    {
      question: 'Ações a vista',
      field: 'acoesAVista'
    },
    {
      question: 'Aluguel de ações, Termos, Opções e futuros',
      field: 'aluguelAcoesTermosOpFuturos'
    },
  ];

  constructor(
    private qService: ProfileQuestioraireService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  async generateForm() {
    this.dynamicQuestions = await this.qService.getQuestions();

    const dynamicQuestions = {};
    this.dynamicQuestions.forEach(question => {
      dynamicQuestions[question.field] = [null, Validators.required]
    });

    this.questionaireForm = this.fb.group(dynamicQuestions);
    this.questionaireForm.addControl('investmentsTypes', this.getInvestmentsTypesForm());
  }

  getInvestmentsTypesForm() {
    return this.fb.group({
      rendaFixaTesouroDireto: [null, Validators.required],
      fundosInvestimentos: [null, Validators.required],
      acoesAVista: [null, Validators.required],
      aluguelAcoesTermosOpFuturos: [null, Validators.required]
    });
  }

  async loadSelectOptions() {
    if (this.selectOptions) {
      return;
    }

    this.selectOptions = await this.qService.getSelecOptions();
  }

  submitForm() {
    this.dialog.open(this.successTemplateRef, {
      disableClose: true
    });
  }

  getDynamicQuestionsAnswer(controlName: string) {
    const answerOptionIndex = this.questionaireForm.value[controlName];
    const questionData = this.dynamicQuestions.find(q => q.field === controlName);

    return questionData.options[answerOptionIndex];
  }

  getInvestmentsTypesAnswer(controlName: string) {
    const formGroupValue = this.questionaireForm.value['investmentsTypes'];
    const answerOptionIndex = formGroupValue[controlName];
    return this.selectOptions[answerOptionIndex];
  }
}
