import got from 'got';

import type { NowRequest, NowResponse } from '@vercel/node';

export default async (request: NowRequest, response: NowResponse) => {
  const { code } = request.query;
  console.log((await getAcessToken(code)).body);
  response.send('ok');

  // const req = https.request(options, (res) => {
  //   let data = '';

  //   res.on('data', chunk => {
  //     data += chunk;
  //   });

  //   res.on('end', function () {
  //     response.send(data);
  //   });
  // });

  // req.on('error', (error) => {
  //   response.status(500).json({ message: error.message });
  // });
  // req.write(body);
  // req.end();
};

async function getAcessToken (code: string | string[]) {
  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code
  };

  const res = await got.post('https://github.com/login/oauth/access_token', {
    json: body,
    responseType: 'json'
  });
  return res;
}
