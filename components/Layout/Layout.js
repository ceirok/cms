import Head from 'next/head'
import Sidenav from './Sidenav/Sidenav'
import '../reset.scss'
import '../general.scss'
import './Layout.scss'

const Layout = (props) => (
	<>
		<Head>			
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{props.title} | CMS</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
		</Head>
		<Sidenav/>
		<header className="header" role="header">
			<h1>{props.title}</h1>
		</header>		
		<main className="main" role="main">
			{props.children}
		</main>
	</>
)

export default Layout

