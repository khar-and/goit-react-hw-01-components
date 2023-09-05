import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  AvatarName,
  AvatarTag,
  AvatarLocation,
  ProfStats,
  ProfStatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

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
