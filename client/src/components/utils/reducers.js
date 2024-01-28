import {
    ADD_QUESTION
} from "./actions"

export const reducer = (state, action) => {
    switch (action.type) {
      case ADD_QUESTION:
        return {
          ...state,
          questions: [...action.questions],
        };

        default:
            return state;
        }
      };
      