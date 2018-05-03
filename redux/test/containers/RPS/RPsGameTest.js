import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/containers/RPS/RpsGame';
import MoveHistoryy from '../../../src/components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';


describe('RPS/Game', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      status: '', userGuessSubmited: sinon.stub(), moves: [], gameId: 0
    };
  });

    it('initially has input', () => {
        const result = shallow(<Game {...initialState} />);
        expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
    });

    it('initially has no MoveHistory', () => {
        const result = shallow(<Game {...initialState} />);
        expect(result).to.have.exactly(1).descendants(MoveHistoryy);
    });

  // it('creates moves when guess submitted', () => {
  //   const result = shallow(<Game {...initialState} />);
  //   result.find(InputChangesOnSubmit).props().onSubmit('P');
  //   result.update();
  //   expect(result).to.contain(
  //     <MoveHistory moves={[{result: LOSS, guess: PAPER, opposition: SCISSORS}]} />
  //   );
  // });
  //
  //
  // it('does not have input after winning', () => {
  //   const result = shallow(<Game {...initialState}/>);
  //   result.find(InputChangesOnSubmit).props().onSubmit('R');
  //   result.update();
  //   expect(result).not.to.have.descendants(InputChangesOnSubmit);
  // });
});
