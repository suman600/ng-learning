import { Component, OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';
import { Quiz, QuizConfig, Option, Question, AnswerKey } from './models/index'
import { AngularFireList } from 'angularfire2/database';
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  quizListArry: AngularFireList<any>;
  currentQuestionIndex: number = 0;
  quizQuestions: Question[];
  quizzQuestionOptions: Option[];
  totalCorrectAns: number = 0;
  currentQuestionNo: number;
  answerkey: AnswerKey[] = [];

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit() {
    this.quizService.getAllQuestionList().subscribe((res: any) => {
      this.quizListArry = res;
    });
    this.updateQuizFun();
    
  }

  updateQuizFun() {
    this.quizQuestions = this.quizListArry[this.currentQuestionIndex];
    this.quizzQuestionOptions = this.quizListArry[this.currentQuestionIndex]['options'];
    this.currentQuestionNo = this.currentQuestionIndex + 1;

    for (let i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].id == this.quizListArry[this.currentQuestionIndex]['ansKey']) {
        ++this.totalCorrectAns;
      }
    }
  }

  nextQuestionFun() {
    if (this.currentQuestionIndex < 9) {
      ++this.currentQuestionIndex;
      this.updateQuizFun();
    }

  }

  previousQuestionFun() {
    if (this.currentQuestionIndex > 0) {
      --this.currentQuestionIndex;
      this.updateQuizFun();
    }

  }

  // =======================================================
  questionAnsweredFun(e: any, name: String, id: number) {
    if (e.target.checked) {
      this.answerkey.push(new AnswerKey(name, id));
    }
    else {
      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
  }

  submitQuizzFun() {
    console.log(this.totalCorrectAns);
    this.quizService._updateTotalCorrectAnswer(this.totalCorrectAns);
    this.router.navigate(['/quiz-result']);
  }

}
