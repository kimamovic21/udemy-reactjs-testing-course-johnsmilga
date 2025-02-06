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
});