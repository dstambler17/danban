import axios from "axios";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: "USER_LOADED",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: "AUTH_ERROR"
      });
    });
};

// LOGIN USER
export const signIn = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });
  console.log(body)
  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
};

// REGISTER USER
export const signUp = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });
  console.log(body)

  axios
    .post("/api/auth/register", body, config)
    .then(res => {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: "REGISTER_FAIL"
      });
    });
};

// LOGOUT USER
export const signOut = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: "LOGOUT_SUCCESS"
      });
    })
    .catch(err => {
      console.log("Logout failed")
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
