import { RESET_GAME } from "../actions/constants";

export const columns = (
  state = [
    [
      { id: 1, class: 'one' },
      { id: 2, class: 'two' },
      { id: 3, class: 'three' },
      { id: 4, class: 'four' },
      ],
    [],
    [],
  ],
  action
) => {
  switch (action.type) {
    case RESET_GAME:
      return action.columns;
    default:
      return state;
  }
};
