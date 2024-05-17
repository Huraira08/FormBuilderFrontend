import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '../../models/question-type';
import { Question } from '../../models/question';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrl: './form-builder-page.component.css'
})
export class FormBuilderPageComponent {
  metaForm!: FormGroup;
  radioValue: any;

  constructor(private formBuilder: FormBuilder){
    this.metaForm = this.formBuilder.group({
    formTitle: ['', Validators.required],
    formDescription: ['', Validators.required],
    formQuestions: this.formBuilder.array([
      this.formBuilder.group({
        question: ['', Validators.required],
        questionType: ['', Validators.required],
        answers: this.formBuilder.array([
          this.formBuilder.control('', [Validators.required])
        ]),
        correctAnswer: ['', [Validators.required]],
        required: [false]
      })
    ])
    });
  }

  get formQuestions() {
    return this.metaForm.get('formQuestions') as FormArray;
  }

  getAnswers(index: number){
    return this.formQuestions.at(index).get('answers') as FormArray;
  }

  createForm() {
    console.log(this.metaForm.value)
    let questions: Question[]=[];
    this.formQuestions.value.forEach((question:any) =>{
      questions.push(new Question(question.question, question.questionType, 
        question.answers, question.required, question.correctAnswer));
    })
    console.log(questions)
  }

  addQuestion(){
    this.formQuestions.push(this.formBuilder.group({
      question: ['', Validators.required],
      questionType: ['', Validators.required],
      answers: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required])
      ]),
      correctAnswer: ['', [Validators.required]],
      required: [false]
    }));
  }

  addAnswer(index: number){
    if(this.getAnswers(index).length < 4){
      this.getAnswers(index).push(this.formBuilder.control('', [Validators.required]));
    }
  }

  removeAnswer(questionIndex: number, answerindex: number) {
    this.getAnswers(questionIndex).removeAt(answerindex);
  }

  isShortQuestion(index: number){
    return this.formQuestions.at(index).get('questionType')!.value === QuestionType.ShortQuestion;
  }

  handleTypeChange(type: QuestionType, index: number){
    console.log(type)
    if(type === 0){
      const answers = this.getAnswers(index);
      answers.clear();
      answers.push(this.formBuilder.control('', [Validators.required]));
    }
  }

  // handleRadioChange($event: any) {
  //   console.log($event)
  // }
}
