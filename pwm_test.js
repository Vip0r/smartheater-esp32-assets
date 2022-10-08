function onload () {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/pwm_test/get", true);
    req.send(null);

    req.onload  = function() {
    jsonResponse = JSON.parse(req.responseText);

    if(jsonResponse.status == true){
        document.getElementById("status").value = "aktiviert"  
        document.getElementById("enable_testmode").disabled = 1
        document.getElementById("disable_testmode").disabled = 0
        document.getElementById("update_values").disabled = 0
        
        document.getElementById("analog_out1_duty").disabled = 0
        document.getElementById("analog_out1_freq").disabled = 0
        document.getElementById("analog_out2_duty").disabled = 0
        document.getElementById("analog_out2_freq").disabled = 0
        
       }
       
    if(jsonResponse.status == false){
    document.getElementById("status").value = "deaktiviert"  
    document.getElementById("disable_testmode").disabled = 1
    document.getElementById("update_values").disabled = 1

    document.getElementById("analog_out1_duty").disabled = 1
    document.getElementById("analog_out1_freq").disabled = 1
    document.getElementById("analog_out2_duty").disabled = 1
    document.getElementById("analog_out2_freq").disabled = 1
    }
       
    document.getElementById("analog_out1_duty").value = jsonResponse.analogout1_duty
    document.getElementById("analog_out1_freq").value = jsonResponse.analogout1_freq
    document.getElementById("analog_out2_duty").value = jsonResponse.analogout2_duty
    document.getElementById("analog_out2_freq").value = jsonResponse.analogout2_freq

    }
}

function enable_testmode () {

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/pwm_test/enable", true);
    req.send(null);
    req.onload  = function() {
        window.location.assign("/pwm_test/show");
        };
}

function disable_testmode () {

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/pwm_test/disable", true);
    req.send(null);
    req.onload  = function() {
        window.location.assign("/pwm_test/show");
        };

}

function set_parameter () {

    //input validation

    if(document.getElementById("analog_out1_duty").value < 0 
    || document.getElementById("analog_out1_duty").value > 1024 
    || !Number.isInteger(parseInt(document.getElementById("analog_out1_duty").value))
    || document.getElementById("analog_out1_freq").value < 0 
    || document.getElementById("analog_out1_freq").value > 100000 
    || !Number.isInteger(parseInt(document.getElementById("analog_out1_freq").value))
    || document.getElementById("analog_out2_duty").value < 0 
    || document.getElementById("analog_out2_duty").value > 1024 
    || !Number.isInteger(parseInt(document.getElementById("analog_out2_duty").value))
    || document.getElementById("analog_out2_freq").value < 0 
    || document.getElementById("analog_out2_freq").value > 100000 
    || !Number.isInteger(parseInt(document.getElementById("analog_out2_freq").value))
    )
    {
        alert("Werte prüfen (Duty 0-1024; Freq 0-100000")
    }else{
        var req = new XMLHttpRequest();
        req.overrideMimeType("application/json");

        var data = new Object();
        data.pwm_out1_duty = document.getElementById("analog_out1_duty").value
        data.pwm_out1_freq = document.getElementById("analog_out1_freq").value
        data.pwm_out2_duty = document.getElementById("analog_out2_duty").value
        data.pwm_out2_freq = document.getElementById("analog_out2_freq").value
        var jsonData= JSON.stringify(data);
        //base64 encode the object for transfer
        var encodedData = btoa(jsonData);
        //url encode da
        var urlencodedData = encodeURIComponent(encodedData)

        url = "/pwm_test/update/data="+urlencodedData
        req.open('GET', url, true);
        req.send(null);
        req.onload  = function() {
            window.location.assign("/pwm_test/show");
            };
    }


}
