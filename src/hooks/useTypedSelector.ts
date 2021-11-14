import { TypedUseSelectorHook, useSelector } from "react-redux"
import {AppRootStateType} from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
