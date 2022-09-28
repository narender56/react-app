import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { httpService } from '../../services';
import { Login } from './Login';

jest.mock('../../services');

describe('Login', () => {
  const testId = 'login-page';

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  })

  it('should render Login', () => {
    const loginPage = screen.getByTestId(testId);
    expect(loginPage).toBeInTheDocument();
  });

  it('should render fill and submit the form', done => {
    const username = screen.getByTestId(`${testId}-username-input`);
    expect(username).toBeInTheDocument();
    userEvent.type(username, 'tesonet');

    const password = screen.getByTestId(`${testId}-password-input`);
    expect(password).toBeInTheDocument();
    userEvent.type(password, 'partyanimal');

    const submitBtn = screen.getByTestId(`${testId}-submit`);
    expect(submitBtn).toBeInTheDocument();
    userEvent.click(submitBtn);
    setTimeout(() => {
      expect(httpService.POST).toHaveBeenCalled();
      done()
    })
  });
})

