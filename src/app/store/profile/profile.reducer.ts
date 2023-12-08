import { createReducer, on } from "@ngrx/store";
import { update } from "./profile.actions";

const initialState = "S";
export const profileReducer = createReducer(
    initialState,
    on(update, (state, action)=> action.value)
)