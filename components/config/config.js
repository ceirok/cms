const config = {
	siteName: 'Some CMS',
	userRoles: [
		{ id: 1, userName: 'John Doe', userRole: 'Admin'},
		{ id: 2, userName: 'Jane Smith', userRole: 'Manager' },
		{ id: 3, userName: 'Tony Start', userRole: 'Manager' }
	],
	search: false,
	siteNav: [
		{ icon: 'list-ul', label: 'Categories', link: '/categories' },
		{ icon: 'bullseye', label: 'Missions', link: '/missions' },
		{ icon: 'list', label: 'Items', link: '/items' },
		{ icon: 'calendar-alt', label: 'Itemevents', link: '/itemevents' },
		{ icon: 'gavel', label: 'Auctions', link: '/auctions' },
		{ icon: 'handshake', label: 'Negotiations', link: '/negotiations' },
		{ icon: 'chart-line', label: 'Economy', link: '/economy' },
	]
}

export default config