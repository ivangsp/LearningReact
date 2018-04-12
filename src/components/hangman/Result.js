import React from 'react';
import PropTypes from 'prop-types';
import hangman1 from './../../images/Hangman-1.png';
import hangman2 from './../../images/Hangman-2.png';
import hangman3 from './../../images/Hangman-3.png';
import hangman4 from './../../images/Hangman-4.png';
import hangman5 from './../../images/Hangman-5.png';
import hangman6 from './../../images/Hangman-6.png';
import hangman0 from './../../images/Hangman-0.png';


const Result = ({game, predChar}) => {
    const predChara = predChar.map((res, index) => {
    return (<b key = {index}> {res} </b>);
    });

    let hangmanImage;
    switch (game.numIncorrectGuess) {
        case 1:
            hangmanImage = <img src = {hangman1} width='150' />;
            break;
        case 2:
            hangmanImage = <img src = {hangman2} width='150' />;
            break;

        case 3:
            hangmanImage = <img src = {hangman3} width='150' />;
            break;
        case 4:
            hangmanImage = <img src = {hangman4} width='150' />;
            break;
        case 5:
            hangmanImage = <img src = {hangman5} width='150' />;
            break;
        case 6:
            hangmanImage = <img src = {hangman6} width='150' />;
            break;
        default:
            hangmanImage = <img src = {hangman0} width='150'/>;
    }

    return (
        <div>
            <p>{predChara}</p>
            <div>{hangmanImage}</div>
        </div>
    );
};

Result.propTypes = {
    game: PropTypes.shape({
        opposition: PropTypes.string,
        predChar: PropTypes.array,
        status: PropTypes.string,
        correctGuess: PropTypes.bool,
        numIncorrectGuess: PropTypes.number

    }),
    predChar: PropTypes.array
 };


export default Result;


