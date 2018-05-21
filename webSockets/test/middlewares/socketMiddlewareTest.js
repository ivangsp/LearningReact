// import middleware from '../../src/middlewares/SocketMiddleware';
// import configureStore from 'redux-mock-store';
// import * as type from '../../src/actions/types';


// describe('GameServerMiddleware', () => {
//     let store;

//     beforeEach(() => {
//         const middlewares = [middleware()];
//         const createMockStore = configureStore(middlewares);
//         const initialState = {
//             user_id: '',
//             players: [],
//             connecting: false,
//             connected: false,
//         };
//         store = createMockStore(initialState);
//     });

//     it('should dispatch ADD_USER when connected', () => {
//         store.dispatch({type: type.CONNECT, payload: 'james'});

//         expect(store.getActions()).to.deep.contain({
//             type: type.ADD_USER_ID,
//             payload: {id: 'kkl', name: 'james'}
//         });
//     });
// });
