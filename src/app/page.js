import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<h1> Welcome to Globomatics Main Home Page</h1>
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
