import styles from "../page.module.css";
import Link from "next/link";
export default function Page() {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.header}> Welcome to Globomatics Home Page</h1>
				<p>Use Buttons to Navigate</p>
			</header>
			<div className={styles.container}>
				<Link href="/home">
					<button className={styles.btn}>Home</button>
				</Link>
				<Link href="/settings">
					<button className={styles.btn}> Settings</button>
				</Link>
				<Link href="/conference">
					<button className={styles.btn}>Conference </button>{" "}
				</Link>
				<Link href="/blog">
					<button className={styles.btn}> Blog </button>
				</Link>
			</div>
		</>
	);
}
