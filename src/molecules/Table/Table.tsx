import React, { memo, useEffect, useState } from 'react';
import { TableProps } from './Table.types';
import { sort } from '../../utils'

export const Table = memo(({ testId, headers, data }: TableProps) => {
  const [tableHeaders, setTableHeaders] = useState([...headers]);
  const [tableData, setTableData] = useState([...data]);

  const handleSort = (key: string, order = 'ASC') => {
    setTableHeaders(tableHeaders.map(header => ({...header, order: header.order === 'ASC' ? 'DESC' : 'ASC' })));
    setTableData(sort(tableData, key, order));
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <table className="divide-y divide-gray-300" data-testid={testId}>
      <thead className="bg-gray-50">
        <tr>
          {
            tableHeaders.map((header, index) => (
              <th
                data-testid={`${testId}-${header.key}`} 
                key={header.label + index}
                className="px-6 py-2 text-xs text-gray-500 sticky top-0 cursor-pointer"
                onClick={() => handleSort(header.key, header.order)}
              >
                {header.label}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData.map((dataRow, index) => (
            <tr className="whitespace-nowrap border-b" key={index}>
              {
                headers.map((row) => (
                  <td data-testid={`${testId}-${dataRow[row.key]}`} key={dataRow[row.key]} className="px-6 py-4 text-sm text-gray-500">{dataRow[row.key]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
})
