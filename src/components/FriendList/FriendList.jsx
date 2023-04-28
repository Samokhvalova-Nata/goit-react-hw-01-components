import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <li className={css.item} key={id}>
                        <span
                            className={css.status}
                            style={isOnline ?
                                { backgroundColor: 'green' } :
                                { backgroundColor: 'red' }
                            }></span>
                        <img
                            className={css.avatar}
                            src={avatar}
                            alt={name + " avatar"}
                            width="48px" />
                        <p className={css.name}>{name}</p>
                    </li>
                );
            })
            }
        </ul>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
};