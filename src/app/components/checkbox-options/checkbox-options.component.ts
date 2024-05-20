import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/question';

@Component({
  selector: 'app-checkbox-options',
  templateUrl: './checkbox-options.component.html',
  styleUrl: './checkbox-options.component.css'
})
export class CheckboxOptionsComponent {
  @Input() question!: IQuestion
}
