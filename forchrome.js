var isChrome = !!window.chrome && !!window.chrome.webstore;
if (isChrome) {
var $ = document;
var cssId = 'myCss';
var head = $.getElementsByTagName('head')[0];
var link = $.createElement('link');
link.id = cssId;
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'CSS/forchrome.css'; 
link.media = 'all';
head.appendChild(link);
}