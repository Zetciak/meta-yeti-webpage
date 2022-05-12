//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';

//Images
import discordLogo from '../../../public/images/indexPage/firstSection/discord.svg';

//CSS
import useStyles from './firstSectionStyle';

//Script
function FirstSection() {
	//Style
	const classes = useStyles();
	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.elementsDiv}>
					<Typography className={classes.whiteTitle}>
						YETI KOTLETI
					</Typography>
					<Typography className={classes.blueTitle}>
						LOREM IPSUM
					</Typography>
					<Typography className={classes.description}>
						Duis egestas rutrum erat vel finibus. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Donec dapibus
						purus eget nisl efficitur, at porttitor ex accumsan.
					</Typography>
					<div className={classes.bottomSection}>
						<Button
							variant="contained"
							className={classes.bottomSectionBtn}
						>
							<Typography>EXPLORE NOW!</Typography>
						</Button>
						<a
							href="https://youtu.be/dQw4w9WgXcQ?t=42"
							target="_blank"
							rel="noreferrer"
							className={classes.discordHref}
						>
							<div className={classes.discordLogoBtn}>
								<Image
									src={discordLogo}
									alt="Discord"
									width="100%"
									height="100%"
									layout="responsive"
									objectFit="contain"
								/>
							</div>
							<Typography className={classes.joinDiscord}>
								JOIN DISCORD
							</Typography>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default FirstSection;
