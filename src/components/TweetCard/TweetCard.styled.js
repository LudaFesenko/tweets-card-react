import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 380px;
  height: 460px;

  padding-bottom: 36px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  justify-content: center;
`;

export const HeaderCard = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 22px;
  width: 76px;
  background-image: url('assets/Vector.svg');
`;

export const BgCard = styled.div`
  background-image: url('assets/bgPicture.png');
  height: 168px;
  width: 308px;
  margin: 0 auto;
  margin-top: 28px;
  margin-bottom: 18px;
`;
export const MainCard = styled.div`
  width: 100%;
  padding-top: 70px;
  background-image: url('assets/line.png');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const TweetsBlock = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const TweetsTittle = styled.div`
  display: flex;
  gap: 7px;
`;

export const FollowersTittle = styled.div`
  display: flex;
  gap: 7px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 26px;

  color: #ebd8ff;
`;

export const ContainerAvatar = styled.div`
  position: absolute;
  width: 89px;
  height: 90px;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('assets/Ellipse.png');
`;
export const AvatarFoto = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #5736a3;
`;

export const PersonPhoto = styled.img`
  width: 66px;
  height: 64px;
  border-radius: 100px;
  background-size: cover;
  position: absolute;
  top: 10%;
  right: 13%;
  z-index: -1;
`;
