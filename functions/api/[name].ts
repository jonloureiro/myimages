import type { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  const { method, query, url } = request;
  response.json({
    method,
    query,
    url,
  });
};
