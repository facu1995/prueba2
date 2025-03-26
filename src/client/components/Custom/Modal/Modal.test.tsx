import '@testing-library/jest-dom';
import Modal from './Modal';
import { RenderResult, render } from '@testing-library/react';

describe('< Modal />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Modal/>)
        expect(component.container).toBeInTheDocument()
    })
})
