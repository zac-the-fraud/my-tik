import classNames from "classnames/bind";
import styles from './header.module.scss'
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <div className={cx('logo')}>
                    <img src="" alt='not available' />
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} />
                    <btn className = {cx('search-btn')}> look </btn>
                </div>
                <div className={cx('navigate')}></div>
            </div>
        </div>
    )
}
export default Header