//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

//Images
import logo from '../../public/images/navigation/logo.png';
import discordLogo from '../../public/images/navigation/discord.svg';
import twitterLogo from '../../public/images/navigation/twitter.svg';
import instagramLogo from '../../public/images/navigation/instagram.svg';

//CSS
import useStyles from './navigationBarStyle';

//Script
function NavigationBar() {
	//Style
	const classes = useStyles();
	return (
		<>
			<AppBar className={classes.appBar} elevation={0}>
				<Toolbar className={classes.toolBar}>
					<div className={classes.logoDiv}>
						<Image
							src={logo}
							alt="Meta Yeti"
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					<div className={classes.centerElements}>
						<ul>
							<li>
								<Link to="aboutUsScroll" smooth={true}>
									About us
								</Link>
							</li>
							<li>
								<Link to="yetisScroll" smooth={true}>
									Yetis
								</Link>
							</li>
							<li>
								<Link to="storyScroll" smooth={true}>
									Story
								</Link>
							</li>
							<li>
								<Link to="wishlistScroll" smooth={true}>
									Wishlist
								</Link>
							</li>
							<li>
								<Link to="roadmapScroll" smooth={true}>
									Roadmap
								</Link>
							</li>
						</ul>
					</div>
					<div className={classes.rightElements}>
						<ul>
							<li>
								<a
									href="https://discord.com"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={discordLogo}
											alt="Discord"
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={twitterLogo}
											alt="Twitter"
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={instagramLogo}
											alt="Instagram"
											width="100%"
											height="100%"
											layout="responsive"
											objectFit="contain"
										/>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default NavigationBar;
