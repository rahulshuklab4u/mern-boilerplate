import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import { updateWallpaperText } from '_store/actions/wallpapers';
import {  attemptFetchWallPaper } from '_store/thunks/wallpapers';

export default function WallPaperPage() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.wallpapers && state.wallpapers.wallPaperText);
  const wallpaperUrl = useSelector((state) => state.wallpapers && state.wallpapers.wallpaperUrl);
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  const handleTextChange = (event) => {
    dispatch(updateWallpaperText(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action to fetch the wallpaper from the DALL-E API
    dispatch(attemptFetchWallPaper(text));
    // setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <input type="submit" value="Generate Wallpaper" />
      </form>
      {wallpaperUrl && (
        <div>
          <h2>Generated Wallpapers:</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '16px' }}>
            {wallpaperUrl.map((url) => (
              // eslint-disable-next-line react/jsx-key
              <img src={url} alt="Generated Wallpaper" style={{ width: '100%' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
