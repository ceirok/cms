import config from '../../../config/config'
import { NotificationButton, SettingsButton, SignoutButton } from './UserButton'
import './CurrentUser.scss'

const CurrentUser = () => (
	<div className="current-user">
		<span className="current-user--name">{config.userRoles[0].userName}</span>
		<div className="current-user--actions">
			<NotificationButton/>
			<SettingsButton/>
			<SignoutButton/>
		</div>
	</div>
)

export default CurrentUser