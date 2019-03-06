import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('Controls', () => {
    it('Lock button executes lock function', () => {
        const mock = jest.fn();
        const { getByText } = render(<Controls toggleLocked={mock}/>)
        fireEvent.click(getByText(/lock/i))
        expect(mock).toHaveBeenCalled;
    });
    
    it('Open/close button executes open/close function', () => {
        const mock = jest.fn();
        const { getByText } = render(<Controls toggleClosed={mock}/>)
        fireEvent.click(getByText(/open|close/i))
        expect(mock).toHaveBeenCalled;
    });

});