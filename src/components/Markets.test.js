import { render, screen } from '@testing-library/react';
import { Markets } from './Markets'

test('renders loading indicator', () => {
    render(<Markets />);
    const linkElement = screen.getByText(/Loading, Please wait ../i);
    expect(linkElement).toBeInTheDocument();
});
