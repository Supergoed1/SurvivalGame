var power = 1;
var zombiekills = 0;
var notis = 0;

function addNotification(message) {
    var noti = document.getElementById("notifications");
    if(notis >= 8) {
        for (let index = 0; index < noti.children.length; index++) {
            const element = noti.children[index + 1];
            element.innerHTML = noti.children[index]
            
        }
        noti.children[0].innerHTML = message;
        notis -= 1;
    }
    var content = document.createElement('div');
    content.innerHTML = message;
    notis += 1;
}