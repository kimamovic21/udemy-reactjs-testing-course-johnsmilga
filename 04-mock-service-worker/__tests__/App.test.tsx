import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { getFormElements } from './Form.test';
import { posts } from '../src/mocks/handlers';
import userEvent from '@testing-library/user-event';
import server from '../src/mocks/server';
import App from '../src/App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText(/posts manager/i)).toBeInTheDocument();
  });
  test('fetches posts on mount', async () => {
    render(<App />);
    expect(await screen.findByText(/first post/i)).toBeInTheDocument();
    expect(await screen.findByText(/second post/i)).toBeInTheDocument();
    // expect(await screen.findByText(/third post/i)).toBeInTheDocument();
  });
  test('creates a new post', async () => {
    const user = userEvent.setup();

    render(<App />);

    const { input, submitBtn } = getFormElements();

    await user.type(input, 'New Post');
    await user.click(submitBtn);

    expect(await screen.findByText(/new post/i)).toBeInTheDocument();
  });
  test('updates a post', async () => {
    const user = userEvent.setup();

    render(<App />);

    const likeBtn = await screen.findByRole('button', { name: `👍 ${posts[0].likes}` });
    await user.click(likeBtn);

    expect(await screen.findByRole('button', { name: `👍 ${posts[0].likes}` })).toBeInTheDocument();
  });
  test('deletes a post', async () => {
    const user = userEvent.setup();

    render(<App />);

    const initialPosts = await screen.findAllByRole('article');
    expect(initialPosts).toHaveLength(3);
    const lastPost = initialPosts[2];

    const deleteBtn = within(lastPost).getByRole('button', { name: /delete/i });
    await user.click(deleteBtn);

    const postsAfterDelete = await screen.findAllByRole('article');
    expect(postsAfterDelete).toHaveLength(2);
  });
});