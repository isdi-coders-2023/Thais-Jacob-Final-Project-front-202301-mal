import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 378px;
`;

export const LoginFormInput = styled.input`
  border: var(--border-color-input);
  box-shadow: var(--box-shadow-input);
  border-radius: var(--border-l);
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  background-color: var(--bg-color-input);
  color: var(--color-font-input);
  height: 60px;
  padding-left: 1rem;

  ::placeholder {
    padding-left: 0.5rem;
  }
`;

export const LoginFormButton = styled.button`
  height: 60px;
  border-radius: var(--border-l);
  border: var(--border-color-secondary);
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  background-color: var(--bg-color-input);
  color: var(--color-font-secondary);
  margin-top: 24px;

  :hover {
    background-color: var(--bg-color-secondary-hover-active);
    color: var(--color-font-primary);
    font-weight: var(--font-weight-medium);
  }

  :disabled {
    border: var(--border-color-disable);
    color: var(--color-font-secondary-disabled);
    background-color: var(--bg-color-secondary);
  }
`;

export const LoginFormTittle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-family: var(--font-family-dmsans-bold);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  color: var(--color-font-secondary);
  line-height: 2.875rem;

  @media (min-width: 1024px) {
    width: 378px;
  }
`;

export const LoginFormSubtittle = styled.p`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 20px;
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xs);
  color: var(--color-font-paragraph);
  line-height: 1.875rem;

  @media (min-width: 1024px) {
    padding-top: 14px;
    padding-bottom: 28px;
  }
`;

export const AuthStatusFeedbackSuccess = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xxs);
  color: var(--color-font-form-success);
`;

export const AuthStatusFeedbackError = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xxs);
  color: var(--color-font-form-error);
`;
