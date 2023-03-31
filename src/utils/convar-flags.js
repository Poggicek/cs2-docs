export const BigLeftShift = (num, bits) => {
	return Number(BigInt(num)<<BigInt(bits))
}

export const BigAnd = (num1, num2) => {
	return Number(BigInt(num1)&BigInt(num2))
}

export const FlagOverrides = {
	[BigLeftShift(1, 32)]: "defensive",
}

export const GetFlagOverrides = (flags) => {
	let ret = [];
	for (const [key, value] of Object.entries(FlagOverrides)) {
		if (BigAnd(flags, key))
			ret.push(value);
	}
	return ret.join(' ');
}
