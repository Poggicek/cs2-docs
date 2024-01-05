import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

const DateRender = React.memo(({unix}) => {
	const [hover, setHover] = React.useState(false);

	return (
		<>
		<span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			{hover ? dayjs.unix(unix).format("MMMM D, YYYY hh:mm") : dayjs.unix(unix).fromNow()}
		</span>
		</>
	);
});

export default DateRender;