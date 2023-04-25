import PropTypes from 'prop-types';

import { FollowBtn, BtnText } from './FollowButton.styled';

function FollowButton({ onClick, isFollowing }) {
  return (
    <>
      <FollowBtn type="button" onClick={onClick} isFollowing={isFollowing}>
        <BtnText>{!isFollowing ? 'Follow' : 'Following'}</BtnText>
      </FollowBtn>
    </>
  );
}

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
};

export default FollowButton;
