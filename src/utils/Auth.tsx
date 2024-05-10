import React from "react";
import { getData, storeData } from "./LocalAsyncStorage";

const [state, dispatch] = React.useReducer(
    (prevState:any, action:any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await getData("userauth1");
      } catch (e) {
       
      }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  export const Auth = React.useMemo(
    () => ({
      signIn: async (data) => {
            dispatch({ type: 'SIGN_IN', token: storeData("userauth1",data) });
        },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
