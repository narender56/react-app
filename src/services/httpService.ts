import { BASE_API_URL } from '../config'

type RecordType  = Record<string, any>

const getHeaders = (options?: RecordType) => {
  const headers: RecordType = {
    'Content-Type': 'application/json',
  };

  if (options?.token) {
    headers['Authorization'] = options.token;
  };

  return headers;
};

const handleErrorCodes = async (response:  Response) => {
  const json = await response.json()

  if (response?.status >= 400 && response?.status < 600) {
    throw json;
  }

  return json;
}

export const POST = async (url: string, payload: RecordType) => {
  const api_url = BASE_API_URL + url;
  try {
    const response = await fetch(api_url, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload)
    });

    return await handleErrorCodes(response);
  } catch(err) {
    throw err;
  }
};

export const GET = async (url: string, options?: RecordType) => {
  const api_url = BASE_API_URL + url;
  try {
    const response = await fetch(api_url, {
      method: 'GET',
      headers: getHeaders(options)
    });

    return await handleErrorCodes(response);
  } catch(err) {
    throw err;
  }
};
