import { Component} from "react";
import QuizCard from "./quizCard";
import {Box, styled} from "@mui/material";
import {quiz} from "../api";

const QuizWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}))

export default class QuizList extends Component {
    state = {
        quizData: []
    }
    constructor() {
        super();
    }

    render() {
        return (
            <QuizWrapper>
                {this.state.quizData.map((quiz, index) => (
                    <QuizCard
                        key={index}
                        quizName={quiz.nameQuiz}
                        id={index}
                        quizImage={quiz.avatar}
                        quizDescription={quiz.description}
                    />
                ))}
            </QuizWrapper>
        )
    }

    componentDidMount() {
        quiz.fetch()
            .then(quiz => this.setState({...this.state, quizData: quiz.data}))
    }
}
