async function main() {
	const timestamp = Date.now();
	let text = "<pre>History:\n"
	const results = await new Promise(resolve => chrome.history.search({
		text:       "", 
		startTime:  timestamp - 1000 * 3600 * 24 * 30, 
		endTime:    timestamp,
		maxResults: 5
	}, resolve));
	for (const result of results) {
		console.log(result)
		text += JSON.stringify(result, null, "\t") + "\n"
	}
	text += "Recently closed:\n"
	const sessions = await new Promise(resolve => chrome.sessions.getRecentlyClosed({ }, resolve))
	for (const session of sessions) {
		console.log(session)
		if (session.tab) {
			const object = {groupId : session.tab.groupId, favIconUrl : session.tab.favIconUrl};
			text += (JSON.stringify(object, null, "\t")) + "\n"
		}
	}
	text += "</pre>"
	document.body.innerHTML = text;
}

main()
