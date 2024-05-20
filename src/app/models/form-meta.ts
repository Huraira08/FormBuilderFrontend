import { IQuestion } from "./question";

export interface FormMeta {
    formTitle: string;
    formDescription?: string;
    formQuestions: IQuestion[];
}
