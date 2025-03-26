import '@testing-library/jest-dom';
import Card from './Card';
import { RenderResult, render } from '@testing-library/react';

describe('< Card />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Card/>)
        expect(component.container).toBeInTheDocument()
    })
})
