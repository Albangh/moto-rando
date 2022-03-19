import {
  SET_LOGGED,
  UPDATE_LOGIN_INPUT,
  SET_LOGOUT,
  SET_PSEUDO,
  SET_ERROR_CONNECTION,
} from "../actions/user";
/**
 * on met des valeurs par défaut sur notre statut (state)
 * par défaut elles sont vide
 */
export const initialState = {
  id: 0,
  email: "",
  password: "",
  pseudo: "",
  logged: false,
  errLogged: "",
};

// le reducer va nous servir a centraliser la mise à jour des actions de mise à jour du login, de la connexion, la déconnexion et l'affichage du pseudo
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // mise à jour des valeurs des champs mail  et mdp
    case UPDATE_LOGIN_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    // mise à jour de la connexion
    case SET_LOGGED:
      return {
        ...state,
        logged: action.payload.isLogged,
        id: action.payload.id,
      };

    // mise a jour de la déconnexion
    case SET_LOGOUT:
      return {
        ...state,
        id: initialState.id,
        email: initialState.email,
        password: initialState.password,
        pseudo: initialState.pseudo,
        logged: false,
      };
    // affichage du pseudo
    case SET_PSEUDO:
      return {
        ...state,
        pseudo: action.payload,
      };
    case SET_ERROR_CONNECTION:
      return {
        ...state,
        errLogged: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
