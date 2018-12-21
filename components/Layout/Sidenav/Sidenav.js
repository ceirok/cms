import Link from 'next/link'
import UserRole from './UserRole'
import Search from './Search'
import NavList from './NavList'
import CurrentUser from './CurrentUser/CurrentUser'
import config from '../../config/config'
import './Sidenav.scss'

const Sidenav = () => (
	<aside className="side-nav">
		<Link href="/">
			<a className="site-logo"><img src="../static/logo.png" alt={`${config.siteName}`}/></a>
		</Link>
		<UserRole/>
		{config.search ? <Search/> : null}
		<NavList/>
		<CurrentUser/>
	</aside>
)

export default Sidenav