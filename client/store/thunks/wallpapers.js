import { updateWallpaperUrl } from '_store/actions/wallpapers';
import { fetchWallPaper } from '_api/wallpapers';

import { dispatchError } from '_utils/api';

export function attemptFetchWallPaper(text, bgColor, font) {
  return async (dispatch) => {
    const data = await fetchWallPaper(text, bgColor, font).catch(dispatchError(dispatch));
    console.log('data', data);
    const wallPaperUrlData = data.map(obj => obj.url);
    console.log('dispatching wallpaperUrl', wallPaperUrlData);
    dispatch(updateWallpaperUrl(wallPaperUrlData));
    return wallPaperUrlData;
  };
}
