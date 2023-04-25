import styled from '@emotion/styled';

export const FollowBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  border-radius: 10.3108px;
  gap: 6px;
  background-color: ${props => (props.isFollowing ? '#5cd3a8' : '#ebd8ff')};
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const BtnText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;
`;
