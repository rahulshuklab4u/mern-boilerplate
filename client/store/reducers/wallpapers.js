import { UPDATE_WALLPAPER_URL, UPDATE_WALLPAPER_TEXT } from '_store/actions/wallpapers';

const initialState = {
  wallPaperText: '',
  wallpaperUrl: [],
};

export default function wallpaperReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WALLPAPER_URL:
      return {
        ...state,
        wallpaperUrl: action.payload,
      };
    case UPDATE_WALLPAPER_TEXT:
      return {
        ...state,
        wallPaperText: action.payload,
      };
    default:
      return state;
  }
}
