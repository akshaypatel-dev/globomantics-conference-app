import Link from "next/link";
import styles from "./conference.module.css";
export default function Page() {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.conference}>
					Welcome to Globomatics Conference Page
				</h1>
				<p> Use Buttons to Navigate</p>
			</header>
			<div>
				<Link href="/conference/speakers">
					<button className={styles.btn}>Speakers</button>
				</Link>
				<Link href="/conference/sessions">
					<button className={styles.btn}>Sessions</button>
				</Link>
				<Link href="/home">
					<button className={styles.btn}>Home</button>
				</Link>
			</div>
		</>
	);
}
