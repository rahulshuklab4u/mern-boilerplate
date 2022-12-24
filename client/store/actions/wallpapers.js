export const UPDATE_WALLPAPER_URL = 'UPDATE_WALLPAPER_URL';

export function updateWallpaperUrl(wallpaperUrl) {
  return {
    type: UPDATE_WALLPAPER_URL,
    payload: wallpaperUrl,
  };
}
