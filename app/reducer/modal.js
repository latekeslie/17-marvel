export default function modal(state = [], action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    case 'MODAL@CLEAR':
      return null;
    default:
      return state;
  }
}

// export default function comics(state = [], action) {
//   switch (action.type) {
//     case 'COMICS@FIND_ALL_COMPLETE':
//       return action.data;
//     default:
//       return state;
//   }
// }
