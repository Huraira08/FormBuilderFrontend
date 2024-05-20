import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/question';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrl: './dropdown-options.component.css'
})
export class DropdownOptionsComponent {
  @Input() question!: IQuestion

  selectedOption!: string;
}
