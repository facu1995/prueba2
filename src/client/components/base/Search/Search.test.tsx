import '@testing-library/jest-dom';
import Search from './Search';
import { RenderResult, render } from '@testing-library/react';

describe('< Search />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Search/>)
        expect(component.container).toBeInTheDocument()
    })
})
