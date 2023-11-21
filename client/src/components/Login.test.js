import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from './Login';
import { loginUser } from '../redux/slices/loginSlice';

const mockStore = configureStore([]);

describe('Login component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({login: { loggedIn: false, username: '' } });
    });

    test('dispatches the loginUser action when clicking the login button', () => {
        // Render the Login component within the Provider with the mock store
        const component = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        // Find the login button
        const loginButton = component.getByTestId("login-button");

        // Simulate clicking the login button
        fireEvent.click(loginButton);

        // Verify that the loginUser action was dispatched with the correct payload
        const actions = store.getActions();
        expect(actions).toContainEqual(loginUser(''));
    });
});
