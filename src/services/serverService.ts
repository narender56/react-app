import { endpoints } from '../config';
import type { ServerResponse } from '../types/ServerTypes';
import * as httpService from './httpService';


export const getServers = async (token: string): Promise<ServerResponse[]> => {
  let serversList: ServerResponse[] = [];
  try {
    serversList = await httpService.GET(endpoints.servers.url, { token });
  } catch(err: any) {
    console.log(err.message);
  }

  return serversList;
}
