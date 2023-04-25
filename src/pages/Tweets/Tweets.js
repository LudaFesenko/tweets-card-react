import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectLoadMore,
  selectUsers,
} from '../../redux/selectors';
import { fetchUsers } from '../../redux/operations';
import { CardContainer, CardWrap } from './Tweets.styled';
import TweetCard from '../../components/TweetCard';
import { BackLink } from '../../components/BackLink/BackLink';
import ButtonLoad from '../../components/ButtonLoad';

const Tweets = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(fetchUsers({ page, abortController }));
    return () => {
      abortController.abort();
    };
  }, [dispatch, page]);

  const users = useSelector(selectUsers);
  const canLoadMore = useSelector(selectLoadMore);
  const loading = useSelector(selectIsLoading);

  const loadMore = () => {
    setPage(prevState => {
      return prevState + 1;
    });
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const showButton = canLoadMore && !loading && users.length > 0;
  return (
    <CardContainer>
      <BackLink to={backLinkHref}>Go Back</BackLink>

      <CardWrap>
        {users.map(user => (
          <li key={user.id}>
            <TweetCard user={user}>{user}</TweetCard>
          </li>
        ))}
      </CardWrap>
      {showButton && <ButtonLoad onClick={loadMore} />}
    </CardContainer>
  );
};
export default Tweets;
