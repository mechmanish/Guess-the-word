import React, { useState, useEffect } from "react";
import GuessBox from "./guessBox";
import ScoreCard from "./scoreCard";
import "./index.css";

export default function Guess() {
    const assignWord = 'HELLOWORLD';
    let wordLength = assignWord.length;
    const [attempts, setAttempts] = useState(0);
    const [arrWord, setArrWord] = useState([]);
    const [scorePoints, setScorePoints] = useState();
    const [currentScoreCard, setCurrentScoreCard] = useState();
    const [finalScoreCard, setFinalScoreCard] = useState();
    const [clickedState, setClickedState] = useState();
    const [arrKeyboard, setArrKeyboard] = useState([
        {
            key: 1,
            clicked: false,
            letter: 'A',
        },
        {
            key: 2,
            clicked: false,
            letter: 'B',
        },
        {
            key: 3,
            clicked: false,
            letter: 'C',
        },
        {
            key: 4,
            clicked: false,
            letter: 'D',
        },
        {
            key: 5,
            clicked: false,
            letter: 'E',
        },
        {
            key: 6,
            clicked: false,
            letter: 'F',
        },
        {
            key: 7,
            clicked: false,
            letter: 'G',
        },
        {
            key: 8,
            clicked: false,
            letter: 'H',
        },
        {
            key: 9,
            clicked: false,
            letter: 'I',
        },
        {
            key: 10,
            clicked: false,
            letter: 'J',
        },
        {
            key: 11,
            clicked: false,
            letter: 'K',
        },
        {
            key: 12,
            clicked: false,
            letter: 'L',
        },
        {
            key: 13,
            clicked: false,
            letter: 'M',
        },
        {
            key: 14,
            clicked: false,
            letter: 'N',
        },
        {
            key: 15,
            clicked: false,
            letter: 'O',
        },
        {
            key: 16,
            clicked: false,
            letter: 'P',
        },
        {
            key: 17,
            clicked: false,
            letter: 'Q',
        },
        {
            key: 18,
            clicked: false,
            letter: 'R',
        },
        {
            key: 19,
            clicked: false,
            letter: 'S',
        },
        {
            key: 20,
            clicked: false,
            letter: 'T',
        },
        {
            key: 21,
            clicked: false,
            letter: 'U',
        },
        {
            key: 22,
            clicked: false,
            letter: 'V',
        },
        {
            key: 23,
            clicked: false,
            letter: 'W',
        },
        {
            key: 24,
            clicked: false,
            letter: 'X',
        },
        {
            key: 25,
            clicked: false,
            letter: 'Y',
        },
        {
            key: 26,
            clicked: false,
            letter: 'Z',
        },

    ]);

    useEffect(() => {
        if (currentScoreCard) {
            let item = [];
            if (finalScoreCard) {
                finalScoreCard.map(h => {
                    item.push(h);
                });
                item.push(currentScoreCard);
                setFinalScoreCard(item);
            } else {
                item.push(currentScoreCard);
                setFinalScoreCard(item);
            }
        }
    }, [currentScoreCard]);

    return (
        <div className="flex justify-between m-4">
            <div>
                <GuessBox
                    assignWord={assignWord}
                    wordLength={wordLength}
                    arrWord={arrWord}
                    setArrWord={setArrWord}
                    arrKeyboard={arrKeyboard}
                    setArrKeyboard={setArrKeyboard}
                    scorePoints={scorePoints}
                    setScorePoints={setScorePoints}
                    attempts={attempts}
                    setAttempts={setAttempts}
                    setCurrentScoreCard={setCurrentScoreCard}
                    clickedState={clickedState}
                />
            </div>
            <div>
                <ScoreCard
                    wordLength={wordLength}
                    scorePoints={scorePoints}
                    finalScoreCard={finalScoreCard}
                    clickedState={clickedState}
                    setClickedState={setClickedState}
                />
            </div>
        </div>
    );
} 