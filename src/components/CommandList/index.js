import React, { useState, useCallback } from "react";
import clsx from "clsx";
import COMMANDS from "./commands.json"
import { GetFlagOverrides } from "./../../utils/convar-flags"
import styles from "./styles.module.css";
import debounce from 'lodash.debounce';
import { FLAGS } from "./../../utils/convar-flags"
import StatefulCheckbox, { CheckboxState } from "./../StatefulCheckbox"

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

	const onFilterChecked = (e, state) => {
		setFilter((filter) => {
			let flags = {...filter.flags};
			flags[e.target.id] = state;
			return {...filter, flags: flags}
		});
	}

	return (
		<div className={styles.wrapper}>
			<input onChange={onDebouncedChange} className={clsx("navbar__search-input", styles.input)} placeholder="Search" />

			<div className={clsx("dropdown dropdown--hoverable", styles.extraFilters)}>
				<button className="button button--secondary">Filters</button>
				<ul className={clsx("dropdown__menu", styles.dropdown)}>
					{Object.entries(FLAGS).map(([name, displayName], index) => (
						<li key={name} className={styles.checkboxGroup}>
							<label className={styles.label} htmlFor={name}>{displayName}</label>
							<StatefulCheckbox id={name} className={styles.checkbox} onChange={onFilterChecked} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default function CommandList() {
	const [filter, setFilter] = useState({search: "", flags: {}});

	const checkFilter = (item) => {
		if(!item.name.toLowerCase().includes(filter.search.toLowerCase()))
			return false;

		if(Object.entries(filter.flags).some(([name, state]) => {
			if(state == CheckboxState.Include && !item.flags.includes(name))
				return true;
			else if(state == CheckboxState.Exclude && item.flags.includes(name))
				return true;
			return false;
		}))
		{
			return false;
		}

		return true;
	}

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
				{sortedList.filter(checkFilter).map((r, index) => (
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