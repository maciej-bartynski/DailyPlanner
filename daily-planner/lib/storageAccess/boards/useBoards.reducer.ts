export const hookStateInitial = {
  loading: false,
  error: '',
};

export const hookReducer = (
  state: typeof hookStateInitial = hookStateInitial,
  action: {
    type: 'LOADING' | 'ERROR' | 'DATA';
    error?: string;
  },
) => {
  switch (true) {
    case action.type === 'LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case action.type === 'ERROR': {
      return {
        error: action.error || '',
        loading: false,
      };
    }
    case action.type === 'DATA': {
      return {
        error: '',
        loading: false,
      };
    }

    default: {
      return hookStateInitial;
    }
  }
};
