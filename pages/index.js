//Imports
import Head from 'next/head';
import dynamic from 'next/dynamic';

//Components
const NavigationBar = dynamic(
	() => import('../components/navigationBar/navigationBar'),
	{ ssr: false }
);
import FirstSection from '../components/indexPage/firstSection/firstSection';

//CSS
import useStyles from '../components/indexPage/indexStyle';

//Script
function HomePage() {
	const classes = useStyles();
	return (
		<div>
			<Head>
				<title>Meta Yeti NFT</title>
			</Head>
			<div className={classes.firstBackgrounds}>
				<div className={classes.blueBg}></div>
				<div className={classes.artBg}></div>
				<div className={classes.secondBlueBg}></div>
				<NavigationBar />
				<FirstSection />
			</div>
		</div>
	);
}

//<Utilities />

export default HomePage;
