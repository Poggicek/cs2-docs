import React from "react";
import styles from "./styles.module.css";

export const CheckboxState = {
	Include: 0,
	Exclude: 1,
	Unset: 2
}

export default function StatefulCheckbox({onChange, className, ...props}) {
	const [state, setState] = React.useState(CheckboxState.Unset);

	const onChangeEvent = (e) => {
			let newState = state + 1;
			if (newState > CheckboxState.Unset) {
				newState = CheckboxState.Include;
			}

			setState(newState);
			onChange(e, newState);
			return newState;
	}

	return (
		<label className={styles.container + " " + className}>
			<input type="checkbox" {...props} onChange={onChangeEvent} checked={state < CheckboxState.Unset} exclude={(state == CheckboxState.Exclude).toString()} />
			<span className={styles.checkmark}></span>
		</label>
	);
}