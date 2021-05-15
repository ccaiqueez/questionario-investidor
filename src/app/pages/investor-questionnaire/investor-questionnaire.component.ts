import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { InvestorQuestionnaireService } from 'src/app/services/investor-questionnaire.service';
import IDynamicQuestion from 'src/app/interfaces/IDynamicQuestion';

@Component({
  selector: 'app-investor-questionnaire',
  templateUrl: './investor-questionnaire.component.html',
  styleUrls: ['./investor-questionnaire.component.css']
})
export class InvestorQuestionnaireComponent implements OnInit {
  @ViewChild('registerSaved') successTemplateRef: TemplateRef<any>;

  public questionaireForm: FormGroup;
  public dynamicQuestions: Array<IDynamicQuestion>;
  public investmentsTypesQuestions: Array<any>;
  public selectOptions: Array<String>;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private api: InvestorQuestionnaireService
  ) {
    this.investmentsTypesQuestions = [
      {
        question: 'Títulos de renda fixa ou tesouro direto',
        field: 'fixedIncomeDirectTreasury'
      },
      {
        question: 'Fundos de investimento',
        field: 'investmentFunds'
      },
      {
        question: 'Ações a vista',
        field: 'cashShares'
      },
      {
        question: 'Aluguel de ações, Termos, Opções e futuros',
        field: 'rentAction'
      },
    ]
  }

  ngOnInit(): void {
    this.generateForm();
  }

  async generateForm() {
    const dynamicQuestions = {} as any;

    this.dynamicQuestions = await this.api.getQuestions();

    this.dynamicQuestions.forEach(question => {
      dynamicQuestions[question.field] = [null, Validators.required]
    });

    this.questionaireForm = this.fb.group(dynamicQuestions);
    this.questionaireForm.addControl('investmentsTypes', this.getInvestmentsTypesForm());
  }

  getInvestmentsTypesForm() {
    return this.fb.group({
      fixedIncomeDirectTreasury: [null, Validators.required],
      investmentFunds: [null, Validators.required],
      cashShares: [null, Validators.required],
      rentAction: [null, Validators.required]
    });
  }

  async loadSelectOptions() {
    if (this.selectOptions) return

    this.selectOptions = await this.api.getSelecOptions();
  }

  getDynamicQuestionSelected(controlName: string): String {
    const answerOptionIndex = this.questionaireForm.value[controlName];
    const questionData = this.dynamicQuestions.find(result => result.field === controlName);

    return questionData.options[answerOptionIndex];
  }

  getInvestmentTypeSelected(controlName: string): String {
    const formGroupValue = this.questionaireForm.value['investmentsTypes'];
    const answerOptionIndex = formGroupValue[controlName];
    return this.selectOptions[answerOptionIndex];
  }
  
  submit() {
    this.dialog.open(this.successTemplateRef, {
      disableClose: true
    });
  }

}
