[![GitHub](https://img.shields.io/github/license/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/EiskalterFreund/nodeactyl-v1-support)](https://github.com/EiskalterFreund/server-rebooter/pulls)
# server-rebooter

What is server-rebooter?
----------------------------------------------------------------------------------------------------
It's a peace of code wich reboots your Pterodactyl servers every 5 seconds if they are offline or
crashed!

----------------------------------------------------------------------------------------------------

How to use?
----------------------------------------------------------------------------------------------------
STEP 1:
Login to your panel with host and api credentials:
```javascript
node.login('https://YOURHOST.example', 'YOUR API CREDENTIALS', (logged_in, msg) => {
    console.log('Log in status:', logged_in)
    loadServer()
})
```

STEP 2:
Add all your server to the dictionary called servers:
```javascript
var servers =
[
  { name: "NAME OF SERVER", id: "ID OF SERVER" },
]
```

And that was all of the Steps!
