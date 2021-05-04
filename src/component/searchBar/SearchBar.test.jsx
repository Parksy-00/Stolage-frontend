import React from 'react';
import { getByText, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchBar from './SearchBar'

describe('Test SearchBar', ()=> {
    it('option', () => {
        const { getByRole, getAllByText } = render(<SearchBar/>)
        const searchBar = getByRole('combobox')
        userEvent.click(searchBar)
        waitFor(() => expect(getByRole('option', {name: 'b11'})).toBeInTheDocument())

        userEvent.click(getAllByText('b11')[1])
        expect(searchBar).toHaveValue('b11')
    })
})