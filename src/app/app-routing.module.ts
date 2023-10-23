import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CatsComponent } from './cats/cats.component';
import { CatComponent } from './cat/cat.component';
import { CatFileComponent } from './catFile/catFile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//welcome
const routes: Routes = [
{path : 'cats',component: CatComponent},
{path : 'catFile',component: CatFileComponent},
{path : '**',component: CatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule,FormsModule,ReactiveFormsModule]
})
export class AppRoutingModule { }