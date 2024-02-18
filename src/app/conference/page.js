import Link from "next/link";
import styles from "./conference.module.css";
export default function Page() {
	return (
		<>
			<h1 className={styles.header}> Welcome to Globomatics Conference Page</h1>

			<div className={styles.conference}>
				<Link href="/conference/sessions">
					<button>Sessions</button>
				</Link>
				<Link href="/conference/speakers">
					<button>Speakers</button>
				</Link>
			</div>
		</>
	);
}
