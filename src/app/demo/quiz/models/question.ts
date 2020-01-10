import {Option } from './options'
import { typeOfQuestion } from './type-of-question';
export class Question {
    id: number;
    name: string;
    options: Option[];
    typeOfQuestion: typeOfQuestion[];
    answered: boolean;

    constructor(data: any){
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.options = [];
        data.options.forEach((o: any) => {
            this.options.push(new Option(o))
        });
        data.typeOfQuestion.forEach((t:any) =>{
            this.typeOfQuestion.push(new typeOfQuestion(t))
        })
    }
}