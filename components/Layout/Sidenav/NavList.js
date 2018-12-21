import Link from 'next/link'
import config from '../../config/config'

const NavList = () => (
	<nav className="site-nav">
		<ul className="site-nav--list">
			{config.siteNav.map((item) => (
				<li className="site-nav--list--item" key={item.label}>
					<Link href={item.link}>
						<a>
							<i className={`fas fa-${item.icon}`}></i>
							{item.label}
						</a>
					</Link>					
				</li>
			))}
		</ul>
	</nav>
)

export default NavList