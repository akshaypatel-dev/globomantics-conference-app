import Link from "next/link";
import styles from "../page.module.css";
export default function Page() {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.settings}>
					Welcome to Globomatics Settings Page{" "}
				</h1>
				<p>This is a settings page for the Globomatics application.</p>
			</header>
			<Link href="/home">
				<button className={styles.btn}> Go To Home</button>
			</Link>
		</>
	);
}
