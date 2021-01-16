// const express = require('express')
// const app = express()

const nodeactyl_v1 = require('nodeactyl-v1-support')
const node = nodeactyl_v1.Client

node.login('https://gp.falixnodes.net', 'sS1U3TcEwnt2IbG3h0VQknqVSMqIWQZ29rIGtI09cVGab0tR', (logged_in, msg) => {
    console.log('Log in status:', logged_in)
    loadServer()
})

function loadServer() {
    console.log("------------")
    var servers = 
    [
        { name: "CHWEPPEN - Webserver (2)", id: "6107030d" },
        { name: "CHWEPPEN - Webserver (1)", id: "734744bb" },
        { name: "McProject", id: "5a13c1b9" },
        { name: "Minecraft OneBlock", id: "88756bf5" }
    ]

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

// app.listen(process.env.PORT || 3030, function() {
    // console.log("Server running")
// })
