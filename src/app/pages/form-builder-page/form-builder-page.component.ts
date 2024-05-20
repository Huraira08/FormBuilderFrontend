import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '../../models/question-type';
import { IQuestion, Question } from '../../models/question';
import { FormStorageService } from '../../services/form-storage/form-storage.service';
import { FormMeta } from '../../models/form-meta';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrl: './form-builder-page.component.css'
})
export class FormBuilderPageComponent {
  metaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private formStorageService: FormStorageService){
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

  getQuestionType(index: number){
    return this.formQuestions.at(index).get('questionType')!.value;
  }

  createForm() {
    
    // let questions: IQuestion[]=[];
    // this.formQuestions.value.forEach((questionValue:any) =>{
    //   questions.push({
    //     questionType: questionValue.questionType,
    //   question: questionValue.question,
    //   answers: questionValue.answers,
    //   required: questionValue.required,
    //   correctAnswerIndex: questionValue.correctAnswer
    //   });
    // })
    // let questions: IQuestion[] = this.metaForm.value
    const formMeta: FormMeta = this.metaForm.value
    console.log(formMeta)
    this.formStorageService.saveForm(formMeta);
    // const newQuestions = this.formStorageService.getForm()! as IQuestion[];
    // console.log(newQuestions[0].answers)
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
    const correctAnswer = this.formQuestions.at(index).get('correctAnswer')! as FormControl
    if (type === QuestionType.CheckboxQuestion) {
      correctAnswer.setValue([]);
    } else if (type === 0 || type === 1 || type === 3){
      correctAnswer.setValue('');
    }
  }

  handleCorrectAnswerChecked(questionIndex: number, answerIndex: number, checked:any){
    console.log(checked)
    const correctAnswer = this.formQuestions.at(questionIndex).get('correctAnswer')!.value as number[];
    const answerExists = correctAnswer.includes(answerIndex);

    if(checked){
      if (!answerExists) {
        correctAnswer.push(answerIndex);
      }
    }else{
      if (answerExists) {
        correctAnswer.splice(correctAnswer.indexOf(answerIndex), 1);
        console.log(correctAnswer)
      }
    }
  }

  handleRemove(questionIndex: number, answerIndex: number){
    this.removeAnswer(questionIndex, answerIndex);
  }
}
