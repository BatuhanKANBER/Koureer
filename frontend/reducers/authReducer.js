const initialState = {
    userData: null,
    isLoggedIn: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          userData: action.payload.userData,
          isLoggedIn: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          userData: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;