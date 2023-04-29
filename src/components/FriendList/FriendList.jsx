import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) =>
                (<FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}>
                </FriendListItem>
                )
            )}
        </FriendsList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })
    ),
};