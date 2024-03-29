import React from 'react';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Intro from './Intro';

describe('Intro', () => {
  it.each([
    'stolage',
    'Storage에 label을 입히다',
    'stolage는 파일을 단순한 디렉토리로 저장하지않습니다.',
    '파일을 label로 묘사하세요.',
  ])('render "%s"', (description) => {
    const { container } = render(<Intro />, { wrapper: MemoryRouter });
    expect(container).toHaveTextContent(description);
  });

  it('render Button', () => {
    render(<Intro />, { wrapper: MemoryRouter });
    expect(screen.getByRole('button', { name: '체험하기' })).toBeInTheDocument();

    // 나중에 데모페이지 만들어지만 클릭했을 때에 대한 테스트도 작성하면 좋을 듯
  });
});
