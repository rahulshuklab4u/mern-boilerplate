import { updateWallpaperUrl } from '_store/actions/wallpapers';
import { fetchWallPaper } from '_api/wallpapers';

import { dispatchError } from '_utils/api';

export function attemptFetchWallPaper() {
  return async (dispatch, getState) => {
    const state = getState();
    const data = await fetchWallPaper(state.wallpapers.wallPaperText).catch(dispatchError(dispatch));
    console.log('data', data);
    const wallPaperUrlData = data.map(obj => obj.url);
    console.log('dispatching wallpaperUrl', wallPaperUrlData);
    dispatch(updateWallpaperUrl(wallPaperUrlData));
    return wallPaperUrlData;
  };
}
