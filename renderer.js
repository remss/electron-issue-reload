// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const fs = require('fs');

async function asyncStuff() {
    let output = await fs.promises.readFile("datafile");
    console.log("byteLength", output.byteLength)
}

function syncStuff() {
    let output = fs.readFileSync("datafile");
    console.log("byteLength", output.byteLength)
}

document.getElementById("reloadMeWithSyncStuff").addEventListener("click", async function () {
    console.log("reloadMeWithSyncStuff!!!")
    syncStuff()
    window.location.reload()
})

document.getElementById("reloadMeWithAsyncStuff").addEventListener("click", async function () {
    console.log("reloadMeWithAsyncStuff!!!")
    asyncStuff()
    window.location.reload()                             // renderer will crash
    // window.location.href = "index.html?p=" + Date.now() // renderer will crash
})

console.log('renderer ready')
