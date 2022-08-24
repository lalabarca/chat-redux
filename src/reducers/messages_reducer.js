import { CREATE_MESSAGES, FETCH_MESSAGES } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    case CREATE_MESSAGES:
      const newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    default:
      return state;
  }
}
