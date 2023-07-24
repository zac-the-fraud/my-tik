import classNames from "classnames/bind";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './header.module.scss'
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('head')}>
                <div className={cx('logo')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                    <span>TIKTOK</span>
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Search" />
                    <button className={cx('search-clear')}><FontAwesomeIcon icon={faCircleXmark} size='fa-xl' /></button>
                    <div className={cx('search-loading')}>
                        <FontAwesomeIcon icon={icon({ name: 'spinner', size: 'fa-xl' })} />
                    </div>


                    <button className={cx('search-btn')}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512" fill='rgba(24, 22, 35, 0.2)'>
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>
                </div>
                <div className={cx('navigate')}>
                    <button className={cx('global-btn')}>Upload</button>
                    <button className={cx('global-btn')}>Login</button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </div>
    )
}
export default Header