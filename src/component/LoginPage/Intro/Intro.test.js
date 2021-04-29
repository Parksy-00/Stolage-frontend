import React from 'react'
import { render } from '@testing-library/react'

import Intro from './Intro'
import { MemoryRouter } from 'react-router-dom'

describe('Intro', () => {
    it('render Description text', () => {
        const { container } = render(<Intro />, {wrapper: MemoryRouter})

        expect(container).toHaveTextContent('stolage');
        expect(container).toHaveTextContent('Storage에 label을 입히다');
        expect(container).toHaveTextContent('stolage는 파일을 단순한 디렉토리로 저장하지않습니다.');
        expect(container).toHaveTextContent('파일을 label로 묘사하세요.');
    })

    it('render Button', () => {
        const { getByTestId } = render(<Intro />, {wrapper: MemoryRouter})
        const button = getByTestId('btn');
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('체험하기');
    })
})
