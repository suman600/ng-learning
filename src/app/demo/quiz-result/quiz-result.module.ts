import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizResultRoutingModule } from './quiz-result-routing.module';
import { QuizResultComponent } from './quiz-result.component';
import { QuizService } from "../quiz/services/quiz.service";

@NgModule({
  declarations: [
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    QuizResultRoutingModule
  ],
  providers:[QuizService]
})
export class QuizResultModule { }
