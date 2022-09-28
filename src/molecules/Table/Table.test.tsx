import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import { ServersHeaders } from '../../pages/Home/Home.helpers'

const mockList = [{ name: 'USA', distance: 200 }, { name: 'Germany', distance: 300 }]

describe('Table', () => {
  const testId = 'table';

  beforeEach(() => {

    render(<Table testId={testId} headers={ServersHeaders} data={mockList}/>);
  })

  it('should render Table', () => {
    const table = screen.getByTestId(testId);
    expect(table).toBeInTheDocument();
  });

  it('should have USA server', () => {
    const usaServer = screen.getByTestId(`${testId}-USA`);
    expect(usaServer).toBeInTheDocument();
  });
})

