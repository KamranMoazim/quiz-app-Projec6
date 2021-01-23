import React from 'react'

export type ReceivingQuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type ForwardingQuizType = {
    question: string
    // answer: string
    option: string[]
    correct_answer: string
}

export type questionPropsType = {
    question: string
    options: string[]
    callback: (e:React.FormEvent<EventTarget>, ans:string) => void
}

export type InputFormType = {
    callback: (level:string, questions:number) => void
}
