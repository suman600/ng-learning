import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.component.html',
  styleUrls: ['./quiz-instruction.component.css']
})
export class QuizInstructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  
  }

  startQuizFun(){
    this.router.navigate(['/quiz'])
  }

}
