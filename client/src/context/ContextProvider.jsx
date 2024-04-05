import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import PropTypes from "prop-types"; // Import thư viện PropTypes

const initialState = {
  currentUser: null,
  openLogin: false,
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Kiểm tra children có kiểu node và là bắt buộc
};
export default ContextProvider;
