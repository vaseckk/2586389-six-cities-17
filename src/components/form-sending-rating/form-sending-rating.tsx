import {memo} from 'react';

interface FormSendingRatingsProps {
  value: number;
  title: string;
  onRatingButtonChange: (value: number) => void;
  checked: boolean;
}

function FormSendingRatings ({value, title, onRatingButtonChange, checked}: FormSendingRatingsProps):JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={checked}
        data-testid={`rating-input-${value}`}
        onChange={(e) => {
          onRatingButtonChange(Number(e.target.value));
        }}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
        data-testid={`rating-label-${value}`}
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}

export default memo(FormSendingRatings);
