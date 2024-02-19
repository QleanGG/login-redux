import { useSelector, useDispatch } from "react-redux";
import { setUsername, setLoggedIn } from "./loginSlice";

export function useChangeUsername() {
  const dispatch = useDispatch();
  const changeUsername = (username) => dispatch(setUsername(username));
  return changeUsername;
}

export function useSelectUsername() {
  return useSelector((state) => state.login.username);
}

export function useChangeLoggedIn() {
  const dispatch = useDispatch();
  const changeLogged = (loggedIn) => {
    console.log(loggedIn)
    dispatch(setLoggedIn(loggedIn));
  };
  return changeLogged;
}

export function useSelectLoggedIn() {
  return useSelector((state) => state.login.isLoggedIn);
}
