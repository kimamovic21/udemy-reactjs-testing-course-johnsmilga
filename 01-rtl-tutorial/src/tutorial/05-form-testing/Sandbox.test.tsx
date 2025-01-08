import { render, screen, logRoles } from '@testing-library/react';
import { beforeEach } from 'vitest';
import userEvent, { UserEvent } from '@testing-library/user-event';
import Sandbox from './Sandbox';

const getFormElements = () => {
  const elements = {
    emailInputElement: screen.getByRole('textbox', { name: /email/i }),
    passwordInputElement: screen.getByLabelText('Password'),
    confirmPasswordInputElement: screen.getByLabelText(/confirm password/i),
    submitButton: screen.getByRole('button', { name: /submit/i }),
  };
  
  return elements;
};

describe('05-form-testing', () => {
  let user: UserEvent;

  beforeEach(() => {
    // console.log('Hello world')
    user = userEvent.setup();
    render(<Sandbox />);
  });

  test('inputs should be initially empty', () => {
    const {
      emailInputElement,
      passwordInputElement,
      confirmPasswordInputElement,
    } = getFormElements();

    expect(emailInputElement).toHaveValue('');
    expect(passwordInputElement).toHaveValue('');
    expect(confirmPasswordInputElement).toHaveValue('');
  });

  test('should be able to type in the input', async () => {
    const {
      emailInputElement,
      passwordInputElement,
      confirmPasswordInputElement,
    } = getFormElements();

    await user.type(emailInputElement, 'test@test.com');
    expect(emailInputElement).toHaveValue('test@test.com');

    await user.type(passwordInputElement, 'secret');
    expect(passwordInputElement).toHaveValue('secret');

    await user.type(confirmPasswordInputElement, 'secret');
    expect(confirmPasswordInputElement).toHaveValue('secret');
  });
});