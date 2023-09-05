import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <AvatarName>{username}f</AvatarName>
        <AvatarTag>{`@${tag}`}</AvatarTag>
        <AvatarLocation>{location}</AvatarLocation>
      </Description>

      <ProfStats>
        <ProfStatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </ProfStatsItem>
        <ProfStatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </ProfStatsItem>
        <ProfStatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </ProfStatsItem>
      </ProfStats>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;
`;

const Description = styled.div`
  /* position: relative; */
  text-align: center;

  width: 100%;
  padding: 16px;

  border-radius: 28px;
  background: #ffffff;
  /* border: 10px, solid, blue; */
  box-shadow: 10px 0px 10px rgba(89, 213, 189, 0.45);
`;

const Avatar = styled.img`
  width: 300px;
`;
const AvatarName = styled.p`
  margin-left: 30px;
  color: #161414b5;
  font-size: 30px;
  font-weight: 700;
`;
const AvatarTag = styled.p`
  color: #161414b5;
  font-size: 20px;
  font-weight: 400;
`;
const AvatarLocation = styled.p`
  color: #161414b5;
  font-size: 20px;
  font-weight: 400;
`;
export const ProfStats = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px;
  margin: 0;
`;
const ProfStatsItem = styled.li`
  display: flex;
  width: 120px;
  justify-items: center;
  :not(:last-child) {
    border-right: 1px solid #999999;
  }
`;

export const StatsLabel = styled.span`
  font-weight: 400;
  font-size: 12px;

  margin-bottom: 10px;
  color: #999999;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;
