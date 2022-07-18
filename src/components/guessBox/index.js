import React, { useEffect } from "react";
import './index.css';

export default function GuessBox(
    {
        assignWord,
        wordLength,
        arrWord,
        setArrWord,
        arrKeyboard,
        setArrKeyboard,
        scorePoints,
        setScorePoints,
        attempts,
        setAttempts,
        setCurrentScoreCard,
        clickedState,
    }
) {
    let clickAttempt = attempts > 0 ? attempts : 0;
    let scorePoint = 0;
    let wordLengthRemaining;

    useEffect(() => {
        setArrWord(assignWord.split(''));
    }, []);

    useEffect(() => {
        let clickedLetterArr = [];
        if (attempts > 0) {
            arrKeyboard.map(l => {
                if (l.clicked) {
                    clickedLetterArr.push(l);
                }
            });
            wordLengthRemaining = wordLength - scorePoint;
            let CurrentObj = {
                clickedLetters: clickedLetterArr,
                attempts: attempts,
                remainingLetters: wordLengthRemaining,
                scorePoint: scorePoints ? scorePoints : scorePoint,
            }
            setCurrentScoreCard(CurrentObj);
        }
    }, [attempts]);

    //for the keyboard action
    function btnClickHandler(keyBtn) {
        let updateBtn = [];
        keyBtn && arrKeyboard.map((btn) => {
            if (keyBtn.key === btn.key) {
                btn.clicked = true;
            }
            updateBtn.push(btn);
        })
        clickAttempt += 1;

        setAttempts(clickAttempt);
        setArrKeyboard(updateBtn)
    }

    //to display the letter if present in guess word
    function displayword(letter) {
        let oneBox;
        arrKeyboard.map((item) => {
            if (item.clicked && item.letter === letter) {
                scorePoint += 1;
                setScorePoints(scorePoint);
                oneBox = letter;
            }
        });
        return oneBox;
    }

    //To display the guessed letters in a particular attempt in a guess word 
    function clickedDisplayword(letter) {
        let oneBox;
        clickedState.clickedLetters.map((item) => {
            if (item.letter === letter) {
                oneBox = letter;
            }
        });
        return oneBox;
    }

    //To show clicked letter in a keyboard in a particular attempt
    function handleClickedStateKeyBoard(item) {
        let click = false;
        clickedState.clickedLetters.map((l) => {
            if (l.key === item.key) {
                return click = l.clicked;
            }
        })
        return click;
    }

    return (
        <div className="guessApp">
            <div>
                <div>
                    <p>
                        Guess the following word
                    </p>
                    <div>
                        {wordLength > 0 && arrWord && (!clickedState)
                            ? (
                                arrWord.map((letter) => {
                                    let displayLetter = displayword(letter);
                                    return (
                                        <span className={'wordBox'}>
                                            {displayLetter ? displayLetter : ''}
                                        </span>
                                    )
                                })
                            ) : (
                                clickedState && arrWord.map((letter) => {
                                    let displayLetter = clickedDisplayword(letter);
                                    return (
                                        <span className={'wordBox'}>
                                            {displayLetter ? displayLetter : ''}
                                        </span>
                                    )
                                })
                            )}
                    </div>
                </div>
                <div>
                    <p>Choose a letter that could be used in the above word.</p>
                    <div className="keyboard">
                        {arrKeyboard.map((item) => {
                            return (
                                <button
                                    className={`keyboardLetter ${clickedState
                                        ? ( handleClickedStateKeyBoard(item)
                                            ? 'clicked-bg-color'
                                            : '')
                                        : (item.clicked ? 'clicked-bg-color' : '')}`
                                    }
                                    key={item.key}
                                    onClick={() => btnClickHandler(item)}
                                    disabled={!clickedState
                                        ? item.clicked
                                        : clickedState.clickedLetters.map((l) => {
                                            if (l.key === item.key) {
                                                return l.clicked;
                                            }
                                        })
                                    }
                                >
                                    {item.letter}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    {(wordLength === scorePoint)                    //to show a result
                        ? (
                            <div className="result">
                                <p>{(`Congrats ! You guessed ${assignWord} in ${attempts} attempts`)}</p>
                            </div>
                        ) : (
                            clickedState
                                ? (
                                    <div className="result">
                                        <p>{(`Congrats ! You guessed ${assignWord} in ${attempts} attempts`)}</p>
                                    </div>
                                ) : ('')
                        )
                    }
                </div>
            </div>
        </div>
    );
}