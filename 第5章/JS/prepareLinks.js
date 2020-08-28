// 當 JavaScript 代碼打包到了獨立的 Js 文件中時, 要把這個函數添加到 window 對象的 onload 事件上


window.onload = prepareLinks;
function prepareLinks() {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function popUP(winURL){
    window.open(winURL, "popup","width=320, height=480");
}