import { Injectable } from '@angular/core';
import { IQuestion, Question } from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormStorageService {

  constructor() { }

  public saveForm(form: IQuestion[]) {
    localStorage.setItem('form', JSON.stringify(form));
  }

  public getForm() {
    if(localStorage.getItem('form')){
      return JSON.parse(localStorage.getItem('form')!) as IQuestion[];
    }
    return undefined;
  }
}
