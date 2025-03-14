import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { ApolloProvider } from '@apollo/client';
import userEvent from '@testing-library/user-event';
import client from '@/apolloClient';
import App from '@/App';

vi.mock('@/components/charts/UsedLanguages', () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock('@/components/charts/PopularRepos', () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock('@/components/charts/ForkedRepos', () => ({
  default: () => <div>Forked Repos</div>,
}));

const renderApp = () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

describe('App Integration', () => {
  test('should update profile when searching for a user', async () => {
    const user = userEvent.setup();
    renderApp();

    expect(await screen.findByText('quincylarson')).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox');

    await user.clear(searchInput);
    await user.type(searchInput, 'john_doe');

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    expect(await screen.findByText('john_doe')).toBeInTheDocument();

    expect(await screen.findByRole('img')).toHaveAttribute('src', 'https://github.com/images/john_doe.jpg');
    expect(await screen.findByRole('link')).toHaveAttribute('href', 'https://github.com/john_doe');
  });

  test('should show error for invalid username', async () => {
    const user = userEvent.setup();
    renderApp();

    const searchInput = screen.getByRole('textbox');
    await user.clear(searchInput);
    await user.type(searchInput, 'invalid-username');

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    expect(await screen.findByText(/could not resolve to a user/i)).toBeInTheDocument();
  });

  test('should show error when request fails', async () => {
    const user = userEvent.setup();
    renderApp();

    const searchInput = screen.getByRole('textbox');
    await user.clear(searchInput);
    await user.type(searchInput, 'request-error');

    const submitButton = screen.getByRole('button', { name: /search/i });
    await user.click(submitButton);

    expect(await screen.findByText('there was an error')).toBeInTheDocument();
  });
});
