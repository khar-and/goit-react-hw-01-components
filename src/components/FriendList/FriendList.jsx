import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FrListWrap } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FrListWrap>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FrListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
