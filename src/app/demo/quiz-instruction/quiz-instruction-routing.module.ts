import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizInstructionComponent } from './quiz-instruction.component';

const routes: Routes = [
  { path: '', component: QuizInstructionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizInstructionRoutingModule { }
