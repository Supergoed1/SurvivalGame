var power = 1;
var zombiekills = 0;
var notis = 0;

function addNotification(message) {
    var noti = document.getElementById("notifications");
    if(notis >= 8) {
        noti.children[7].remove();
        notis -= 1;
    }
    var content = document.createElement('div');
    content.innerHTML = message;
    noti.appendChild(content);
    notis += 1;
}