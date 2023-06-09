export function LOGIN(payload) {
  return {
    type: "LOGIN",
    payload,
  };
}

export function LOGIN_SUCCESS(payload) {
  return {
    type: "LOGIN_SUCCESS",
    payload,
  };
}

export function LOGIN_FAIL(payload) {
  return {
    type: "LOGIN_FAIL",
    payload,
  };
}

export function LOGOUT(payload) {
  return {
    type: "LOGOUT",
    payload,
  };
}

export function CHECK_VALID_TOKEN(payload) {
  return {
    type: "CHECK_VALID_TOKEN",
    payload,
  };
}
export function CHECK_VALID_TOKEN_SUCCESS(payload) {
  return {
    type: "CHECK_VALID_TOKEN_SUCCESS",
    payload,
  };
}
export function CHECK_VALID_TOKEN_FAIL(payload) {
  return {
    type: "CHECK_VALID_TOKEN_FAIL",
    payload,
  };
}
export function RESET_CHECK_VALID_TOKEN(payload) {
  return {
    type: "RESET_CHECK_VALID_TOKEN",
    payload,
  };
}
