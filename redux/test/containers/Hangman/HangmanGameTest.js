import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/containers/Hangman/HangmanGame';
import HangmanProgress from '../../../src/components/Hangman/HangmanProgress';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import Hangman from '../../../src/games/Hangman';


describe('Hangman/Game', () => {
    let hangman;
    let result;
    beforeEach(() => {
        hangman = new Hangman('cod');
        const onGuess = sinon.stub();
        result = shallow(< Game guessedLetters={[]}
                                   gameId={1} status={hangman.getStatus()}
                                    userGuessSubmited={onGuess} wrongGuessCount={0}/>);
    });

    it('initially has input', () => {
        expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
    });

    it('initially has single image', () => {
        expect(result).to.have.exactly(1).descendants(HangmanProgress);
    });

    // it('creates moves when guess submitted', () => {
    //     result.find(InputChangesOnSubmit).props().onSubmit('p');
    //     result.find(InputChangesOnSubmit).props().onSubmit('c');
    //     result.update();
    //     expect(result).to.contain(
    //         <HangmanProgress
    //             wrongGuessCount={1}
    //             letters={[
    //                 'c',
    //                 undefined,
    //                 undefined
    //             ]}
    //         />
    //     );
    // });
    //
    //
    // it('does not have input after guessing correctly', () => {
    //     const onSubmit = result.find(InputChangesOnSubmit).props().onSubmit;
    //     onSubmit('c');
    //     onSubmit('o');
    //     onSubmit('d');
    //     result.update();
    //     expect(result).not.to.have.descendants(InputChangesOnSubmit);
    // });
});

// describe('Hangman Game', () => {
//     beforeEach(() => {
//         const initialState = {
//             gameId: 1,
//             numWrongGuess: 0,
//             guessedLetters: [undefined, undefined],
//             status: 'waiting_for_move'
//         };
//         store = createMockStore(initialState);
//         component = shallow(<Game store={store}/>);
//     });
//
//     it('should render successfully ', () => {
//         expect(component).to.be.a('object');
//     });
//
//     it('initially has input', () => {
//     const result = shallow(<Game store={store}/>);
//     expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
//      });
// });
