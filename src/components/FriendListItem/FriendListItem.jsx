import PropTypes from 'prop-types';
import { FriendItem, FriendName, FriendStatus, FriendAvatar } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendItem>
            <FriendStatus isOnline={isOnline}></FriendStatus>
            <FriendAvatar
                src={avatar}
                alt={name + " avatar"}/>
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}