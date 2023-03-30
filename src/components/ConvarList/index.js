import React from "react";
import CONVARS from "./CONVARS.json"

const sortedList = CONVARS.sort((a, b) =>
    a.name.localeCompare(b.name));

export default function ConvarList() {
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
							<td>{r.name} {r.default.toString()}</td>
							<td>{r.description}{r.min && <strong><br/>Min: {r.min}</strong>} {r.max && <strong><br/>Max: {r.max}</strong>}</td>
							<td>{r.flags}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}