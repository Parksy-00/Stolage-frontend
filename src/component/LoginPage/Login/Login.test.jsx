import React from 'react'
import MatchMediaMock from 'jest-matchmedia-mock';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Login from './Login'

let matchMedia;
beforeAll(() => {
    matchMedia = new MatchMediaMock();
});
 
afterEach(() => {
    matchMedia.clear();
});

const setup = () => {
    const {getByText, getByPlaceholderText, getByRole, getAllByRole, container} = render(<Login />);
    const title = getByText('stolage');
    const email = getByPlaceholderText('이메일');
    const password = getByPlaceholderText('비밀번호');
    const remember = getByRole('checkbox');
    const rememberText = getByText('계정 기억하기');
    const findPassword = getByText('비밀번호 찾기');
    const [loginButton, registerButton, loginWithGoogle, loginWithNaver] = getAllByRole('button');

    return {
        title, 
        email, 
        password, 
        remember, 
        rememberText, 
        findPassword, 
        loginButton, 
        registerButton, 
        loginWithGoogle, 
        loginWithNaver, 
        container
    };
}

describe('Login', () => {
    it('render LoginForm', () => {
        const {
            title,
            email, 
            password, 
            remember, 
            rememberText, 
            findPassword, 
            loginButton, 
            registerButton, 
            loginWithGoogle, 
            loginWithNaver, 
            container
        } = setup();

        expect(title).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(remember).toBeInTheDocument();
        expect(findPassword).toBeInTheDocument();
        expect(rememberText).toBeInTheDocument();

        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveTextContent('로그인');
        expect(registerButton).toBeInTheDocument();
        expect(registerButton).toHaveTextContent('회원가입');
        expect(loginWithGoogle).toBeInTheDocument();

        expect(container).toHaveTextContent('간편 로그인');
        expect(loginWithGoogle).toHaveTextContent('구글로 로그인하기');
        expect(loginWithNaver).toBeInTheDocument();
        expect(loginWithNaver).toHaveTextContent('네이버로 로그인하기');
        
    })

    it('test events', () => {
        const { 
            email, 
            password, 
            remember, 
            rememberText 
        } = setup();

        userEvent.type(email, 'test@naver.com');
        expect(email.value).toBe('test@naver.com');

        userEvent.type(password, 'abcd1234');
        expect(password.value).toBe('abcd1234');

        expect(remember).not.toBeChecked();
        userEvent.click(remember);
        expect(remember).toBeChecked();
        userEvent.click(rememberText);
        expect(remember).not.toBeChecked();

        // 이하는 리다이렉트 관련 이벤트이므로 기능 구현 후 테스트할 예정
    })

})
