import { createContext, useContext, useEffect, useReducer } from "react";
import { SET_ADMIN_SESSION, SET_USER_SESSION } from "./actions";

const initialState = {
  isAdminLoggedIn: false,
  isUserLoggedIn: false,
};

const getInitialState = () => {
  if (
    typeof window !== "undefined" &&
    localStorage.getItem("auth") &&
    localStorage.getItem("auth") !== "undefined"
  ) {
    return JSON.parse(localStorage.auth);
  }
};

export const AuthContext: any = createContext(getInitialState());
export const AuthDispatchContext: any = createContext(null);

export function AuthContextProvider({ children }: { children: any }) {
  const [authState, dispatch] = useReducer(authReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  console.log(AuthContext);
  return useContext(AuthContext);
}

export function AuthDispatch() {
  return useContext(AuthDispatchContext);
}

function authReducer(authState: any, action: any) {
  switch (action.type) {
    case SET_ADMIN_SESSION: {
      return {
        ...authState,
        isAdminLoggedIn: action.isAdminLoggedIn,
      };
    }
    case SET_USER_SESSION: {
      return {
        ...authState,
        isUserLoggedIn: action.isUserLoggedIn,
      };
    }
    default: {
      return authState;
    }
  }
}
