import { QuizConfig } from './quiz-config';
import { Question } from './question';


export class Quiz {
    id: number;
    name: string;
    config: QuizConfig;
    questions: Question[];
    
    constructor(data: any) {
        if (data) {
            this.name = data.name;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach((q: any) => {
                this.questions.push(new Question(q))
            });
        }
    }

}