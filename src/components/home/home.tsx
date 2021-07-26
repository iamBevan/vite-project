import React from "react";
import styles from "./home.module.scss";

const Home = (): JSX.Element => {
	return (
		<div className={styles.home}>
			<header>
				<a href="#" className={styles.logo}>
					Kevin Bevan
				</a>
				<nav>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li className={styles.active}>
							<a href="#">Become a member</a>
						</li>
					</ul>
				</nav>
			</header>
			<section>
				<h1>Go Big or Go Home</h1>
			</section>
			<div className={styles.overlay}>
				<div className={styles.left}>
					<h2>It's so easy</h2>
					<p className={styles.subhead}>You've got two options!</p>
					<div className={styles.cards}>
						<div className={styles.card}>
							<strong>Subscribe for $9 a month</strong>
							<p>
								This is the most popular option across our
								members. Join now, and cancel at any time!
							</p>
							<a href="#" className={styles.cta}>
								Subscribe now
							</a>
						</div>
						<div className={styles.card}>
							<strong>Pay $99 Once</strong>
							<p>
								This is the most popular option across our
								members. Join now, and cancel at any time!
							</p>
							<a
								href="#"
								className={[
									[styles.cta],
									[styles.payOnce],
								].join(" ")}
							>
								Pay once
							</a>
						</div>
					</div>
				</div>
				<div className={styles.middle}>
					<ul className={styles.secondary}>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
					<div className={styles.socialNav}>
						<a href="#" className={styles.twitter}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
							</svg>
						</a>
						<a href="#" className={styles.facebook}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
						</a>
					</div>
				</div>
				<div className={styles.right}>
					<svg
						className={styles.exit}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="12" cy="12" r="10" />
						<line x1="15" y1="9" x2="9" y2="15" />
						<line x1="9" y1="9" x2="15" y2="15" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export { Home };
