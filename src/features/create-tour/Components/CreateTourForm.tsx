import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectTours, createTourAsync } from '../../tour/tour-list-slice';
import { LoadingButton } from '../../../shared/components/Loading/Loading';
import { TourStatus } from '../../../models/api-status';

import {
  CreateFormStyled,
  CreateFormInput,
  CreateFormTitleContainer,
  CreateFormTitle,
  InputLabelStyled,
  CreateFormButtonCancel,
  ButtonContainer,
  CreateFormButtonPrimary,
  CreateFeedBackError,
  CreateFeedBackSuccess,
} from './CreateTourFormStyled';

const CreateTourForm = () => {
  const [image, setImage] = useState('');
  const { createStatus } = useAppSelector(selectTours);
  const dispatch = useAppDispatch();

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const imageUrl = file ? URL.createObjectURL(file as Blob) : '';
    setImage(imageUrl);
  };

  const generateFeedback = () => {
    switch (createStatus) {
      case TourStatus.SUCCESS:
        return (
          <>
            <CreateFeedBackSuccess role="paragraph">
              Tour was successfully created 🎉
            </CreateFeedBackSuccess>
          </>
        );
      case TourStatus.ERROR:
        return (
          <>
            <CreateFeedBackError role="paragraph">
              It was not possible to create the tour 🙁
            </CreateFeedBackError>
          </>
        );

      default:
        return;
    }
  };
  return (
    <>
      <CreateFormTitleContainer>
        <CreateFormTitle>Create your guided tour</CreateFormTitle>
      </CreateFormTitleContainer>
      <CreateFormStyled
        data-testid="form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(createTourAsync(e.currentTarget));
        }}
      >
        <InputLabelStyled role={'complementary'}>
          <span>Title</span>
          <input
            placeholder="Tour title"
            type="text"
            name="title"
            id="title"
            pattern="[a-zA-Z.,;:!? -]{3,30}"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Summary</span>
          <input
            placeholder="Short description"
            type="text"
            name="summary"
            id="summary"
            pattern="[a-zA-Z.,;:!? -]{5,95}"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Description</span>
          <input
            placeholder="Main description"
            type="text"
            name="description"
            id="description"
            pattern="[a-zA-Z.,;:!? -]{60,480}"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Meeting date</span>
          <input
            placeholder="Meeting date"
            type="Date"
            name="date"
            id="date"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Meeting point</span>
          <input
            placeholder="Meeting point"
            type="text"
            name="meetingPoint"
            id="meetingPoint"
            pattern="[a-zA-Z.,;:!? -]{6,20}"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Price</span>
          <input
            placeholder="0"
            type="text"
            name="price"
            id="price"
            pattern="^(100|\d{1,2})$"
            required
          />
        </InputLabelStyled>

        <InputLabelStyled role={'complementary'}>
          <span>Video</span>
          <input
            placeholder="YouTube URL"
            type="text"
            name="video"
            id="video"
            pattern="^https?:\/\/(?:www\.)?youtube.com\/watch\?v=[\w-]{11}$"
            required
          />
        </InputLabelStyled>

        <label className="tour-img">
          <p>Change picture</p>
          <img
            src={
              image === '' ? '/assets/images/default-image-tour.webp' : image
            }
            alt="tour pic"
          />

          <CreateFormInput
            data-testid="File"
            name="image"
            type="file"
            accept=".jpg,jpeg,.png,.webp"
            onChange={e => onImageChange(e)}
          />
        </label>

        <ButtonContainer>
          <CreateFormButtonCancel to={'/app'}>
            {createStatus !== 'loading' ? 'Cancel' : <LoadingButton />}
          </CreateFormButtonCancel>
          <CreateFormButtonPrimary type="submit">
            {createStatus !== 'loading' ? 'Create tour' : <LoadingButton />}
          </CreateFormButtonPrimary>
        </ButtonContainer>

        {generateFeedback()}
      </CreateFormStyled>
    </>
  );
};

export default CreateTourForm;
