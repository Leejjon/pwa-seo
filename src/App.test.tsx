import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders welcome message', () => {
  const {getByText} = render(<App/>);
  expect(getByText('Learn React')).toBeInTheDocument();
});
