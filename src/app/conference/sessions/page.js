import styles from "../conference.module.css";
import Link from "next/link";
export default function Page() {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.session}>Welcome to Globomatics Sessions Page</h1>
			</header>
			<Link href="/conference">
				<button className={styles.btn}> Go Back To Conference </button>{" "}
			</Link>
		</>
	);
}
