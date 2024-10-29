export { AuthReducer, login, logout } from './model/slice';
export { selectAuth, selectLoading } from './model/selectors';
export {
  checkAuth,
  registerThunk,
  loginThunk,
  logoutThunk,
} from './model/thunks';
