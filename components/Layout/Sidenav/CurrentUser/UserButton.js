import Link from 'next/link'

export const NotificationButton = () => (
	<button className="current-user--actions__action current-user--actions__notifications">
		<i className="fas fa-bell"></i>
		<span className="current-user--actions__notifications--number">4</span>
	</button>
)

export const SettingsButton = () => (
	<Link href="/settings">
		<a className="current-user--actions__action"><i className="fas fa-cog"></i></a>
	</Link>
)

export const SignoutButton = () => (
	<Link href="/signout">
		<a className="current-user--actions__action"><i className="fas fa-power-off"></i></a>
	</Link>
)