[![GitHub](https://img.shields.io/github/license/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/pulls)
# server-rebooter
How to use?
----------------------------------------------------------------------------------------------------
To login to your Pterodactyl panel use:
```javascript
node.login('HOST', "APIKEY", (logged_in, msg) => {
	console.log('Log in status: ' + logged_in); // return a Boolean (true/false) if logged in.
})

```
And then you can use any funtion you want:
```javascript
node.FUNCTIONNAME('server_id').then((response) => {
	// and now functions with response for example "consle.log(response)" or what you want
})
```

NOTE: You can use every function from original nodeactyl: https://docs.nodeactyl.xyz/
---------------------------------------------------------------------------------------------------
