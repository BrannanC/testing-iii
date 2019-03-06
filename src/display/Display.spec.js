import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Dashboard', () => {
    it('Displays open and unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />)
        getByText(/open/i);
        getByText(/unlocked/i);
    });

    it('', () => {
        const { getByText } = render(<Display closed={true} locked={true} />)
        getByText(/closed/i);
        getByText(/^locked/i);
    });
});
