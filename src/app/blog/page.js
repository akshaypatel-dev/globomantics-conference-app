import styles from "../page.module.css";
import Image from "next/image";
import blog from "../images/blog.png";
export default function Page() {
	return (
		<>
			<h1 className={styles.header}> Welcome to Globomatics Blog Page</h1>
			<div className={styles.conferenceContainer}>
				<p>
					Globomatics is an essential tool for modern businesses and remote
					teams. It allows users to connect seamlessly from different locations,
					enabling efficient communication and collaboration. The conference
					call web app provides features such as video conferencing, screen
					sharing, chat options, and recording capabilities, making it easy for
					teams to stay connected and work together effectively. With its
					user-friendly interface and reliability, the conference call web app
					simplifies the process of conducting meetings and ensures that
					everyone can participate and contribute regardless of their physical
					location. Embrace the power of technology and streamline your team's
					communication with the conference call web app.{" "}
				</p>
				<Image src={blog} sizes={"50vw"}></Image>
			</div>
		</>
	);
}
