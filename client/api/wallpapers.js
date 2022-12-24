import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const fetchWallPaper = (text, size) =>
  request.post('/api/wallpapers')
    .send({ text, size })
    .then(handleSuccess)
    .catch(handleError);
