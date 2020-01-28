export class Option {
    opt_id: number;
    opt_name: string;

    constructor(opt_id: number, opt_name: string) {
        this.opt_id = opt_id;
        this.opt_name = opt_name;
    }
}

export class typeOfQuestion {
    type_id: number;
    type_name: string;

    constructor(type_id: number, type_name: string) {
        this.type_id = type_id;
        this.type_name = type_name
    }
}

export class Question {
    q_id: number;
    q_name: string;
    q_options: Option[];
    typeOfQuestion: typeOfQuestion[];

    constructor(q_id: number, q_name: string, q_options: Option[], typeOfQuestion: typeOfQuestion[]) {
        this.q_id = q_id;
        this.q_name = q_name;
        this.q_options = q_options;
        this.typeOfQuestion = typeOfQuestion;
    }

}

export class Quiz {
    questions: Question[];

    constructor(questions: Question[]) {
        this.questions = questions;
    }
}

export class AnswerKey {
    ans_name: string;
    ans_id: number;

    constructor(ans_name: string, ans_id: number) {
        this.ans_id = ans_id;
        this.ans_name = ans_name;
    }
}
