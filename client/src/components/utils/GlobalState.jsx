import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch]  = useReducer(reducer, {
    questions: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };