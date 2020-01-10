import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizInstructionRoutingModule } from './quiz-instruction-routing.module';
import { QuizInstructionComponent } from './quiz-instruction.component';


@NgModule({
  declarations: [
    QuizInstructionComponent
  ],
  imports: [
    CommonModule,
    QuizInstructionRoutingModule
  ],
})
export class QuizInstructionModule { }
