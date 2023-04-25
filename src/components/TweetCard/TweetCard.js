import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectUserFollow } from '../../redux/selectors';
import { addFollowing, removeFollowing } from '../../redux/followingSlice';
import FollowButton from '../FollowButton/FollowButton';
import {
  Card,
  HeaderCard,
  Logo,
  BgCard,
  MainCard,
  Circle,
  ContainerAvatar,
  TweetsBlock,
  TweetsTittle,
  FollowersTittle,
  AvatarPhoto,
  PersonPhoto,
} from './TweetCard.styled';

const TweetCard = ({ user }) => {
  const dispatch = useDispatch();
  const follow = useSelector(selectUserFollow);

  const isFollowing = Boolean(follow.find(id => id === user.id));

  function handleClick() {
    if (isFollowing) {
      dispatch(removeFollowing(user.id));
    } else {
      dispatch(addFollowing(user.id));
    }
  }

  const followersCount = isFollowing
    ? Number(user.followers) + 1
    : Number(user.followers);
  const formatCount = followersCount.toLocaleString('en-US');

  return (
    <Card>
      <HeaderCard>
        <Logo />
        <BgCard />
      </HeaderCard>

      <MainCard>
        <TweetsBlock>
          <TweetsTittle>
            <span>{user.tweets}</span>tweets
          </TweetsTittle>
        </TweetsBlock>
        <div>
          <FollowersTittle>
            <span>{formatCount}</span> Followers
          </FollowersTittle>
        </div>
        <FollowButton onClick={handleClick} isFollowing={isFollowing} />
      </MainCard>
      <ContainerAvatar>
        <Circle>
          <AvatarPhoto>
            <PersonPhoto src={user.avatar} alt={user.user} />
          </AvatarPhoto>
        </Circle>
      </ContainerAvatar>
    </Card>
  );
};
TweetCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    tweets: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};

export default TweetCard;
