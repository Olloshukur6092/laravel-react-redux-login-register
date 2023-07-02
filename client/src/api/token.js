const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (err) {
    return null;
  }
};

const authVerify = (dispatch, logout, navigate) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    const decodeJwt = parseJwt(user.access_token);
    console.log(decodeJwt.exp)
    if (decodeJwt.exp * 1000 < Date.now()) {
      dispatch(logout(navigate));
    }
    return;
  }
};

export default authVerify;
