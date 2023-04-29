import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FriendsList, FriendItem, FriendName, FriendStatus, FriendAvatar } from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <FriendItem key={id}>
                        <FriendStatus isOnline={isOnline}></FriendStatus>
                        <FriendAvatar
                            src={avatar}
                            alt={name + " avatar"}/>
                        <FriendName>{name}</FriendName>
                    </FriendItem>
                );
            })
            }
        </FriendsList>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
};