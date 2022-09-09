
function updateConfig () {

    //check if anything changed
    if(document.getElementById("wifi_mode").value !== window.current_config.wifi_mode 
    || document.getElementById("wifi_ssid").value !== window.current_config.wifi_ssid 
    || document.getElementById("wifi_key").value !== window.current_config.wifi_key
    || document.getElementById("smartmeter_type").value !== window.current_config.smartmeter_type
    || document.getElementById("smartmeter_host").value !== window.current_config.smartmeter_host 
    || document.getElementById("puffer").value !== window.current_config.puffer 
    || document.getElementById("pumpe").value !== window.current_config.pumpe
    || document.getElementById("debuglevel").value !== window.current_config.debuglevel
    || document.getElementById("heizstab.id1.prio").value !== window.current_config.heizstab.id1.prio
    || document.getElementById("heizstab.id1.name_kurz").value !== window.current_config.heizstab.id1.name_kurz
    || document.getElementById("heizstab.id1.name").value !== window.current_config.heizstab.id1.name
    || document.getElementById("heizstab.id1.typ").value !== window.current_config.heizstab.id1.typ
    || document.getElementById("heizstab.id1.betriebsmodus").value !== window.current_config.heizstab.id1.betriebsmodus
    || document.getElementById("heizstab.id1.max_leistung").value !== window.current_config.heizstab.id1.max_leistung
    || document.getElementById("heizstab.id1.soll_temp").value !== window.current_config.heizstab.id1.soll_temp
    || document.getElementById("heizstab.id1.hysterese").value !== window.current_config.heizstab.id1.hysterese
    || document.getElementById("heizstab.id1.pwm.100").value !== window.current_config.heizstab.id1.pwm["100"]
    || document.getElementById("heizstab.id1.pwm.95").value !== window.current_config.heizstab.id1.pwm["95"]
    || document.getElementById("heizstab.id1.pwm.90").value !== window.current_config.heizstab.id1.pwm["90"]
    || document.getElementById("heizstab.id1.pwm.85").value !== window.current_config.heizstab.id1.pwm["85"]
    || document.getElementById("heizstab.id1.pwm.80").value !== window.current_config.heizstab.id1.pwm["80"]
    || document.getElementById("heizstab.id1.pwm.75").value !== window.current_config.heizstab.id1.pwm["75"]
    || document.getElementById("heizstab.id1.pwm.70").value !== window.current_config.heizstab.id1.pwm["70"]
    || document.getElementById("heizstab.id1.pwm.65").value !== window.current_config.heizstab.id1.pwm["65"]
    || document.getElementById("heizstab.id1.pwm.60").value !== window.current_config.heizstab.id1.pwm["60"]
    || document.getElementById("heizstab.id1.pwm.55").value !== window.current_config.heizstab.id1.pwm["55"]
    || document.getElementById("heizstab.id1.pwm.50").value !== window.current_config.heizstab.id1.pwm["50"]
    || document.getElementById("heizstab.id1.pwm.45").value !== window.current_config.heizstab.id1.pwm["45"]
    || document.getElementById("heizstab.id1.pwm.40").value !== window.current_config.heizstab.id1.pwm["40"]
    || document.getElementById("heizstab.id1.pwm.35").value !== window.current_config.heizstab.id1.pwm["35"]
    || document.getElementById("heizstab.id1.pwm.30").value !== window.current_config.heizstab.id1.pwm["30"]
    || document.getElementById("heizstab.id1.pwm.25").value !== window.current_config.heizstab.id1.pwm["25"]
    || document.getElementById("heizstab.id1.pwm.20").value !== window.current_config.heizstab.id1.pwm["20"]
    || document.getElementById("heizstab.id1.pwm.15").value !== window.current_config.heizstab.id1.pwm["15"]
    || document.getElementById("heizstab.id1.pwm.10").value !== window.current_config.heizstab.id1.pwm["10"]
    || document.getElementById("heizstab.id1.pwm.5").value !== window.current_config.heizstab.id1.pwm["5"]
    || document.getElementById("heizstab.id1.pwm.0").value !== window.current_config.heizstab.id1.pwm["0"]
    || document.getElementById("heizstab.id2.prio").value !== window.current_config.heizstab.id2.prio
    || document.getElementById("heizstab.id2.name_kurz").value !== window.current_config.heizstab.id2.name_kurz
    || document.getElementById("heizstab.id2.name").value !== window.current_config.heizstab.id2.name
    || document.getElementById("heizstab.id2.typ").value !== window.current_config.heizstab.id2.typ
    || document.getElementById("heizstab.id2.betriebsmodus").value !== window.current_config.heizstab.id2.betriebsmodus
    || document.getElementById("heizstab.id2.max_leistung").value !== window.current_config.heizstab.id2.max_leistung
    || document.getElementById("heizstab.id2.soll_temp").value !== window.current_config.heizstab.id2.soll_temp
    || document.getElementById("heizstab.id2.hysterese").value !== window.current_config.heizstab.id2.hysterese
    || document.getElementById("heizstab.id2.pwm.100").value !== window.current_config.heizstab.id2.pwm["100"]
    || document.getElementById("heizstab.id2.pwm.95").value !== window.current_config.heizstab.id2.pwm["95"]
    || document.getElementById("heizstab.id2.pwm.90").value !== window.current_config.heizstab.id2.pwm["90"]
    || document.getElementById("heizstab.id2.pwm.85").value !== window.current_config.heizstab.id2.pwm["85"]
    || document.getElementById("heizstab.id2.pwm.80").value !== window.current_config.heizstab.id2.pwm["80"]
    || document.getElementById("heizstab.id2.pwm.75").value !== window.current_config.heizstab.id2.pwm["75"]
    || document.getElementById("heizstab.id2.pwm.70").value !== window.current_config.heizstab.id2.pwm["70"]
    || document.getElementById("heizstab.id2.pwm.65").value !== window.current_config.heizstab.id2.pwm["65"]
    || document.getElementById("heizstab.id2.pwm.60").value !== window.current_config.heizstab.id2.pwm["60"]
    || document.getElementById("heizstab.id2.pwm.55").value !== window.current_config.heizstab.id2.pwm["55"]
    || document.getElementById("heizstab.id2.pwm.50").value !== window.current_config.heizstab.id2.pwm["50"]
    || document.getElementById("heizstab.id2.pwm.45").value !== window.current_config.heizstab.id2.pwm["45"]
    || document.getElementById("heizstab.id2.pwm.40").value !== window.current_config.heizstab.id2.pwm["40"]
    || document.getElementById("heizstab.id2.pwm.35").value !== window.current_config.heizstab.id2.pwm["35"]
    || document.getElementById("heizstab.id2.pwm.30").value !== window.current_config.heizstab.id2.pwm["30"]
    || document.getElementById("heizstab.id2.pwm.25").value !== window.current_config.heizstab.id2.pwm["25"]
    || document.getElementById("heizstab.id2.pwm.20").value !== window.current_config.heizstab.id2.pwm["20"]
    || document.getElementById("heizstab.id2.pwm.15").value !== window.current_config.heizstab.id2.pwm["15"]
    || document.getElementById("heizstab.id2.pwm.10").value !== window.current_config.heizstab.id2.pwm["10"]
    || document.getElementById("heizstab.id2.pwm.5").value !== window.current_config.heizstab.id2.pwm["5"]
    || document.getElementById("heizstab.id2.pwm.0").value !== window.current_config.heizstab.id2.pwm["0"]
    || document.getElementById("heizstab.id3.prio").value !== window.current_config.heizstab.id3.prio
    || document.getElementById("heizstab.id3.name_kurz").value !== window.current_config.heizstab.id3.name_kurz
    || document.getElementById("heizstab.id3.name").value !== window.current_config.heizstab.id3.name
    || document.getElementById("heizstab.id3.typ").value !== window.current_config.heizstab.id3.typ
    || document.getElementById("heizstab.id3.betriebsmodus").value !== window.current_config.heizstab.id3.betriebsmodus
    || document.getElementById("heizstab.id3.max_leistung").value !== window.current_config.heizstab.id3.max_leistung
    || document.getElementById("heizstab.id3.shelly_ip").value !== window.current_config.heizstab.id3.shelly_ip
    || document.getElementById("heizstab.id3.shelly_user").value !== window.current_config.heizstab.id3.shelly_user
    || document.getElementById("heizstab.id3.shelly_pass").value !== window.current_config.heizstab.id3.shelly_pass

    ){
        //input validation
        err=false
        if(document.getElementById("wifi_mode").value !== "STA"
        && document.getElementById("wifi_mode").value !== "AP"){
            alert("WiFi Mode kann nur STA oder AP sein")
            err=true
        }

        if(!document.getElementById("wifi_ssid").value.match("[ -~]"))
        {
            alert("WiFi SSID nicht valide")
            err=true 
        }

        if(!document.getElementById("wifi_key").value.match("[ -~]"))
        {
            alert("WiFI Key nicht valide")
            err=true 
        }

        if(document.getElementById("smartmeter_type").value !== "VARTA"
        && document.getElementById("smartmeter_type").value !== "TASMOTA"){
            alert("Aktuell werden nur die Smartmeter VARTA und TASMOTA unterstuetzt")
            err=true
        }

        if(!document.getElementById("smartmeter_host").value.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
        && !document.getElementById("smartmeter_host").value.match("^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")
        ){
            alert("smartmeter Host muss eine IP oder ein Hostname sein")
            err=true 
        }

        if(!document.getElementById("heizstab.id3.shelly_ip").value.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
        && !document.getElementById("heizstab.id3.shelly_ip").value.match("^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")
        ){
            alert("Shelly IP muss eine IP oder ein Hostname sein")
            err=true 
        }

        if(document.getElementById("heizstab.id1.max_leistung").value < 0 
        || document.getElementById("heizstab.id1.max_leistung").value > 10000 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.max_leistung").value)))
        {
            alert("Max. Leistung des Heizstabs 1 muss zwischen 0 und 10000W liegen")
            err=true 
        }

        if(document.getElementById("puffer").value < 0 
        || document.getElementById("puffer").value > 1000
        || !Number.isInteger(parseInt(document.getElementById("puffer").value)))
        {
            alert("Der Puffer für die Überschusskalkulation muss zwischen 0 und 1000 liegen")
            err=true 
        }

        if(document.getElementById("heizstab.id1.soll_temp").value < 0 
        || document.getElementById("heizstab.id1.soll_temp").value > 100 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.soll_temp").value)))
        {
            alert("Solltemperatur des Heizstabs 1 muss zwischen 0 und 100 liegen")
            err=true 
        }

        if(document.getElementById("heizstab.id1.hysterese").value < 0 
        || document.getElementById("heizstab.id1.hysterese").value > 30 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.hysterese").value)))
        {
            alert("Hysterese des Heizstabs 1 muss zwischen 0 und 30 liegen")
            err=true 
        }

        if(document.getElementById("heizstab.id1.pwm.100").value < 0 
        || document.getElementById("heizstab.id1.pwm.100").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.100").value))
        || document.getElementById("heizstab.id1.pwm.95").value < 0 
        || document.getElementById("heizstab.id1.pwm.95").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.95").value))
        || document.getElementById("heizstab.id1.pwm.90").value < 0 
        || document.getElementById("heizstab.id1.pwm.90").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.90").value))
        || document.getElementById("heizstab.id1.pwm.85").value < 0 
        || document.getElementById("heizstab.id1.pwm.85").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.85").value))
        || document.getElementById("heizstab.id1.pwm.80").value < 0 
        || document.getElementById("heizstab.id1.pwm.80").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.80").value))
        || document.getElementById("heizstab.id1.pwm.75").value < 0 
        || document.getElementById("heizstab.id1.pwm.75").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.75").value))
        || document.getElementById("heizstab.id1.pwm.70").value < 0 
        || document.getElementById("heizstab.id1.pwm.70").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.70").value))
        || document.getElementById("heizstab.id1.pwm.65").value < 0 
        || document.getElementById("heizstab.id1.pwm.65").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.65").value))
        || document.getElementById("heizstab.id1.pwm.60").value < 0 
        || document.getElementById("heizstab.id1.pwm.60").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.60").value))
        || document.getElementById("heizstab.id1.pwm.55").value < 0 
        || document.getElementById("heizstab.id1.pwm.55").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.55").value))
        || document.getElementById("heizstab.id1.pwm.50").value < 0 
        || document.getElementById("heizstab.id1.pwm.50").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.50").value))
        || document.getElementById("heizstab.id1.pwm.45").value < 0 
        || document.getElementById("heizstab.id1.pwm.45").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.45").value))
        || document.getElementById("heizstab.id1.pwm.40").value < 0 
        || document.getElementById("heizstab.id1.pwm.40").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.40").value))
        || document.getElementById("heizstab.id1.pwm.35").value < 0 
        || document.getElementById("heizstab.id1.pwm.35").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.35").value))
        || document.getElementById("heizstab.id1.pwm.30").value < 0 
        || document.getElementById("heizstab.id1.pwm.30").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.30").value))
        || document.getElementById("heizstab.id1.pwm.25").value < 0 
        || document.getElementById("heizstab.id1.pwm.25").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.25").value))
        || document.getElementById("heizstab.id1.pwm.20").value < 0 
        || document.getElementById("heizstab.id1.pwm.20").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.20").value))
        || document.getElementById("heizstab.id1.pwm.15").value < 0 
        || document.getElementById("heizstab.id1.pwm.15").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.15").value))
        || document.getElementById("heizstab.id1.pwm.10").value < 0 
        || document.getElementById("heizstab.id1.pwm.10").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.10").value))
        || document.getElementById("heizstab.id1.pwm.5").value < 0 
        || document.getElementById("heizstab.id1.pwm.5").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.5").value))
        || document.getElementById("heizstab.id1.pwm.0").value < 0 
        || document.getElementById("heizstab.id1.pwm.0").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id1.pwm.0").value))
        )
        {
            alert("PWM Frequenzen des Heizstabs 1 muessen zwischen 0 und 1024 liegen")
            err=true 
        }
        

        if(document.getElementById("heizstab.id2.max_leistung").value < 0 
        || document.getElementById("heizstab.id2.max_leistung").value > 10000 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.max_leistung").value)))
        {
            alert("Max. Leistung des Heizstabs 2 muss zwischen 0 und 10000W liegen")
            err=true 
        }
        
        if(document.getElementById("heizstab.id2.soll_temp").value < 0 
        || document.getElementById("heizstab.id2.soll_temp").value > 100 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.soll_temp").value)))
        {
            alert("Solltemperatur des Heizstabs 2 muss zwischen 0 und 100 liegen")
            err=true 
        }
        
        if(document.getElementById("heizstab.id2.hysterese").value < 0 
        || document.getElementById("heizstab.id2.hysterese").value > 30 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.hysterese").value)))
        {
            alert("Hysterese des Heizstabs 2 muss zwischen 0 und 30 liegen")
            err=true 
        }
        
        if(document.getElementById("heizstab.id2.pwm.100").value < 0 
        || document.getElementById("heizstab.id2.pwm.100").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.100").value))
        || document.getElementById("heizstab.id2.pwm.95").value < 0 
        || document.getElementById("heizstab.id2.pwm.95").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.95").value))
        || document.getElementById("heizstab.id2.pwm.90").value < 0 
        || document.getElementById("heizstab.id2.pwm.90").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.90").value))
        || document.getElementById("heizstab.id2.pwm.85").value < 0 
        || document.getElementById("heizstab.id2.pwm.85").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.85").value))
        || document.getElementById("heizstab.id2.pwm.80").value < 0 
        || document.getElementById("heizstab.id2.pwm.80").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.80").value))
        || document.getElementById("heizstab.id2.pwm.75").value < 0 
        || document.getElementById("heizstab.id2.pwm.75").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.75").value))
        || document.getElementById("heizstab.id2.pwm.70").value < 0 
        || document.getElementById("heizstab.id2.pwm.70").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.70").value))
        || document.getElementById("heizstab.id2.pwm.65").value < 0 
        || document.getElementById("heizstab.id2.pwm.65").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.65").value))
        || document.getElementById("heizstab.id2.pwm.60").value < 0 
        || document.getElementById("heizstab.id2.pwm.60").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.60").value))
        || document.getElementById("heizstab.id2.pwm.55").value < 0 
        || document.getElementById("heizstab.id2.pwm.55").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.55").value))
        || document.getElementById("heizstab.id2.pwm.50").value < 0 
        || document.getElementById("heizstab.id2.pwm.50").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.50").value))
        || document.getElementById("heizstab.id2.pwm.45").value < 0 
        || document.getElementById("heizstab.id2.pwm.45").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.45").value))
        || document.getElementById("heizstab.id2.pwm.40").value < 0 
        || document.getElementById("heizstab.id2.pwm.40").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.40").value))
        || document.getElementById("heizstab.id2.pwm.35").value < 0 
        || document.getElementById("heizstab.id2.pwm.35").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.35").value))
        || document.getElementById("heizstab.id2.pwm.30").value < 0 
        || document.getElementById("heizstab.id2.pwm.30").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.30").value))
        || document.getElementById("heizstab.id2.pwm.25").value < 0 
        || document.getElementById("heizstab.id2.pwm.25").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.25").value))
        || document.getElementById("heizstab.id2.pwm.20").value < 0 
        || document.getElementById("heizstab.id2.pwm.20").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.20").value))
        || document.getElementById("heizstab.id2.pwm.15").value < 0 
        || document.getElementById("heizstab.id2.pwm.15").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.15").value))
        || document.getElementById("heizstab.id2.pwm.10").value < 0 
        || document.getElementById("heizstab.id2.pwm.10").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.10").value))
        || document.getElementById("heizstab.id2.pwm.5").value < 0 
        || document.getElementById("heizstab.id2.pwm.5").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.5").value))
        || document.getElementById("heizstab.id2.pwm.0").value < 0 
        || document.getElementById("heizstab.id2.pwm.0").value > 1024 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id2.pwm.0").value))
        )
        {
            alert("PWM Frequenzen des Heizstabs 2 muessen zwischen 0 und 1024 liegen")
            err=true 
        }




        if(document.getElementById("heizstab.id3.max_leistung").value < 0 
        || document.getElementById("heizstab.id3.max_leistung").value > 10000 
        || !Number.isInteger(parseInt(document.getElementById("heizstab.id3.max_leistung").value)))
        {
            alert("Max. Leistung des Heizstabs 3 muss zwischen 0 und 10000W liegen")
            err=true 
        }

        if(!err){
            //create new config as json 
            var newconfig = new Object();
            newconfig.heizstab = new Object()
            newconfig.heizstab.id1 = new Object()
            newconfig.heizstab.id1.pwm = new Object()
            newconfig.heizstab.id2 = new Object()
            newconfig.heizstab.id2.pwm = new Object()
            newconfig.heizstab.id3 = new Object()

            newconfig.wifi_mode = document.getElementById("wifi_mode").value
            newconfig.wifi_ssid = document.getElementById("wifi_ssid").value
            newconfig.wifi_key = document.getElementById("wifi_key").value
            newconfig.smartmeter_type = document.getElementById("smartmeter_type").value
            newconfig.smartmeter_host = document.getElementById("smartmeter_host").value
            newconfig.puffer = document.getElementById("puffer").value
            newconfig.pumpe = document.getElementById("pumpe").value
            newconfig.debuglevel = document.getElementById("debuglevel").value

            newconfig.heizstab.id1.name_kurz = document.getElementById("heizstab.id1.name_kurz").value
            newconfig.heizstab.id1.name = document.getElementById("heizstab.id1.name").value
            newconfig.heizstab.id1.prio = document.getElementById("heizstab.id1.prio").value
            newconfig.heizstab.id1.typ = document.getElementById("heizstab.id1.typ").value
            newconfig.heizstab.id1.betriebsmodus = document.getElementById("heizstab.id1.betriebsmodus").value
            newconfig.heizstab.id1.max_leistung = document.getElementById("heizstab.id1.max_leistung").value
            newconfig.heizstab.id1.soll_temp = document.getElementById("heizstab.id1.soll_temp").value
            newconfig.heizstab.id1.hysterese = document.getElementById("heizstab.id1.hysterese").value
            newconfig.heizstab.id1.pwm["100"] = document.getElementById("heizstab.id1.pwm.100").value
            newconfig.heizstab.id1.pwm["95"] = document.getElementById("heizstab.id1.pwm.95").value
            newconfig.heizstab.id1.pwm["90"] = document.getElementById("heizstab.id1.pwm.90").value
            newconfig.heizstab.id1.pwm["85"] = document.getElementById("heizstab.id1.pwm.85").value
            newconfig.heizstab.id1.pwm["80"] = document.getElementById("heizstab.id1.pwm.80").value
            newconfig.heizstab.id1.pwm["75"] = document.getElementById("heizstab.id1.pwm.75").value
            newconfig.heizstab.id1.pwm["70"] = document.getElementById("heizstab.id1.pwm.70").value
            newconfig.heizstab.id1.pwm["65"] = document.getElementById("heizstab.id1.pwm.65").value
            newconfig.heizstab.id1.pwm["60"] = document.getElementById("heizstab.id1.pwm.60").value
            newconfig.heizstab.id1.pwm["55"] = document.getElementById("heizstab.id1.pwm.55").value
            newconfig.heizstab.id1.pwm["50"] = document.getElementById("heizstab.id1.pwm.50").value
            newconfig.heizstab.id1.pwm["45"] = document.getElementById("heizstab.id1.pwm.45").value
            newconfig.heizstab.id1.pwm["40"] = document.getElementById("heizstab.id1.pwm.40").value
            newconfig.heizstab.id1.pwm["35"] = document.getElementById("heizstab.id1.pwm.35").value
            newconfig.heizstab.id1.pwm["30"] = document.getElementById("heizstab.id1.pwm.30").value
            newconfig.heizstab.id1.pwm["25"] = document.getElementById("heizstab.id1.pwm.25").value
            newconfig.heizstab.id1.pwm["20"] = document.getElementById("heizstab.id1.pwm.20").value
            newconfig.heizstab.id1.pwm["15"] = document.getElementById("heizstab.id1.pwm.15").value
            newconfig.heizstab.id1.pwm["10"] = document.getElementById("heizstab.id1.pwm.10").value
            newconfig.heizstab.id1.pwm["5"] = document.getElementById("heizstab.id1.pwm.5").value
            newconfig.heizstab.id1.pwm["0"] = document.getElementById("heizstab.id1.pwm.0").value

            newconfig.heizstab.id2.name_kurz = document.getElementById("heizstab.id2.name_kurz").value
            newconfig.heizstab.id2.name = document.getElementById("heizstab.id2.name").value
            newconfig.heizstab.id2.prio = document.getElementById("heizstab.id2.prio").value
            newconfig.heizstab.id2.typ = document.getElementById("heizstab.id2.typ").value
            newconfig.heizstab.id2.betriebsmodus = document.getElementById("heizstab.id2.betriebsmodus").value
            newconfig.heizstab.id2.max_leistung = document.getElementById("heizstab.id2.max_leistung").value
            newconfig.heizstab.id2.soll_temp = document.getElementById("heizstab.id2.soll_temp").value
            newconfig.heizstab.id2.hysterese = document.getElementById("heizstab.id2.hysterese").value
            newconfig.heizstab.id2.pwm["100"] = document.getElementById("heizstab.id2.pwm.100").value
            newconfig.heizstab.id2.pwm["95"] = document.getElementById("heizstab.id2.pwm.95").value
            newconfig.heizstab.id2.pwm["90"] = document.getElementById("heizstab.id2.pwm.90").value
            newconfig.heizstab.id2.pwm["85"] = document.getElementById("heizstab.id2.pwm.85").value
            newconfig.heizstab.id2.pwm["80"] = document.getElementById("heizstab.id2.pwm.80").value
            newconfig.heizstab.id2.pwm["75"] = document.getElementById("heizstab.id2.pwm.75").value
            newconfig.heizstab.id2.pwm["70"] = document.getElementById("heizstab.id2.pwm.70").value
            newconfig.heizstab.id2.pwm["65"] = document.getElementById("heizstab.id2.pwm.65").value
            newconfig.heizstab.id2.pwm["60"] = document.getElementById("heizstab.id2.pwm.60").value
            newconfig.heizstab.id2.pwm["55"] = document.getElementById("heizstab.id2.pwm.55").value
            newconfig.heizstab.id2.pwm["50"] = document.getElementById("heizstab.id2.pwm.50").value
            newconfig.heizstab.id2.pwm["45"] = document.getElementById("heizstab.id2.pwm.45").value
            newconfig.heizstab.id2.pwm["40"] = document.getElementById("heizstab.id2.pwm.40").value
            newconfig.heizstab.id2.pwm["35"] = document.getElementById("heizstab.id2.pwm.35").value
            newconfig.heizstab.id2.pwm["30"] = document.getElementById("heizstab.id2.pwm.30").value
            newconfig.heizstab.id2.pwm["25"] = document.getElementById("heizstab.id2.pwm.25").value
            newconfig.heizstab.id2.pwm["20"] = document.getElementById("heizstab.id2.pwm.20").value
            newconfig.heizstab.id2.pwm["15"] = document.getElementById("heizstab.id2.pwm.15").value
            newconfig.heizstab.id2.pwm["10"] = document.getElementById("heizstab.id2.pwm.10").value
            newconfig.heizstab.id2.pwm["5"] = document.getElementById("heizstab.id2.pwm.5").value
            newconfig.heizstab.id2.pwm["0"] = document.getElementById("heizstab.id2.pwm.0").value

            newconfig.heizstab.id3.name_kurz = document.getElementById("heizstab.id3.name_kurz").value
            newconfig.heizstab.id3.name = document.getElementById("heizstab.id3.name").value
            newconfig.heizstab.id3.prio = document.getElementById("heizstab.id3.prio").value
            newconfig.heizstab.id3.typ = document.getElementById("heizstab.id3.typ").value
            newconfig.heizstab.id3.betriebsmodus = document.getElementById("heizstab.id3.betriebsmodus").value
            newconfig.heizstab.id3.max_leistung = document.getElementById("heizstab.id3.max_leistung").value
            newconfig.heizstab.id3.shelly_ip = document.getElementById("heizstab.id3.shelly_ip").value
            newconfig.heizstab.id3.shelly_user = document.getElementById("heizstab.id3.shelly_user").value
            newconfig.heizstab.id3.shelly_pass = document.getElementById("heizstab.id3.shelly_pass").value


            var jsonConfig= JSON.stringify(newconfig);

            //base64 encode the object for transfer
            var encodedConfig = btoa(jsonConfig);

            //url encode
            var urlencodedConfig = encodeURIComponent(encodedConfig)
            //var urlencodedConfig = urlencodedConfig.replace("%3D%3D","")
            
            var req = new XMLHttpRequest();
            req.open("GET", "/config/update/?newconfig="+urlencodedConfig);
            req.send(null);
            req.onloadend  = function() {
                window.location.assign("/");
                };

        }
    
    }else{
        alert("Es wurden kein Änderungen vorgenommen")
    }


  }

function resetconfig() {
    window.location.assign("/config/show")
}


function onload () {
    
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/api/config", true);
    req.send(null);

    req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    window.current_config = jsonResponse
    document.getElementById("wifi_mode").value = jsonResponse.wifi_mode;
    document.getElementById("wifi_ssid").value = jsonResponse.wifi_ssid;
    document.getElementById("wifi_key").value = jsonResponse.wifi_key;
    document.getElementById("smartmeter_type").value = jsonResponse.smartmeter_type;
    document.getElementById("smartmeter_host").value = jsonResponse.smartmeter_host;
    document.getElementById("pumpe").value = jsonResponse.pumpe;
    document.getElementById("debuglevel").value = jsonResponse.debuglevel;

    document.getElementById("heizstab.id1.prio").value = jsonResponse.heizstab.id1.prio;
    document.getElementById("heizstab.id1.name_kurz").value = jsonResponse.heizstab.id1.name_kurz;
    document.getElementById("heizstab.id1.name").value = jsonResponse.heizstab.id1.name;
    document.getElementById("heizstab.id1.typ").value = jsonResponse.heizstab.id1.typ;
    document.getElementById("heizstab.id1.betriebsmodus").value = jsonResponse.heizstab.id1.betriebsmodus;
    document.getElementById("heizstab.id1.max_leistung").value = jsonResponse.heizstab.id1.max_leistung;
    document.getElementById("heizstab.id1.soll_temp").value = jsonResponse.heizstab.id1.soll_temp;
    document.getElementById("heizstab.id1.hysterese").value = jsonResponse.heizstab.id1.hysterese;

    document.getElementById("heizstab.id1.pwm.100").value = jsonResponse.heizstab.id1.pwm["100"];
    document.getElementById("heizstab.id1.pwm.100_lbl").innerHTML = "100 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*100+"W)";
    document.getElementById("heizstab.id1.pwm.95").value = jsonResponse.heizstab.id1.pwm["95"];
    document.getElementById("heizstab.id1.pwm.95_lbl").innerHTML = "95 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*95+"W)";
    document.getElementById("heizstab.id1.pwm.90").value = jsonResponse.heizstab.id1.pwm["90"];
    document.getElementById("heizstab.id1.pwm.90_lbl").innerHTML = "90 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*90+"W)";
    document.getElementById("heizstab.id1.pwm.85").value = jsonResponse.heizstab.id1.pwm["85"];
    document.getElementById("heizstab.id1.pwm.85_lbl").innerHTML = "85 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*85+"W)";
    document.getElementById("heizstab.id1.pwm.80").value = jsonResponse.heizstab.id1.pwm["80"];
    document.getElementById("heizstab.id1.pwm.80_lbl").innerHTML = "80 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*80+"W)";
    document.getElementById("heizstab.id1.pwm.75").value = jsonResponse.heizstab.id1.pwm["75"];
    document.getElementById("heizstab.id1.pwm.75_lbl").innerHTML = "75 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*75+"W)";
    document.getElementById("heizstab.id1.pwm.70").value = jsonResponse.heizstab.id1.pwm["70"];
    document.getElementById("heizstab.id1.pwm.70_lbl").innerHTML = "70 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*70+"W)";
    document.getElementById("heizstab.id1.pwm.65").value = jsonResponse.heizstab.id1.pwm["65"];
    document.getElementById("heizstab.id1.pwm.65_lbl").innerHTML = "65 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*65+"W)";
    document.getElementById("heizstab.id1.pwm.60").value = jsonResponse.heizstab.id1.pwm["60"];
    document.getElementById("heizstab.id1.pwm.60_lbl").innerHTML = "60 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*60+"W)";
    document.getElementById("heizstab.id1.pwm.55").value = jsonResponse.heizstab.id1.pwm["55"];
    document.getElementById("heizstab.id1.pwm.55_lbl").innerHTML = "55 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*55+"W)";
    document.getElementById("heizstab.id1.pwm.50").value = jsonResponse.heizstab.id1.pwm["50"];
    document.getElementById("heizstab.id1.pwm.50_lbl").innerHTML = "50 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*50+"W)";
    document.getElementById("heizstab.id1.pwm.45").value = jsonResponse.heizstab.id1.pwm["45"];
    document.getElementById("heizstab.id1.pwm.45_lbl").innerHTML = "45 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*45+"W)";
    document.getElementById("heizstab.id1.pwm.40").value = jsonResponse.heizstab.id1.pwm["40"];
    document.getElementById("heizstab.id1.pwm.40_lbl").innerHTML = "40 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*40+"W)";
    document.getElementById("heizstab.id1.pwm.35").value = jsonResponse.heizstab.id1.pwm["35"];
    document.getElementById("heizstab.id1.pwm.35_lbl").innerHTML = "35 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*35+"W)";
    document.getElementById("heizstab.id1.pwm.30").value = jsonResponse.heizstab.id1.pwm["30"];
    document.getElementById("heizstab.id1.pwm.30_lbl").innerHTML = "30 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*30+"W)";
    document.getElementById("heizstab.id1.pwm.25").value = jsonResponse.heizstab.id1.pwm["25"];
    document.getElementById("heizstab.id1.pwm.25_lbl").innerHTML = "25 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*25+"W)";
    document.getElementById("heizstab.id1.pwm.20").value = jsonResponse.heizstab.id1.pwm["20"];
    document.getElementById("heizstab.id1.pwm.20_lbl").innerHTML = "20 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*20+"W)";
    document.getElementById("heizstab.id1.pwm.15").value = jsonResponse.heizstab.id1.pwm["15"];
    document.getElementById("heizstab.id1.pwm.15_lbl").innerHTML = "15 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*15+"W)";
    document.getElementById("heizstab.id1.pwm.10").value = jsonResponse.heizstab.id1.pwm["10"];
    document.getElementById("heizstab.id1.pwm.10_lbl").innerHTML = "10 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*10+"W)";
    document.getElementById("heizstab.id1.pwm.5").value = jsonResponse.heizstab.id1.pwm["5"];
    document.getElementById("heizstab.id1.pwm.5_lbl").innerHTML = "5 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*5+"W)";
    document.getElementById("heizstab.id1.pwm.0").value = jsonResponse.heizstab.id1.pwm["0"];
    document.getElementById("heizstab.id1.pwm.0_lbl").innerHTML = "0 Prozent ("+jsonResponse.heizstab.id1.max_leistung/100*0+"W)";

    document.getElementById("heizstab.id2.prio").value = jsonResponse.heizstab.id2.prio;
    document.getElementById("heizstab.id2.name_kurz").value = jsonResponse.heizstab.id2.name_kurz;
    document.getElementById("heizstab.id2.name").value = jsonResponse.heizstab.id2.name;
    document.getElementById("heizstab.id2.typ").value = jsonResponse.heizstab.id2.typ;
    document.getElementById("heizstab.id2.betriebsmodus").value = jsonResponse.heizstab.id2.betriebsmodus;
    document.getElementById("heizstab.id2.max_leistung").value = jsonResponse.heizstab.id2.max_leistung;
    document.getElementById("heizstab.id2.soll_temp").value = jsonResponse.heizstab.id2.soll_temp;
    document.getElementById("heizstab.id2.hysterese").value = jsonResponse.heizstab.id2.hysterese;

    document.getElementById("heizstab.id2.pwm.100").value = jsonResponse.heizstab.id2.pwm["100"];
    document.getElementById("heizstab.id2.pwm.100_lbl").innerHTML = "100 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*100+"W)";
    document.getElementById("heizstab.id2.pwm.95").value = jsonResponse.heizstab.id2.pwm["95"];
    document.getElementById("heizstab.id2.pwm.95_lbl").innerHTML = "95 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*95+"W)";
    document.getElementById("heizstab.id2.pwm.90").value = jsonResponse.heizstab.id2.pwm["90"];
    document.getElementById("heizstab.id2.pwm.90_lbl").innerHTML = "90 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*90+"W)";
    document.getElementById("heizstab.id2.pwm.85").value = jsonResponse.heizstab.id2.pwm["85"];
    document.getElementById("heizstab.id2.pwm.85_lbl").innerHTML = "85 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*85+"W)";
    document.getElementById("heizstab.id2.pwm.80").value = jsonResponse.heizstab.id2.pwm["80"];
    document.getElementById("heizstab.id2.pwm.80_lbl").innerHTML = "80 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*80+"W)";
    document.getElementById("heizstab.id2.pwm.75").value = jsonResponse.heizstab.id2.pwm["75"];
    document.getElementById("heizstab.id2.pwm.75_lbl").innerHTML = "75 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*75+"W)";
    document.getElementById("heizstab.id2.pwm.70").value = jsonResponse.heizstab.id2.pwm["70"];
    document.getElementById("heizstab.id2.pwm.70_lbl").innerHTML = "70 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*70+"W)";
    document.getElementById("heizstab.id2.pwm.65").value = jsonResponse.heizstab.id2.pwm["65"];
    document.getElementById("heizstab.id2.pwm.65_lbl").innerHTML = "65 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*65+"W)";
    document.getElementById("heizstab.id2.pwm.60").value = jsonResponse.heizstab.id2.pwm["60"];
    document.getElementById("heizstab.id2.pwm.60_lbl").innerHTML = "60 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*60+"W)";
    document.getElementById("heizstab.id2.pwm.55").value = jsonResponse.heizstab.id2.pwm["55"];
    document.getElementById("heizstab.id2.pwm.55_lbl").innerHTML = "55 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*55+"W)";
    document.getElementById("heizstab.id2.pwm.50").value = jsonResponse.heizstab.id2.pwm["50"];
    document.getElementById("heizstab.id2.pwm.50_lbl").innerHTML = "50 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*50+"W)";
    document.getElementById("heizstab.id2.pwm.45").value = jsonResponse.heizstab.id2.pwm["45"];
    document.getElementById("heizstab.id2.pwm.45_lbl").innerHTML = "45 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*45+"W)";
    document.getElementById("heizstab.id2.pwm.40").value = jsonResponse.heizstab.id2.pwm["40"];
    document.getElementById("heizstab.id2.pwm.40_lbl").innerHTML = "40 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*40+"W)";
    document.getElementById("heizstab.id2.pwm.35").value = jsonResponse.heizstab.id2.pwm["35"];
    document.getElementById("heizstab.id2.pwm.35_lbl").innerHTML = "35 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*35+"W)";
    document.getElementById("heizstab.id2.pwm.30").value = jsonResponse.heizstab.id2.pwm["30"];
    document.getElementById("heizstab.id2.pwm.30_lbl").innerHTML = "30 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*30+"W)";
    document.getElementById("heizstab.id2.pwm.25").value = jsonResponse.heizstab.id2.pwm["25"];
    document.getElementById("heizstab.id2.pwm.25_lbl").innerHTML = "25 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*25+"W)";
    document.getElementById("heizstab.id2.pwm.20").value = jsonResponse.heizstab.id2.pwm["20"];
    document.getElementById("heizstab.id2.pwm.20_lbl").innerHTML = "20 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*20+"W)";
    document.getElementById("heizstab.id2.pwm.15").value = jsonResponse.heizstab.id2.pwm["15"];
    document.getElementById("heizstab.id2.pwm.15_lbl").innerHTML = "15 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*15+"W)";
    document.getElementById("heizstab.id2.pwm.10").value = jsonResponse.heizstab.id2.pwm["10"];
    document.getElementById("heizstab.id2.pwm.10_lbl").innerHTML = "10 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*10+"W)";
    document.getElementById("heizstab.id2.pwm.5").value = jsonResponse.heizstab.id2.pwm["5"];
    document.getElementById("heizstab.id2.pwm.5_lbl").innerHTML = "5 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*5+"W)";
    document.getElementById("heizstab.id2.pwm.0").value = jsonResponse.heizstab.id2.pwm["0"];
    document.getElementById("heizstab.id2.pwm.0_lbl").innerHTML = "0 Prozent ("+jsonResponse.heizstab.id2.max_leistung/100*0+"W)";

    document.getElementById("heizstab.id3.prio").value = jsonResponse.heizstab.id3.prio;
    document.getElementById("heizstab.id3.name_kurz").value = jsonResponse.heizstab.id3.name_kurz;
    document.getElementById("heizstab.id3.name").value = jsonResponse.heizstab.id3.name;
    document.getElementById("heizstab.id3.typ").value = jsonResponse.heizstab.id3.typ;
    document.getElementById("heizstab.id3.betriebsmodus").value = jsonResponse.heizstab.id3.betriebsmodus;
    document.getElementById("heizstab.id3.max_leistung").value = jsonResponse.heizstab.id3.max_leistung;
    document.getElementById("heizstab.id3.shelly_ip").value = jsonResponse.heizstab.id3.shelly_ip;
    document.getElementById("heizstab.id3.shelly_user").value = jsonResponse.heizstab.id3.shelly_user;
    document.getElementById("heizstab.id3.shelly_pass").value = jsonResponse.heizstab.id3.shelly_pass;
    
    };


}
