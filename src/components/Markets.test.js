import { render, screen } from '@testing-library/react';
import { MarketsContainer } from 'src/components/MarketsContainer'

test('renders loading indicator', () => {
    render(<MarketsContainer />);
    const linkElement = screen.getByText(/Loading, Please wait ../i);
    expect(linkElement).toBeInTheDocument();
});
