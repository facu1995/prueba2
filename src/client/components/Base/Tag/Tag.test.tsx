import '@testing-library/jest-dom';
import Tag from './Tag';
import { RenderResult, render } from '@testing-library/react';

describe('< Tag />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<Tag/>)
        expect(component.container).toBeInTheDocument()
    })
})
