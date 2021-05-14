import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import IDynamicQuestion from 'src/app/interfaces/IDynamicQuestion';

@Injectable({
  providedIn: 'root'
})
export class ProfileQuestioraireService {
  private URL = 'https://my-json-server.typicode.com/ccaiqueez/questionario-service';

  constructor(private http: HttpClient) { }

  getQuestions(): Promise<IDynamicQuestion[]> {
    return this.http.get<IDynamicQuestion[]>(`${this.URL}/dynamic_questions`).toPromise();
  }

  getSelecOptions() {
    return this.http.get<string[]>(`${this.URL}/select_investment_option`).toPromise();
  }
}
