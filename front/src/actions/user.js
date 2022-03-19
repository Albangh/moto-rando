export const UPDATE_LOGIN_INPUT = "UPDATE_LOGIN_INPUT";
export const SET_LOGGED = "SET_LOGGED";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const SET_PSEUDO = "SET_PSEUDO";
export const SET_ERROR_CONNECTION = "SET_ERROR_CONNECTION";
export const ADD_USER = "ADD_USER";

/**
 * fonction que l'on exporte, c'est l'action pour mettre à jour la valeur des champs email et password
 * @param {string} value
 * @param {string} name
 * @returns
 */
export function actionUpdateLoginInput(value, name) {
  return {
    type: UPDATE_LOGIN_INPUT,
    payload: { value, name },
  };
}
/**
 * c'est l'action pour savoir si l'utilisateur est connecté
 * @param {bool} isLogged
 * @returns
 */
export function actionSetLogged(isLogged, id) {
  return {
    type: SET_LOGGED,
    payload: { isLogged, id },
  };
}

export function actionSubmitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}

export function actionSetLogout() {
  return {
    type: SET_LOGOUT,
  };
}

export function actionsSetPseudo(pseudo) {
  return {
    type: SET_PSEUDO,
    payload: pseudo,
  };
}

export function actionSetErrorConnection(loggedMsg) {
  return {
    type: SET_ERROR_CONNECTION,
    payload: loggedMsg,
  };
}

export function actionAddUser(pseudo, email, password, confirmPassword) {
  return {
    type: ADD_USER,
    payload: {
      pseudo,
      email,
      password,
      confirmPassword,
    },
  };
}
