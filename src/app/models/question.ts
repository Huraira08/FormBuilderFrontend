import { QuestionType } from "./question-type";

export class Question {
    protected questionType: QuestionType
    protected question: string;
    protected answers: string[];
    protected required: boolean;
    protected correctAnswerIndex: number | number[];

    constructor(question: string, questionType: QuestionType, answers: string[], required: boolean, correctAnswerIndex: number | number[]) {
        this.question = question;
        this.questionType = questionType;
        this.answers = answers;
        this.required = required;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    public getQuestion(): string{
        return this.question;
    }

    public getQuestionType(): QuestionType{
        return this.questionType;
    }

    public getAnswers(): string[]{
        return this.answers;
    }

    public getCorrectAnswerIndex(): number|number[]{
        return this.correctAnswerIndex;
    }
}

export interface IQuestion{
    questionType: QuestionType
    question: string;
    answers: string[];
    required: boolean;
    correctAnswerIndex: number | number[];
}