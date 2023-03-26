import React from "react";
import styles from "./styles.module.css";

export default function GameEvent({structure, comment}) {
	return (
		<>
			{comment && <div className={styles.gameEventComment}><b>Note:</b> {comment.charAt(0).toUpperCase() + comment.slice(1)}</div>}
			<table>
				<tbody>
					{Object.entries(structure).map(([key, value], index) => (
						<tr className={styles.member} key={index}>
							<td className={styles.type}>{value.value}</td>
							<td className={styles.name}>{key}</td>
							{value.comment ? <td className={styles.comment}>{value.comment}</td> : <td className={styles.comment}></td>}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}