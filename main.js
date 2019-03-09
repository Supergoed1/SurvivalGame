var power = 1;
var zombiekills = 0;

function addNotification(message) {
    var noti = document.getElementById("notifications");
    var content = document.createElement('div');
    content.innerHTML = message;
    noti.appendChild(content);
}