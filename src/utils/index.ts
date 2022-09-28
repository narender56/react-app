export const sort = (data: any[], key: string, order = 'ASC') => {
  return data.sort((a, b) => {
    if (typeof a[key] === 'string') {
      return order === 'ASC' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    };
  
    return order === 'ASC' ? a[key] - b[key] : b[key] - a[key];
  });
};
