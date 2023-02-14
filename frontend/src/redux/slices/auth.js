import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  email: "",
  error: false,
  isLoading: false,
  stepComplete: 0
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.stepComplete = 0
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
    updateStepsComplete(state,action){
      state.stepComplete = action.payload.stepComplete
    }
  },
});

export default slice.reducer;

// log in
export function LoginUser(formValues) {
  console.log(formValues, "formValues");
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}

export function LogoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}

export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function NewPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "/auth/register",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          slice.actions.updateRegisterEmail({ email: formValues.email })
        );
        dispatch(slice.actions.updateStepsComplete({stepComplete: 1}))
        dispatch(slice.actions.updateIsLoading({ isLoading: false, error: false }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(slice.actions.updateIsLoading({ isLoading: false, error: true }));
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify-otp";
        }
      });
  };
}

export function VerifyEmail(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/verify-otp",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
        dispatch(slice.actions.updateStepsComplete({stepComplete: 2}))
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        if(!getState().auth.error){
          window.location.href="/auth/complete-profile"
        }
      })
  };
}

export function CompleteProfile(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/complete-profile",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
  
        dispatch(slice.actions.updateStepsComplete({stepComplete: 3}))
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        if(!getState().auth.error){
          window.location.href="/auth/business-details"
        }
      })
  };
}

export function BusinessProfile(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/business-profile",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
  
        dispatch(slice.actions.updateStepsComplete({stepComplete: 4}))
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        if(!getState().auth.error){
          window.location.href="/auth/invite"
        }
      })
  };
}

export function InviteTeam(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/invite",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
  
        dispatch(slice.actions.updateStepsComplete({stepComplete: 5}))
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => {
        if(!getState().auth.error){
          window.location.href="/app"
        }
      })
  };
}