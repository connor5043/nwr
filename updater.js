const nowTime = new Date().getTime();
const version = require("./package.json")["version"];
const fetch = require('node-fetch');
const compareVersion = require('compare-version');

let manuallyCheckText = '';

function updateChecker(method) {
    ipc.send("update-feedback", "no-update");
    store.set("last-check-time", nowTime);
}

if (store.get("autocheck") !== false && process.env.NODE_ENV !== "msstore") {
    if (store.get("last-check-time") === undefined || store.get("last-check-time") - nowTime > 86400000) {
        updateChecker(1);
    }// check for updates every day
}
