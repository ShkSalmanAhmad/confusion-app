import * as ActionTypes from './ActionTypes';

export const FeedBack = (state = { errMess: null,
                                     feedback:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {...state, errMess: null, feedback: action.payload};

    case ActionTypes.FEEDBACK_FAILED:
      return {...state, errMess: action.payload};

    default:
      return state;
  }

}