import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Login from './Login'

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
})

const setup = () => {
    const utils = render(<Login />);
    const title = utils.getByText('stolage');
    const email = utils.getByPlaceholderText('이메일');
    const password = utils.getByPlaceholderText('비밀번호');
    const remember = utils.getByRole('checkbox');
    const rememberText = utils.getByText('계정 기억하기');
    const findPassword = utils.getByText('비밀번호 찾기');
    const [loginButton, registerButton, loginWithGoogle, loginWithNaver] = utils.getAllByRole('button');

    return {title, email, password, remember, rememberText, findPassword, loginButton, registerButton, loginWithGoogle, loginWithNaver, ...utils};
}

describe('Login', () => {
    it('render LoginForm', () => {
        const {title, email, password, remember, rememberText, findPassword, loginButton, registerButton, loginWithGoogle, loginWithNaver, container} = setup();

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
        const { email, password, remember, rememberText, findPassword, loginButton, registerButton, loginWithGoogle, loginWithNaver } = setup();

        fireEvent.change(email, {target: {value: 'test@naver.com'}});
        expect(email.value).toBe('test@naver.com');

        fireEvent.change(password, {target: {value: 'abcd1234'}});
        expect(password.value).toBe('abcd1234');

        expect(remember.checked).toBeFalsy();
        fireEvent.click(remember);
        expect(remember.checked).toBeTruthy();
        fireEvent.click(rememberText);
        expect(remember.checked).toBeFalsy();

        // 이하는 리다이렉트 관련 이벤트이므로 기능 구현 후 테스트할 예정
    })

})