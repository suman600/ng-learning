import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()


export class QuizService implements OnInit {
  

  private totalCorrectAnswer = new BehaviorSubject<number>(1);
  updateTotalCorrectAnswer = this.totalCorrectAnswer.asObservable();

  _updateTotalCorrectAnswer(_totalCorrectAnswer: number) {
    this.totalCorrectAnswer.next(_totalCorrectAnswer)
  }

  constructor( private db: AngularFireDatabase ) { }

  ngOnInit() {

  }

  getAllQuestionList():Observable<any> {
   return this.db.list<any>('/questions').valueChanges();
  }

}

