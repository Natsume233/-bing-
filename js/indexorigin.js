/**
 * Created by Administrator on 2017/1/18 0018.
 */
function getDOM(id) {
    return document.getElementById(id);
}

/*addEvent相比onclick事件优势：给一个元素绑定多个事件
* 给一个元素绑定多次绑定onclick事件，后面的恢复该前面的*/
function addEvent(id,event,fn) {
    var el = getDOM(id) || document;
    if(el.addEventListener){
        el.addEventListener(event,fn,false);
    }else if(el.attachEvent){
        el.attachEvent('on'+event,fn);
    }
}

/*事件代理*/
function delegateEvent(target,event,fn) {
    addEvent(document,event,function (e) {
        if(e.target.nodeName == target.toUpperCase()){
            fn.call(e.target);
        }
    })
}

/*距离浏览器左边的距离*/
function getElementLeft(el) {
    var left = el.offsetLeft;//距离父容器左边的距离
    var current = el.offsetParent;
    while(current !== null){
        left+=current.offsetLeft;
        current = current.offsetParent;
    }
    return left;
}

/*距离浏览器右边的距离*/
function getElementTop(el) {
    var top = el.offsetTop;
    var current = el.offsetParent;
    while(current !== null){
        top+=current.offsetTop;
        current = current.offsetParent;
    }
    return top;
}

/*ajax 无法解决跨域问题*/
function getAjax(url,callback) {
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('get',url,true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send(null);
}


















