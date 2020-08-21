const reducerLoading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state
      };
    case 'NOT_LOADING':
      return {
        ...state
      };
    default:
      return state
  }
}

export default reducerLoggin;

