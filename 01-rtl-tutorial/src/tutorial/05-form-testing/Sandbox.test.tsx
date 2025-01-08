import { render, screen, logRoles } from '@testing-library/react';
import Sandbox from './Sandbox';

describe('05-form-testing', () => {
  test('inputs should be initially empty', () => {
    const { container } = render(<Sandbox />);
    screen.debug();
    logRoles(container);

    const emailInputElement = screen.getByRole('textbox', { name: /email/i });
    expect(emailInputElement).toHaveValue('');

    const passwordInputElement = screen.getByLabelText('Password');
    expect(passwordInputElement).toHaveValue('');

    const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
    expect(confirmPasswordInputElement).toHaveValue('');
  });
});