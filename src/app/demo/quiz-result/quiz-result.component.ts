import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/services/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  totalCorrectAnswer: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.updateTotalCorrectAnswer.subscribe(_totalCorrectAnswer =>
      this.totalCorrectAnswer = _totalCorrectAnswer
    )
    
  }

}
