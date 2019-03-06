import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Open/close button executes open/close function', () => {
        const { getByText } = render(<Dashboard />)
        fireEvent.click(getByText(/close/i));
        getByText(/closed/i);
        getByText(/open gate/i);
        fireEvent.click(getByText(/open/i));
        getByText(/open$/i);
        getByText(/close gate/i);
    });

    it('Lock/unlock button executes lock/unlock function', () => {
        const { getByText } = render(<Dashboard />)
        fireEvent.click(getByText(/lock/i));
        getByText(/open$/i);
        getByText(/close gate/i);
        fireEvent.click(getByText(/close/i));
        fireEvent.click(getByText(/lock/i));
        getByText(/closed$/i);
        getByText(/open gate/i);
    });
});