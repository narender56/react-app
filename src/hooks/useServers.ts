import { useEffect, useState } from 'react';

import { serverService } from '../services';
import { ServerResponse } from '../types/ServerTypes';

export const useServers = (token: string) => {
  const [serverList, setServersList] = useState<ServerResponse[]>([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const fetchServers = () => {
      timeout = setTimeout(async () => {
        const servers = await serverService.getServers(token);
        setServersList(servers);
      })
    }

    fetchServers();

    return () => {
      clearTimeout(timeout);
    }
  }, [token]);

  return { serverList };
};
