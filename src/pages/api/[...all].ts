import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const serverUrl = process.env.API_HOST;

export default (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: serverUrl,
    changeOrigin: true,
  });
};