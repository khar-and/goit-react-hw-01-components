import PropTypes from 'prop-types';
import {
  FrListItem,
  FrListStatus,
  FrListAvatar,
  FrListName,
} from './FriendListItem.styled';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <FrListItem>
      <FrListStatus statusType={status}>{status}</FrListStatus>
      <FrListAvatar src={avatar} alt="User avatar" width="48" />
      <FrListName>{name}</FrListName>
    </FrListItem>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
