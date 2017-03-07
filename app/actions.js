
export function loadSeries(series) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', series: series }
}

export function loadCharacters(characters) {
   return { type: 'CHARACTERS@FIND_ALL_COMPLETE', characters: characters }
}

export function loadComics(comics) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', comics: comics }
}

export function setModal(description) {
  return { type: 'MODAL@SET', description: description }
}

export function clearModal() {
  return { type: 'MODAL@CLEAR' };
}

export function seriesInfoSearch(id) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE').then(r => r.json()).then((data) => {
      const series = data.data.results;
      dispatch(loadSeries(series));
    });
  };
}

export function charactersSearch(id) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/characters').then(r => r.json()).then((data) => {
      const characters = data.data.results;
      dispatch(loadCharacters(characters));
    });
  };
}

export function comicsSearch(id) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/comics').then(r => r.json()).then((data) => {
      const comics = data.data.results;
      dispatch(loadComics(comics));
    });
  };
}
