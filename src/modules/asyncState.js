export const asyncState = {
  initial: {
    isLoading: false,
    data: null,
    hasError: null,
  },
  load: (prevState = null) => {
    return {
      isLoading: true,
      data: prevState,
      hasError: null,
    };
  },
  success: payload => {
    return {
      isLoading: false,
      data: payload,
      hasError: null,
    };
  },

  failure: error => {
    return {
      isLoading: false,
      data: null,
      hasError: error,
    };
  },
};
