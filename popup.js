function setVideoSpeed(video, speed) {
    var speedValue = speed.toFixed(2);
    video.playbackRate = Number(speedValue);
    chrome.storage.sync.set({speed: speedValue});

    var currentSpeed = document.querySelector("#currentSpeed");
    currentSpeed.innerText = 'Playback speed is ' + speedValue.toFixed(2);
    currentSpeed.setAttribute('value', speedValue);
}

// function updateDisplaySpeed() {
//     var currentSpeed = document.querySelector("#currentSpeed");
//     chrome.storage.sync.get('speed', function(data) {
//         currentSpeed.innerText = 'Playback speed is ' + speed.toFixed(2);
//         currentSpeed.setAttribute('value', data.speed);
//     });
// }

document.querySelector("#speedUp").addEventListener("click", function() {
    var speed = chrome.storage.sync.get(speed) + 0.1;
    // console.log(speed);
    var video = document.querySelector("video");
    setVideoSpeed(video, speed);
    // updateDisplaySpeed();
});

document.querySelector("#slowDown").addEventListener("click", function() {
    var speed = chrome.storage.sync.get(speed);
    if (speed > 0) {
        speed -= 0.1;
    }
    var video = document.querySelector("video");
    setVideoSpeed(video, speed);
    // updateDisplaySpeed();
});

// add to video speed
// speedUp.onclick = function(element) {
//     var speed = chrome.storage.sync.get(speed);
//     console.log(speed);
//     chrome.storage.sync.set({speed: speed});
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.querySelector("video").playbackRate = ' + speed + ';'});
//     });
// }