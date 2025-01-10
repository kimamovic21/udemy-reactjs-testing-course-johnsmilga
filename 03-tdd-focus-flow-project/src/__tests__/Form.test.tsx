import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import Form from '../components/Form';

const getElements = () => ({
  titleInput: screen.getByRole('textbox', { name: /title/i }),
  descriptionInput: screen.getByRole('textbox', { name: /description/i }),
  categorySelect: screen.getByRole('combobox', { name: /category/i }),
  submitButton: screen.getByRole('button', { name: /add task/i }),
});

describe('Form Component', () => {
  let user: UserEvent;

  const mockOnSubmit = vi.fn();
  
  beforeEach(() => {
    mockOnSubmit.mockClear();
    user = userEvent.setup();
    render(<Form onSubmit={mockOnSubmit} />)
  });

  test('renders form with empty fields initially', () => {
    const { titleInput, descriptionInput, categorySelect } = getElements();

    expect(titleInput).toHaveValue('');
    expect(descriptionInput).toHaveValue('');
    expect(categorySelect).toHaveValue('');
  });
});