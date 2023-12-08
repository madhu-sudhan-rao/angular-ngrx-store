import { createAction, props } from "@ngrx/store";

export const update = createAction(
    '[Profile] Image',
    props<{value: string}>()
)