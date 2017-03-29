import { combineReducers } from 'redux';
import characters from './character-data';
import series from './series-info';
import comics from './comic-data';
import modal from './modal';

export default combineReducers({
  characters: characters,
  series: series,
  comics: comics,
  modal: modal
});
