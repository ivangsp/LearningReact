export const GAME_CREATED = 'GAME_CREATED';
export const HANGMAN_GAME_CREATED = 'HANGMAN_GAME_CREATED';
export const RPS_GAME_CREATED = 'RPS_GAME_CREATED';
export const HANGMAN_GAME_MOVED = 'HANGMAN_GAME_MOVED';
export const RPS_GAME_MOVED = 'RPS_GAME_MOVED';
export const GAME_MOVE_COMPLETED = 'GAME_MOVE_COMPLETED';

export const newGameStarted = () => {
    return {
        type: GAME_CREATED
    };
};

export const gameCreated = (game) => {
    if (game.type === 'hangman') {
        return {
            type: HANGMAN_GAME_CREATED,
            payload: game
        };
    } else {
        return {
            type: RPS_GAME_CREATED,
            payload: game
        };
    }
};


export const GAME_CREATION_FAILED = 'GAME_CREATION_FAILED';
export const gameCreationFailed = (error) => {
    return {
        type: GAME_CREATION_FAILED,
        payload: error
    };
};

export const gameMoveCompleted = (game) => {
    if (game.type === 'hangman') {
        return {
            type: HANGMAN_GAME_MOVED,
            payload: {
                id: game.id,
                wrongGuessCount: game.wrongGuessCount,
                letters: game.letters,
                status: game.status,
                won: game.won,
                type: game.type
            }
        };
    } else {
        return {
            type: RPS_GAME_MOVED,
            payload: game
        };
    }
};

export const BUTTON_CHANGED = 'BUTTON_CHANGED';
export const buttonChanged = (type) => {
    return {
        type: BUTTON_CHANGED,
        payload: type
    };
};

