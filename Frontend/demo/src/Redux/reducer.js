var initialdata = { isloggedin: false };

function reducer(state = initialdata, action) {
  if (action.type === "loggedin") {
    state = { ...state, isloggedin: action.data };
  } else if (action.type === "loggedout") {
    state = { ...state, isloggedin: action.data };
  }

  return state;
}

export default reducer;
