import { Component } from '@angular/core';
import { FormStorageService } from '../../services/form-storage/form-storage.service';
import { FormMeta } from '../../models/form-meta';

@Component({
  selector: 'app-fill-form-page',
  templateUrl: './fill-form-page.component.html',
  styleUrl: './fill-form-page.component.css'
})
export class FillFormPageComponent {
  formMeta!: FormMeta
  constructor(private formStorageService: FormStorageService){
    this.formMeta = this.formStorageService.getForm()!
    console.log(this.formMeta)
  }
}
