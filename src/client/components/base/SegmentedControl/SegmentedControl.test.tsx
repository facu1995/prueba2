import '@testing-library/jest-dom';
import SegmentedControl from './SegmentedControl';
import { RenderResult, render } from '@testing-library/react';

describe('< SegmentedControl />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<SegmentedControl/>)
        expect(component.container).toBeInTheDocument()
    })
})
