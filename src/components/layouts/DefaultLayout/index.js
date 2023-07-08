import classNames from 'classnames/bind'
import { Header, Sidebar, Content } from '../layoutComponents'
import styles from './DefaultLayout.module.scss'
const cx = classNames.bind(styles)
function DefaultLayout() {
    return (
        <div className='wrapper'>
            <Header />
            <div className ={cx('body')}>
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}
export default DefaultLayout