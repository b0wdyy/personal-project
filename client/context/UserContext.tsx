import { User } from '../types/User';
import { createContext, useContext, useReducer } from 'react';

interface IUserContext {
  user: User;
  access_token: string;
}
type UserActions =
  | { type: 'login'; payload: { user: User; access_token: string } }
  | { type: 'logout' };
type Dispatch = (action: UserActions) => void;

const initialState: IUserContext = {
  user: {} as User,
  access_token: '',
};

const userContext =
  createContext<{ state: IUserContext; dispatch: Dispatch }>(initialState);

function userReducer(state: IUserContext, action: UserActions) {
  switch (action.type) {
    case 'login':
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
      return state;
    case 'logout':
      state.user = {} as User;
      state.access_token = '';
      return state;
    default:
      throw new Error(`No action for ${action.type}`);
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: {} as User,
    access_token: '',
  });

  const values = { state, dispatch };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}

function useUser() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('useUser must be used in a UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
