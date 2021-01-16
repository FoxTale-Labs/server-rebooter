const nodeactyl_v1 = require('nodeactyl-v1-support')
const node = nodeactyl_v1.Client

node.login('https://YOURHOST.example', 'YOUR API CREDENTIALS', (logged_in, msg) => {
    console.log('Log in status:', logged_in)
    loadServer()
})

var servers = 
[
    { name: "YOUR SERVER NAME", id: "YOUR SERVER ID" },
]

function loadServer() {
    console.log("------------")
	
    for (var i = 0; i < servers.length; i++) {
        checkServer(servers[i])
    }
    setTimeout(loadServer, 5000)
}

function checkServer(server) {
    node.getServerStatus(server.id).then((response) => {
        if (response != null) {
            if (response == "running") {
                console.log("Server " + server.name + " is running")
            } else if (response == "starting") {
                console.log("Server " + server.name + " is starting")
            } else if (response == "offline") {
                console.log("Server " + server.name + " is offline, rebooting")
                rebootServer(server)
            } else if (response == "stopping") {
                console.log("Server " + server.name + " is stopping")
            }
        } else {
            console.log("Some error occurred.")
        }
    }).catch((error) => {
        console.log("Server " + server.name + " isn't loading (node down?)")
    })
}

function rebootServer(server) {
    node.startServer(server.id).then((response) =>  {
        console.log(response)
    }).catch((error) => {
        console.log("Server " + server.name + " isn't loading (node down?)")
    })
}
