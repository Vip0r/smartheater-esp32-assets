function onload () {
    var req = new XMLHttpRequest();
    req.open('GET', "/log/get", true);
    req.send(null);

    req.onload  = function() {
    document.getElementById("logfile").innerText = req.responseText
}
}


function updateLog() {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("logfile").innerText = this.responseText
        }
      };

    req.open('GET', "/log/get", true);
    req.send(null);
    

}



