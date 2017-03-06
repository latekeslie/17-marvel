
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
  return { type: 'MODAL@CLEAR' }
}
