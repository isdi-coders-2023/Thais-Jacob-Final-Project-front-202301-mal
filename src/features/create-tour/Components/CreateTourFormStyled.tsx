import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CreateFeedBackError = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: center;
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xxs);
  color: var(--color-font-form-error);
`;

export const CreateFeedBackSuccess = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  text-align: center;
  font-family: var(--font-family-dmsans-regular);
  font-size: var(--font-size-xxs);
  color: var(--color-font-form-success);
`;

export const CreateFormTitleContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f8fdff;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    height: 137px;
  }
`;

export const CreateFormTitle = styled.h2`
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  font-family: var(--font-family-dmsans-bold);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  @media (min-width: 900px) {
    font-family: var(--font-family-dmsans-medium);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-xxl);
  }
`;

export const CreateFormStyled = styled.form`
  display: flex;
  align-items: center;
  padding-top: 80px;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;

  .tour-img {
    padding-left: 24px;
    padding-right: 24px;
    border-radius: var(--border-m);
    height: 170px;
    position: relative;
    padding-bottom: 16px;

    p {
      font-family: var(--font-family-dmsans-regular);
      font-weight: var(--font-weight-regular);
      color: var(--color-font-link);
      font-size: var(--font-size-xs);
      width: 100%;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translate(-50%, 0%);
    }
    p:hover {
      color: var(--color-font-link-hover-active);
      font-weight: var(--font-weight-medium);
      text-decoration: underline;
      cursor: pointer;
    }

    input {
      visibility: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--border-m);
      border: none;
    }

    @media (min-width: 450px) {
      height: 250px;
    }
  }
`;

export const InputLabelStyled = styled.label`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xs);
  position: relative;
  letter-spacing: 0.05rem;
  width: 100%;
  max-width: 480px;

  :has(input:focus) {
    color: var(--color-font-secondary);
  }

  :has(:focus:required:invalid, .notMatch:not(:focus)) {
    color: var(--color-font-form-error);
  }

  span {
    margin-left: 10px;
    top: -32px;
    padding: 0 4px;
    position: absolute;
    width: fit-content;
  }

  .notMatch {
    outline: 1px solid var(--color-font-form-error);
    color: var(--color-font-form-error);
  }

  input {
    border: var(--border-color-input);
    box-shadow: var(--box-shadow-input);
    border-radius: var(--border-l);
    font-size: var(--font-size-x);
    font-family: var(--font-family-dmsans-regular);
    font-weight: var(--font-weight-regular);
    background-color: var(--bg-color-input);
    color: var(--color-font-input-filled);
    height: 60px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    letter-spacing: 0.05rem;

    ::placeholder {
      padding-left: 0.5rem;
    }

    :invalid:focus {
      outline: 1px solid var(--color-font-form-error);
      color: var(--color-font-form-error);
    }
  }
`;

export const CreateFormInput = styled.input`
  width: 100%;
  max-width: 480px;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const CreateFormButtonPrimary = styled.button`
  cursor: pointer;
  border: none;
  border-radius: var(--border-l);
  background-color: var(--bg-color-primary);
  width: 100%;
  height: 58px;
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  color: var(--color-font-primary);

  :hover {
    background-color: var(--bg-color-primary-hover-active);
    font-weight: var(--font-weight-medium);
  }

  :disabled {
    border: var(--border-color-disable);
    color: var(--color-font-secondary-disabled);
    background-color: var(--bg-color-secondary);
  }
`;

export const CreateFormButtonCancel = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-l);
  border: var(--border-color-secondary);
  width: 100%;
  height: 58px;
  font-size: var(--font-size-x);
  font-family: var(--font-family-dmsans-regular);
  font-weight: var(--font-weight-regular);
  background-color: var(--bg-color-input);
  color: var(--color-font-secondary);

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
