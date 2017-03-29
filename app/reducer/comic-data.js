export default function comics(state = [], action) {
  switch (action.type) {
    case 'COMICS@FIND_ALL_COMPLETE':
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
}
