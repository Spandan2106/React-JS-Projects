import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first question', () => {
  render(<App />);
  const questionElement = screen.getByText(/What is the capital of France?/i);
  expect(questionElement).toBeInTheDocument();
});
