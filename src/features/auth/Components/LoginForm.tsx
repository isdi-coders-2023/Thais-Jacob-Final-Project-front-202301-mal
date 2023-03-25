import React, { FormEvent } from 'react';
import {
  LoginFormContainer,
  LoginFormInput,
  LoginFormButton,
  LoginFormTittle,
  LoginFormSubtittle,
  AuthStatusFeedbackSuccess,
  AuthStatusFeedbackError,
} from './LoginFormStyled';
import { LoadingButton } from '../../../shared/components/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { checkUserTokenAsync, selectAuthSlice } from '../auth-slice';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const responseState = useAppSelector(selectAuthSlice);
  const { status, loginStatus, loginMsg } = responseState;
  const dispatch = useAppDispatch();

  const formFeedback = () => {
    switch (loginStatus) {
      case 'success':
        return (
          <>
            <AuthStatusFeedbackSuccess role="paragraph">
              You have been successfully logged in!
            </AuthStatusFeedbackSuccess>
            <Navigate to={'/app'} />
          </>
        );
      case 'error':
        return <AuthStatusFeedbackError>{loginMsg}</AuthStatusFeedbackError>;
      default:
        return;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(checkUserTokenAsync(event.currentTarget));
  };

  return (
    <LoginFormContainer onSubmit={onSubmit}>
      <>
        <LoginFormTittle>
          Happy to see you again in Malaguide! 👋
        </LoginFormTittle>
        <LoginFormSubtittle>
          Enter your details to see the best tours
        </LoginFormSubtittle>
      </>
      <LoginFormInput
        type="email"
        id="email"
        placeholder="Email"
        required
        name="email"
      />
      <LoginFormInput
        type="password"
        id="password"
        placeholder="Password"
        required
        name="password"
      />

      <LoginFormButton type="submit">
        {status !== 'loading' ? <span>Log in</span> : <LoadingButton />}
      </LoginFormButton>

      {formFeedback()}
    </LoginFormContainer>
  );
};

export default LoginForm;
