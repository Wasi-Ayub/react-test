import React, { Component, useEffect, useState } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css"
import questionsData from './questions';

function Quiz() {
    const [currentQues, setCurrentQues] = useState(0);
    const [totalQues, setTotalQues] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [incorrectAns, setIncorrectAns] = useState(0);
    const [isCorrect, setIscorrect] = useState('');
    const [divHide, setDivHide] = useState(true);
    const [message, setMessage] = useState('');
    useEffect(() => {
        setTotalQues(questionsData.length);
        console.log('Questions', questionsData)
    }, [])

    const selectOption = (option) => {
        console.log('Options****', option, decodeURI(questionsData[currentQues].correct_answer));
        setDivHide(false);
        if(option === decodeURI(questionsData[currentQues].correct_answer)){
            setMessage('Correct!');
            setCorrectAns(correctAns+1);
        }
        else{
            setMessage('Sorry!')
        }
    }

    const next = () => {
        setCurrentQues(currentQues+1);
        setDivHide(true);
    }

    const question = () => {
        return (
            <div>
                <div style={{ margin: '40px 0px', lineHeight: 1.5 }}>
                    {decodeURI(questionsData[currentQues].question)}
                </div>
                <div>
                <div 
                    style={{ width: '40%', margin: '10px 7% 10px 0px', border: '2px solid grey', borderRadius: 3, float: 'left', textAlign: 'center', padding: '5px 0px', cursor: 'pointer' }}
                    onClick={() => selectOption(decodeURI(questionsData[currentQues].incorrect_answers[2]))}>
                        {decodeURI(questionsData[currentQues].incorrect_answers[2])}
                 </div>
                    <div
                        style={{ width: '40%', margin: '10px 0px 10px 7%', border: '2px solid grey', borderRadius: 3, float: 'left', textAlign: 'center', padding: '5px 0px', cursor: 'pointer' }}
                        onClick={() => selectOption(decodeURI(questionsData[currentQues].correct_answer))}>
                            {decodeURI(questionsData[currentQues].correct_answer)}
                        </div>
                    <div 
                        style={{ width: '40%', margin: '10px 7% 10px 0px', border: '2px solid grey', borderRadius: 3, float: 'left', textAlign: 'center', padding: '5px 0px', cursor: 'pointer' }}
                        onClick={() => selectOption(decodeURI(questionsData[currentQues].incorrect_answers[0]))}>
                            {decodeURI(questionsData[currentQues].incorrect_answers[0])}
                            </div>
                    <div 
                        style={{ width: '40%', margin: '10px 0px 10px 7%', border: '2px solid grey', borderRadius: 3, float: 'left', textAlign: 'center', padding: '5px 0px', cursor: 'pointer' }}
                        onClick={() => selectOption(decodeURI(questionsData[currentQues].incorrect_answers[1]))}>
                            {decodeURI(questionsData[currentQues].incorrect_answers[1])}
                        </div>
                </div>
                
                <div style={{ width: '100%', height: 250, textAlign: 'center', display: 'block', marginTop: '20px' }}>
                    {
                        divHide?
                        null:
                        <div style={{ fontSize: 24, color: 'grey', margin: '30px 0px' }}>{message}</div>
                    }
                    {
                        currentQues === questionsData.length -1 || divHide?
                        null:

                    <div 
                    style={{ width: '40%', margin: '20px auto', border: '2px solid grey', borderRadius: 3, textAlign: 'center', padding: '8px 0px', cursor: 'pointer' }}
                    onClick={next}>
                            Next Question
                    </div>
                }
                </div>
            </div>
        )
    }

    return (
        <div style={{ width: '40%', margin: '0px auto', border: '5px solid grey' }}>
            <div style={{ width: '100%' }}>
                <Progress
                    percent={(currentQues+1)*5}
                    style={{ height: 30 }}
                />
            </div>
            <div style={{ width: '80%', padding: '10%' }}>
                <div>
                <div style={{ fontSize: 24, color: 'grey', margin: 5 }}>Question {currentQues+1} of {questionsData.length}</div>
                    <div style={{ fontSize: 14, color: 'grey', margin: '3px 5px' }}>{decodeURI(questionsData[currentQues].category)}</div>
                    <div style={{ fontSize: 14, color: 'grey', margin: '3px 5px' }}>Stars</div>
                </div>
                {question()}
            </div>
            <div style={{ width: '100%', height: 30, bottom: 0 }}>
            <Progress
                    percent={correctAns*5}
                    style={{ height: 30 }}
                />
            </div>
        </div>
    );
}

export default Quiz;
