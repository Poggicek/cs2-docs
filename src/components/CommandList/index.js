import React from "react";
import COMMANDS from "./commands.json"

const sortedList = COMMANDS.sort((a, b) =>
    a.name.localeCompare(b.name));

export default function CommandList() {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Flags</th>
					</tr>
				</thead>
				<tbody>
					{sortedList.map((r, index) => (
						<tr key={index}>
							<td>{r.name}</td>
							<td>{r.description}</td>
							<td>{r.flags}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}