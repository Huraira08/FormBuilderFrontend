import { QuestionType } from "./question-type";

export class Question {
    protected questionType: QuestionType
    protected question: string;
    protected answers: string[];
    protected required: boolean;
    protected correctAnswer: string;

    constructor(question: string, questionType: QuestionType, answers: string[], required: boolean, correctAnswer: string) {
        this.question = question;
        this.questionType = questionType;
        this.answers = answers;
        this.required = required;
        this.correctAnswer = correctAnswer;
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

    public getCorrectAnswer(): string{
        return this.correctAnswer;
    }
}
