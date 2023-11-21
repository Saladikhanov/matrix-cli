import loginReducer, { loginUser, logoutUser } from './loginSlice';

describe('loginReducer', () => {
    it('should handle initial state', () => {
        expect(loginReducer(undefined, {})).toEqual({
            loggedIn: false,
            username: '',
        });
    });

    it('should handle loginUser', () => {
        const username = 'testuser';
        const action = loginUser(username);
        const state = loginReducer(undefined, action);
        expect(state.loggedIn).toBe(true);
        expect(state.username).toBe(username);
    });

    it('should handle logoutUser', () => {
        const action = logoutUser();
        const state = loginReducer(undefined, action);
        expect(state.loggedIn).toBe(false);
        expect(state.username).toBe('');
    });
});
