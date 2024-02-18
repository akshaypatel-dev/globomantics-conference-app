import styles from "../conference.module.css";
import Link from "next/link";
export default function Page() {
	return (
		<>
			<h1 className={styles.header}>
				Welcome to Globomatics Conference Speakers Page
			</h1>

			<Link href="/conference">
				<button className={styles.btn}> Go Back To Conference</button>
			</Link>
		</>
	);
}
