import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const fetchWallPaper = text =>
  request.post('/api/wallpapers')
    .send({ text })
    .then(handleSuccess)
    .catch(handleError);
