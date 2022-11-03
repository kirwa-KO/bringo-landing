import Link from 'next/link';
import LeftArrow from '../../assets/leftArrow.svg';
import styles from "./Navbar.module.scss";
import Image from 'next/image';

function Navbar() {
	return (
		<div className="container">
			<div className={`row ${styles.navbar} ${styles.logo}`}>
				<Link href="/" className={`w-fit-content`} passHref>
					<Image
						src="/imgs/bringo.svg"
						alt=""
						width={116}
						height={35}
						/>
				</Link>
				<div className={`w-fit-content ${styles.links}`}>
					<Link href="#about" passHref>
						<span className="lg-show">
							About
						</span>
					</Link>
					<a href="https://bit.ly/bringo-roadmap" target="_blank" rel="noreferrer">
						Roadmap
					</a>
					<a href="https://app.bringo.club/register" target="_blank" rel="noreferrer">
						<button className={`main-btn ${styles.btn}`}>
							Join us <LeftArrow />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;