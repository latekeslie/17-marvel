import { combineReducers } from 'redux';
import characters from './reducer/character-data';

export default combineReducers({
  characters: characters

});
