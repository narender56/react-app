import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { useServers } from './useServers';
import { serverService } from '../services'

jest.mock('../services');

jest.useFakeTimers();

describe('useServers', () => {
  jest.spyOn(serverService, 'getServers').mockResolvedValue([])

  afterAll(() => {
    jest.resetAllMocks();
    jest.resetModules();
    jest.runAllTimers();
  })

  it('should call useServers', () => {
    const { result } = renderHook(() => useServers('token'));
    expect(result.current.serverList).toEqual([]);
  });
})

