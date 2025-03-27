import '@testing-library/jest-dom';
import DataGrid from './DataGrid';
import { RenderResult, render } from '@testing-library/react';

describe('< DataGrid />', () => {
     let component : RenderResult;

    test('should render', () => {
        component = render(<DataGrid/>)
        expect(component.container).toBeInTheDocument()
    })
})
