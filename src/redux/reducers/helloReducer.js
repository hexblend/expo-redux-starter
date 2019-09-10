//
// Initial state
//
const initialState = {
  text: 'Hello world'
};

//
// Reducers
//
const helloReducer = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_TEXT':
      return {...state, text: action.payload};
    default:
      return state;
  }
};
export default helloReducer;
