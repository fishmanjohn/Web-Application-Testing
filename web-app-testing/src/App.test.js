import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';

//

test('renders scoreboard title', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/Baseball At Bat!!!/i);
  expect(h1Element).toBeInTheDocument();
});


test('displays balls in display', ()=>{
  const {getByText} = render(<Display/>);
  const hasBalls = getByText(/Balls/i);
  expect(hasBalls).toBeInTheDocument();
});

test('displays strikes in display', ()=>{
  const {getByText} = render(<Display/>);
  const hasStrikes = getByText(/Strikes/i);
  expect(hasStrikes).toBeInTheDocument();
});