import { UPDATE_WALLPAPER_URL } from '_store/actions/wallpapers';

const initialState = {
  wallpaperUrl: [],
};

export default function wallpaperReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WALLPAPER_URL:
      return {
        ...state,
        wallpaperUrl: action.payload,
      };
    default:
      return state;
  }
}
