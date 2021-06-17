## Chrome Manifest v3 API problems
 - `groupId` is always set to zero in getRecentlyClosed session/tabs
 - `favIconUrl` is missing from getRecentlyClosed session/tab
 - `favIconUrl` cannot be obtained for history entries at all (it's missing from the API)
 - `chrome://` cannot be enabled

## Annoyances
 - `chrome.history.search` does not return a `Promise`, as promised

## How to run
 - "Load Unpacked Extension" from Chrome 89+
 - Open extension options or popup
 - More details (full objects) are logged to console

## Tested on:

 - Chrome Version 91.0.4472.106 (Official Build) (64-bit)
 - Chrome Version 92.0.4515.59 (Official Build) beta (64-bit)
