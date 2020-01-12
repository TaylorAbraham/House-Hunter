import React from 'react';
import PropTypes from 'prop-types';

const StarRating = (props) => {
  let starArr = [0, 0, 0, 0, 0];
  for(let i = 0; i < props.rating; i++) {
    starArr[i] = 1;
  }

  return (
    <div>
      {
        starArr.map((star) => star === 1 ? (
            <i class="fas fa-star"></i>
          ) : (
            <i class="far fa-star"></i>
          )
        )
      }
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
