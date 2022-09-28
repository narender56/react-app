export const BASE_API_URL = process.env.REACT_APP_API_URI || 'https://playground.tesonet.lt';

export const endpoints = {
  login: {
    url: '/v1/tokens'
  },
  servers: {
    url: '/v1/servers'
  }
}
