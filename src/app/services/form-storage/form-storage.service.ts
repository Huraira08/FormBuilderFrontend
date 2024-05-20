import { Injectable } from '@angular/core';
import { IQuestion, Question } from '../../models/question';
import { FormMeta } from '../../models/form-meta';

@Injectable({
  providedIn: 'root'
})
export class FormStorageService {

  constructor() { }

  public saveForm(form: FormMeta) {
    localStorage.setItem('form', JSON.stringify(form));
  }

  public getForm() {
    if(localStorage.getItem('form')){
      return JSON.parse(localStorage.getItem('form')!) as FormMeta;
    }
    return undefined;
  }
}
