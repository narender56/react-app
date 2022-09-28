import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { useServers } from '../../hooks/useServers';
import { Table } from '../../molecules';
import { ServersHeaders } from './Home.helpers';

export const Home = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);
  const { serverList } = useServers(token);

  useEffect(() => {
    if (!token) {
      return navigate('/login');
    }
  }, [navigate, token]);

  return (
    <div className="flex flex-col" data-testid="home-page">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 md:px-6 lg:px-8">
          <div className="overflow-hidden max-h-full">
            <Table testId="home-page-servers-table"  headers={ServersHeaders} data={serverList}/>
          </div>
        </div>
      </div>
    </div>
  );
};
