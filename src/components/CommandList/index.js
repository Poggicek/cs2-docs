import React, { useState, useCallback } from "react";
import clsx from "clsx";
import COMMANDS from "./commands.json"
import { GetFlagOverrides } from "./../../utils/convar-flags"
import styles from "./styles.module.css";
import debounce from 'lodash.debounce';
import { FLAGS } from "./../../utils/convar-flags"

const sortedList = COMMANDS.sort((a, b) =>
    a.name.localeCompare(b.name));

function Filters({filter, setFilter})
{
	const changeHandler = (e) => {
		setFilter((filter) => ({...filter, search: e.target.value}));
	}

	const onDebouncedChange = useCallback(
    debounce(changeHandler, 300)
  , []);

	const onFilterChecked = (e) => {
		setFilter((filter) => ({
			...filter,
			flags: e.target.checked ? [...filter.flags, e.target.id] : filter.flags.filter(f => f !== e.target.id)
		}));
	}

	return (
		<div className={styles.wrapper}>
			<input onChange={onDebouncedChange} className={clsx("navbar__search-input", styles.input)} placeholder="Search" />

			<div className={clsx("dropdown dropdown--hoverable", styles.extraFilters)}>
				<button className="button button--secondary">Filters</button>
				<ul className={clsx("dropdown__menu", styles.dropdown)}>
					{Object.entries(FLAGS).map(([name, displayName], index) => (
						<li className={styles.checkboxGroup}>
							<label className={styles.label} for={name}>{displayName}</label>
							<input onChange={onFilterChecked} className={styles.checkbox} id={name} type="checkbox" checked={filter.flags.includes(name)}/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default function CommandList() {
	const [filter, setFilter] = useState({search: "", flags: []});

	return (
		<>
			<Filters filter={filter} setFilter={setFilter}/>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Flags</th>
					</tr>
				</thead>
				<tbody>
					{sortedList.filter(r => r.name.includes(filter.search) && (r.flags.split(' ').filter(f => filter.flags.includes(f)).length > 0 || filter.flags.length === 0)).map((r, index) => (
						<tr key={index}>
							<td>{r.name}</td>
							<td>{r.description}</td>
							<td>{r.flags} {GetFlagOverrides(r.flagsRaw)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}