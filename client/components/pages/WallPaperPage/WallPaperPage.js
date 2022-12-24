import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import {  attemptFetchWallPaper } from '_store/thunks/wallpapers';

export default function WallPaperPage() {
  const dispatch = useDispatch();
  const wallpaperUrl = useSelector((state) => state.wallpapers && state.wallpapers.wallpaperUrl);
  const { user } = useSelector(R.pick(['user']));
  const [text, setText] = useState('');
  const [size, setSize] = useState('256x256');

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Dispatch an action to fetch the wallpaper from the DALL-E API
    dispatch(attemptFetchWallPaper(text, size));
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <br />
        <label>
          Size:
          <select value={size} onChange={handleSizeChange}>
            <option value="256x256">256x256</option>
            <option value="512x512">512x512</option>
            <option value="1024x1024">1024x1024</option>
          </select>
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
