
export function loadSeries(series) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data: series }
}

export function loadCharacters(characters) {
  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: characters }
}

export function loadComics(comics) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', data: comics }
}

export function setModal(description) {
  return { type: 'MODAL@SET', data: description }
}

export function clearModal() {
  return { type: 'MODAL@CLEAR' };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(r => r.json())
    .then((data) => {
      const series = data.data.results[0];
      dispatch(loadSeries(series));
      dispatch(charactersSearch(series.id));
      dispatch(comicsSearch(series.id));
    });
  };
}

export function charactersSearch(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`).then(r => r.json()).then((data) => {
      const characters = data.data.results;
      dispatch(loadCharacters(characters));
    });
  };
}

export function comicsSearch(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`).then(r => r.json()).then((data) => {
      const comics = data.data.results;
      dispatch(loadComics(comics));
    });
  };
}
