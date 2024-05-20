import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/question';

@Component({
  selector: 'app-short-question-options',
  templateUrl: './short-question-options.component.html',
  styleUrl: './short-question-options.component.css'
})
export class ShortQuestionOptionsComponent {
  @Input() question!: IQuestion

  answer!: string
}
