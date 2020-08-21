const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.page;
    case 'DECREMENT':
      return state - action.page;
    default:
      return state;
  } 
}

export default pageReducer;