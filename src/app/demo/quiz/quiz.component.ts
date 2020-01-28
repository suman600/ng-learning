import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz.service';
import { Quiz, Option, Question } from '../shared/models/quiz'
import { AngularFireList } from 'angularfire2/database';
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  quizListArry: any;
  currentQuestionIndex: number = 0;
  quizQuestions: Question[];
  quizzQuestionOptions: Option[];
  totalCorrectAns: number = 0;
  quizLength: number;
  currentQuestionNo: number = 0;
  selectedOption: any;
  correctAnswer: boolean;
  questionAnswerKey: number;



  constructor(
    private quizService: QuizService, private router: Router) {
  }

  ngOnInit() {
    this.quizService.getAllQuestionList().subscribe(res => {
      this.quizListArry = res;
      this.quizLength = this.quizListArry.length;
      console.log(this.quizListArry);
      this.updateQuizFun();
    })

    console.log(this.quizListArry);
  }


  updateQuizFun() {
    this.quizQuestions = this.quizListArry[this.currentQuestionIndex];
    this.quizzQuestionOptions = this.quizListArry[this.currentQuestionIndex]['options'];
    this.questionAnswerKey = this.quizListArry[this.currentQuestionIndex]['ansKey']
    this.currentQuestionNo = this.currentQuestionIndex + 1;
    // for (let i = 0; i < this.answerkey.length; i++) {
    //   if (this.answerkey[i]['ans_id'] == this.quizListArry[this.currentQuestionIndex]['ansKey']) {
    //     ++this.totalCorrectAns;
    //   }
    // }

  }

  nextQuestionFun() {
    if (this.currentQuestionNo < this.quizLength) {
      ++this.currentQuestionIndex;
      this.updateQuizFun();
    } else {
      return false;

    }
  }

  previousQuestionFun() {
    if (this.currentQuestionNo > 1) {
      --this.currentQuestionIndex;
      this.updateQuizFun();
    }
  }

  // =======================================================
  questionAnsweredFun(e: any, option: any) {
    if (e.target.checked) {
      this.selectedOption = option;
      if (option.id == this.questionAnswerKey) {
        option.correctAnswer = true;
        //option.inCorrectAnswer = false;
        ++this.totalCorrectAns;

      } else {
        //option.inCorrectAnswer = true;
        option.correctAnswer = false;
        --this.totalCorrectAns;
      }
    }
  }

  submitQuizzFun() {
    console.log(this.totalCorrectAns);
    this.quizService._updateTotalCorrectAnswer(this.totalCorrectAns);
    this.router.navigate(['/quiz-result']);
  }

}
