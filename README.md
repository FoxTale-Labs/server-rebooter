[![GitHub](https://img.shields.io/github/license/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/pulls)
# server-rebooter
How to use?
----------------------------------------------------------------------------------------------------
Step 1:
Login to your Pterodactyl panel inside the code where it says:
```javascript
node.login('https://YOURPANELHOST.example', 'YOUR API CREDENTIALS', (logged_in, msg) => {
    console.log('Log in status:', logged_in)
    loadServer()
})
```

Step 2:
Add to the dictionary called servers an element like that:
```javascript
var servers =
[
	{ name: "YOUR SERVERNAME", id: "YOUR SERVER ID ON PANEL" }
]
```
do that for all your wich should be rebooted if they crash or so.

and now you are ready to go!
---------------------------------------------------------------------------------------------------
