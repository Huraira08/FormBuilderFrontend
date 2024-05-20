import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';
import { FillFormPageComponent } from './pages/fill-form-page/fill-form-page.component';

const routes: Routes = [
  {path: "", redirectTo: "fill-form", pathMatch: "full"},
  {path: "form-builder", component: FormBuilderPageComponent},
  {path: 'fill-form', component: FillFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
