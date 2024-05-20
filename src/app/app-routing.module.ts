import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderPageComponent } from './pages/form-builder-page/form-builder-page.component';
import { FillFormPageComponent } from './pages/fill-form-page/fill-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomePageComponent},
  {path: "form-builder", component: FormBuilderPageComponent},
  {path: 'fill-form', component: FillFormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
