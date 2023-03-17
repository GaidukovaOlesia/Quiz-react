import React, {useState, useEffect} from "react";
import QuizCard from "./quizCard";
import {Box, styled} from "@mui/material";
import {quiz} from "../api";

const QuizWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}))

export default function QuizList() {
    let [quizData, setQuiz] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await quiz.fetch();
                setQuiz(data);
            } catch (err) {
                console.log(err);
            }

        })();
    }, []);

    return (
            <QuizWrapper>
                {quizData.map((quiz, index) => (
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
