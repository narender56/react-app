import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

import * as useServerHook from '../../hooks/useServers';

const mockServers = { serverList: [{ name: 'USA', distance: 200 }, { name: 'Germany', distance: 300 }]}

jest.mock('../../hooks/useServers', () => {
  return {
    useServers: jest.fn()
  }
});

describe('Home', () => {
  const testId = 'home-page';

  beforeEach(() => {
    jest.spyOn(useServerHook, 'useServers').mockReturnValue(mockServers);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  })

  it('should render Home', () => {
    const homePage = screen.getByTestId(testId);
    expect(homePage).toBeInTheDocument();
  });

  it('should render servers list', () => {
    const serversTable = screen.getByTestId(`${testId}-servers-table`);
    expect(serversTable).toBeInTheDocument();
  });
})

