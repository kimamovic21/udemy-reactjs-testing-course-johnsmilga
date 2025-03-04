import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { vi, describe, test, expect } from 'vitest';
import client from '@/apolloClient';
import UserProfile from '@/components/user/UserProfile';

vi.mock('@/components/charts/UsedLanguages', () => ({
  default: () => <div>Used Languages</div>,
}));

vi.mock('@/components/charts/PopularRepos', () => ({
  default: () => <div>Popular Repos</div>,
}));

vi.mock('@/components/charts/ForkedRepos', () => ({
  default: () => <div>Forked Repos</div>,
}));

const renderUserProfile = async (userName: string) => {
  render(
    <ApolloProvider client={client}>
      <UserProfile userName={userName} />
    </ApolloProvider>
  );
};

describe('UserProfile', () => {
  test('renders UserProfile component', async () => {
    const userName = 'john_doe';
    await renderUserProfile(userName);

    expect(await screen.findByText(userName)).toBeInTheDocument();
    expect(await screen.findByText(userName)).toBeInTheDocument();

    expect(await screen.findByRole('img')).toHaveAttribute('src', `https://github.com/images/${userName}.jpg`);

    expect(await screen.findByText(/full-stack developer/i)).toBeInTheDocument();

    expect(await screen.findByRole('link')).toHaveAttribute('href', `https://github.com/${userName}`);
  });

  test('renders error message when request fails', async () => {
    const userName = 'request-error';
    await renderUserProfile(userName);
    expect(await screen.findByText('there was an error')).toBeInTheDocument();
  });

  test('renders error message when user not found', async () => {
    const userName = 'invalid-username';
    await renderUserProfile(userName);
    expect(await screen.findByText(/could not resolve to a user/i)).toBeInTheDocument();
  });
});
