import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading indicator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading, Please wait ../i);
  expect(linkElement).toBeInTheDocument();
});
