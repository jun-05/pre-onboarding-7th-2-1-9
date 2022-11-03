const initialState = { tagNumber: 0 };

export default function tag(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TAG':
      return {
        ...state,
        tagNumber: action.payload,
      };
    default:
      return state;
  }
}
