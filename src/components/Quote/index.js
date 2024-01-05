import React from "react";
import styles from "./styles.module.css";

export default function Quote({children}) {
	return (
		<>
			<div className={styles.quote}>{children}</div>
		</>
	);
}