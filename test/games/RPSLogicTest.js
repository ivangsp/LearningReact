/* global assert */

import Game from '../../src/games/RPSLogic';
import sinon from 'sinon';

describe('App', function() {
    let game;

    beforeEach(() => {
        game = new Game();
        sinon.stub(Game.prototype, 'generateRandomGuess').callsFake(() => 'P');
    });
    afterEach(() =>{
        Game.prototype.generateRandomGuess.restore();
    });

    it('should return error if user enters any other char other than P, S, R', function() {
        assert.throws(function() {
             game.guess('O');
            }, Error, 'invalid argument passed');
        });

    it('should return tie when when users enters P and the app predicts P', function() {
        const res = game.guess('P');
        sinon.assert.calledOnce(Game.prototype.generateRandomGuess);
        assert.equal(res.gameState, 'tie');
    });


    it('should return win  when users guesses S and the app predicts P', function() {
        const res = game.guess('S');
        sinon.assert.calledOnce(Game.prototype.generateRandomGuess);
        assert.equal(res.gameState, 'win');
    });

    it('should return lose  when users guesses R and the app predicts P', function() {
        const res = game.guess('R');
        sinon.assert.calledOnce(Game.prototype.generateRandomGuess);
        assert.equal(res.gameState, 'lost');
    });
});
