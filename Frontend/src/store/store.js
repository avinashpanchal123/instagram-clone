import { createStore } from "redux";

import { reducer as SignUpReducer } from "../features/signup/reducer";

export const store = createStore(SignUpReducer);