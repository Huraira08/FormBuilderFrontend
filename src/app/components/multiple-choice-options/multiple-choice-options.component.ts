import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/question';

@Component({
  selector: 'app-multiple-choice-options',
  templateUrl: './multiple-choice-options.component.html',
  styleUrl: './multiple-choice-options.component.css'
})
export class MultipleChoiceOptionsComponent {
  @Input() question!: IQuestion

  selectedAnswer!: string
}
