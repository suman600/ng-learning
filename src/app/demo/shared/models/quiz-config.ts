export class QuizConfig {
    allowBack: boolean;
    allowReview: boolean;
    autoMove: boolean;
    duration: number;
    pageSize: number;
    requiredAll: boolean;
    richText: boolean;
    shuffleQuestions: boolean;
    shuffleOptions: boolean;
    showClock: boolean;
    showPager: boolean;
    theme: string;
    startQuiz:boolean;
    resultQuizz:boolean;

    constructor(data: any){
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
        this.startQuiz = data.startQuiz;;
        this.resultQuizz = data.showResult;
    }
}