export const UPDATE_WALLPAPER_URL = 'UPDATE_WALLPAPER_URL';
export const UPDATE_WALLPAPER_TEXT = 'UPDATE_WALLPAPER_TEXT';

export function updateWallpaperUrl(wallpaperUrl) {
  return {
    type: UPDATE_WALLPAPER_URL,
    payload: wallpaperUrl,
  };
}

export function updateWallpaperText(text) {
  return {
    type: UPDATE_WALLPAPER_TEXT,
    payload: text,
  };
}
