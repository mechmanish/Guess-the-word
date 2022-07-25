import React from "react";
import './index.css';

export default function ScoreCard(
    { wordLength, scorePoints, finalScoreCard, clickedState, setClickedState }
) {

    //To handle clicked attempt 
    function handleClickState(data) {
        setClickedState(data);
    }

    return (
        <div>
            <div className="m-4">
                <div className="flex">
                    <span>Score:</span>
                    <span>{clickedState ? clickedState.scorePoint : (scorePoints ? scorePoints : 0)}</span>
                </div>
                <table>
                    <thead className="table-head">
                        <tr >
                            <th>Attempts</th>
                            <th>Remaining Characters</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(wordLength !== scorePoints)
                            ? (finalScoreCard && finalScoreCard.map((score, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{score.attempts}</td>
                                        <td>{score.remainingLetters}</td>
                                    </tr>
                                );
                            }))
                            : (
                                finalScoreCard && finalScoreCard.map((score, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <button onClick={() => handleClickState(score, index)}>
                                                    {score.attempts}
                                                </button>
                                            </td>
                                            <td>{score.remainingLetters}</td>
                                        </tr>
                                    );
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
} 