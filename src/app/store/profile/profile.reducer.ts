import { createReducer, on } from "@ngrx/store";
import { update } from "./profile.actions";

const initialState = "";
export const profileReducer = createReducer(
    initialState,
    on(update, (state, action)=> action.value)
)