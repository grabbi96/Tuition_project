import { SET_ANSWER, SET_QUESTION } from '../actions/actionTypes'
const init = {
    quiz: [
        // {
        //     question: " one What is javascript",
        //     name: 'javascript',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "two What is javascript",
        //     name: 'javascript1',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "three What is javascript",
        //     name: 'javascript2',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "four What is javascript",
        //     name: 'javascript3',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },

        // {
        //     question: "five What is javascript",
        //     name: 'javascript4',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "six What is javascript",
        //     name: 'javascript5',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "seven What is javascript",
        //     name: 'javascript6',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: " eight What is javascript",
        //     name: 'javascript7',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "nine What is javascript",
        //     name: 'javascript8',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "ten What is javascript",
        //     name: 'javascript9',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "11 What is javascript",
        //     name: 'javascript10',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },
        // {
        //     question: "12 What is javascript",
        //     name: 'javascript11',
        //     options: [
        //         { value: "htmldfdfd", label: "htmlass" },
        //         { value: "htmlasfsdf", label: "htmlasa" },
        //         { value: "htmlasdf", label: "htmlasa" },
        //         { value: "rabbi", label: "rabbi" },
        //     ],
        //     answer: 'rabbi'
        // },

    ],
    questions: [],
    answers: []
}
const quizReducer = (store = init, action) => {
    switch (action.type) {
        case SET_QUESTION: {
            return {
                ...store,
                questions: action.payload.questions
            }
        }
        case SET_ANSWER: {
            return {
                ...store,
                answers: action.payload.answers
            }
        }
        default: return store
    }

}

export default quizReducer