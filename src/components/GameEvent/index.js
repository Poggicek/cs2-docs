import React from "react";
import styles from "./styles.module.css";

export default function GameEvent({title, structure}) {
	return (
		<table>
			<tbody>
				{Object.entries(structure).map(([key, value], index) => (
					<tr className={styles.member} key={index}>
						<td className={styles.type}>{value}</td>
						<td className={styles.name}>{key}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}