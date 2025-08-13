import { render , screen } from '@testing-library/react';
import Application  from './Application';

describe('Aplication', () => {
    test('render correctly' , () => {
        render(<Application/>);
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()

        const joblocationElement = screen.getByRole('combobox')
        expect(joblocationElement).toBeInTheDocument()

        const termsElemnt = screen.getByRole('checkbox')
        expect(termsElemnt).toBeInTheDocument()

        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})