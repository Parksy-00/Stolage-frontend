import React from 'react'
import { render } from '@testing-library/react'

import Intro from './Intro'
import { MemoryRouter } from 'react-router-dom'

describe('Intro', () => {
    it.each([
        'stolage',
        'Storage에 label을 입히다',
        'stolage는 파일을 단순한 디렉토리로 저장하지않습니다.',
        '파일을 label로 묘사하세요.'
    ])
    ('render Description text', (description) => {
        const { container } = render(<Intro />, {wrapper: MemoryRouter})
        expect(container).toHaveTextContent(description);
    })

    it('render Button', () => {
        const { getByTestId } = render(<Intro />, {wrapper: MemoryRouter})
        const button = getByTestId('btn');
        
        expect(button).toHaveTextContent('체험하기');
        //나중에 데모페이지 만들어지만 클릭했을 때에 대한 테스트도 작성하면 좋을 듯
    })
})
