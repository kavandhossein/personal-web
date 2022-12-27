import { useSelector } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;

type RootReducer = ReturnType<typeof reducer>;

export const useAppSelector: import('react-redux').TypedUseSelectorHook<RootReducer> = useSelector;

