import type { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  // TODO: Implementar csrf_token e enviar no &state=${csrf_token}
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user:email`);
};
