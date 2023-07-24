import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUsers, faCompass, faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss'
const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('menu')}>
                <li className={cx('menu-item')}>
                    <FontAwesomeIcon className={cx('icon-width')} icon={faHouse} />
                    <span className={cx('menu-text')}>For you</span>
                </li>
                <li className={cx('menu-item')}>
                    <FontAwesomeIcon className={cx('icon-width')} icon={faUsers} />
                    <span className={cx('menu-text')}>Following</span>
                </li>
                <li className={cx('menu-item')}>
                    <FontAwesomeIcon className={cx('icon-width')} icon={faCompass} />
                    <span className={cx('menu-text')}>Explore</span>
                </li>
                <li className={cx('menu-item')}>
                    <FontAwesomeIcon className={cx('icon-width')} icon={faVideo} />
                    <span className={cx('menu-text')}>Live</span>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar