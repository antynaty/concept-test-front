import axios from 'axios';

export const search = idCharSelected => {
  return {
    type: 'SEARCH',
    idCharSelected
  }
};
export const increment = page => {
  return {
    type: 'INCREMENT',
    page
  }
};
export const decrement = page => {
  return {
    type: 'DECREMENT',
    page
  }
};
export const fetchUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}
export const fetchUsersSuccess = users => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users
  }
}
export const fetchUsersFailure = error => {
  return {
    type: 'FETCH_USERS_FAILURE',
    payload: error
  }
}
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        // const users = response.data.slice(0, 5);
        console.log(response.data)
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchUsersFailure('No se pudo encontrar los datos'))
        console.log(err)
      })
  }
}