export const BigLeftShift = (num, bits) => {
	return Number(BigInt(num)<<BigInt(bits))
}

export const BigAnd = (num1, num2) => {
	return Number(BigInt(num1)&BigInt(num2))
}

export const FlagOverrides = {
	//[BigLeftShift(1, 32)]: "defensive",
}

export const GetFlagOverrides = (flags) => {
	let ret = [];
	for (const [key, value] of Object.entries(FlagOverrides)) {
		if (BigAnd(flags, key))
			ret.push(value);
	}
	return ret.join(' ');
}

export const FLAGS = {
	"notconnected": "Not connected",
	"linked_concommand": "Linked concommand",
	"developmentonly": "Development only",
	"gamedll": "Game DLL",
	"clientdll": "Client DLL",
	"hidden": "Hidden",
	"protected": "Protected",
	"sponly": "Singleplayer only",
	"archive": "Archive",
	"notify": "Notify",
	"userinfo": "User info",
	"hide": "Hide",
	"unlogged": "Unlogged",
	"missing1": "Missing 1",
	"missing2": "Missing 2",
	"missing3": "Missing 3",
	"missing4": "Missing 4",
	"replicated": "Replicated",
	"cheat": "Cheat",
	"per_user": "Per user",
	"demo": "Demo",
	"dontrecord": "Don't record",
	"release": "Release",
	"menubar_item": "Menubar item",
	"not_connected": "Not connected",
	"vconsole_fuzzy_matching": "VConsole fuzzy matching",
	"server_can_execute": "Server can execute",
	"client_can_execute": "Client can execute",
	"server_cannot_query": "Server cannot query",
	"vconsole_set_focus": "VConsole set focus",
	"clientcmd_can_execute": "Clientcmd can execute",
	"execute_per_tick": "Execute per tick",
	"missing5": "Missing 5",
	"missing6": "Missing 6",
	"defensive": "Defensive",
}
