import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const heading = screen.getByText(/Enter the text to analyze/i);
  expect(heading).toBeInTheDocument();
});
