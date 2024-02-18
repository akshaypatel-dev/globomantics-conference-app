import Link from "next/link";
import Image from "next/image";
import settings from "../images/settings.png";

import styles from "../page.module.css";
export default function Page() {
	return (
		<>
			<div>
				<h1 className={styles.header}>Welcome to Globomatics Settings Page</h1>
				<div className={styles.conferenceContainer}>
					<p>
						{" "}
						Settings Feature that allows you to customize your virtual meeting
						experience. With the settings feature, you can adjust audio and
						video settings, choose different layouts for how participants are
						displayed on the screen, set up polling or Q&A sessions, and even
						customize your background with virtual backgrounds. This feature
						adds flexibility and personalization to your web conference, making
						it easier to create a professional and engaging virtual environment
						for your meetings.
					</p>
					<Image height={500} width={700} src={settings} sizes={"50vw"}></Image>
				</div>
			</div>
		</>
	);
}
