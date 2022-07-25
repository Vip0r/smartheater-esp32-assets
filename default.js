

setInterval(regular_update, 1000);

function regular_update () {

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/api/status", true);
    req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    document.getElementById("grid").innerHTML = jsonResponse.grid;
    document.getElementById("inverter").innerHTML = jsonResponse.inverter;
    document.getElementById("soc").innerHTML = jsonResponse.soc;
    document.getElementById("pv").innerHTML = jsonResponse.pv;
    document.getElementById("consumption").innerHTML = jsonResponse.consumption;
    document.getElementById("total_available_power").innerHTML = jsonResponse.total_available_power;

    document.getElementById("temp_ww").innerHTML = jsonResponse.temp_ww;
    document.getElementById("soll_temp_ww").innerHTML = jsonResponse.soll_temp_ww;
    document.getElementById("temp_vl").innerHTML = jsonResponse.temp_vl;
    document.getElementById("soll_temp_vl").innerHTML = jsonResponse.soll_temp_vl;
    document.getElementById("water_power").innerHTML = jsonResponse.water_power;
    document.getElementById("heat_power").innerHTML = jsonResponse.heat_power;
    document.getElementById("bath_power").innerHTML = jsonResponse.bath_power;

    document.getElementById("ww_bar").value = jsonResponse.water_power;
    document.getElementById("vl_bar").value = jsonResponse.heat_power;
    document.getElementById("bath_bar").value = jsonResponse.bath_power;
    document.getElementById("ww_temp_bar").value = jsonResponse.temp_ww;
    document.getElementById("vl_temp_bar").value = jsonResponse.temp_vl;

    document.getElementById("ww_bar").max = jsonResponse.water_power_max;
    document.getElementById("vl_bar").max = jsonResponse.heat_power_max;
    document.getElementById("bath_bar").max = jsonResponse.bath_power_max;
    document.getElementById("ww_temp_bar").max = jsonResponse.soll_temp_ww;
    document.getElementById("vl_temp_bar").max = jsonResponse.soll_temp_vl;

    document.getElementById("status_ww").innerHTML = jsonResponse.status_ww;
    document.getElementById("status_bath").innerHTML = jsonResponse.status_bath;
    document.getElementById("status_vl").innerHTML = jsonResponse.status_vl;

    document.getElementById("status").innerHTML = jsonResponse.status;
    if(jsonResponse.status == "Betrieb"){
      document.getElementById("statusmark").classList.add("tertiary")
      document.getElementById("statusmark").classList.remove("secondary")
    }else{
      document.getElementById("statusmark").classList.remove("tertiary")
      document.getElementById("statusmark").classList.add("secondary")
    }

    if(jsonResponse.status_ww == "WW: Automatik"){
      document.getElementById("statusmark_ww").classList.add("tertiary")
      document.getElementById("statusmark_ww").classList.remove("primary")
    }else{
      document.getElementById("statusmark_ww").classList.remove("tertiary")
      document.getElementById("statusmark_ww").classList.add("primary")
    }

    if(jsonResponse.status_bath == "BAD: Automatik"){
      document.getElementById("statusmark_bath").classList.add("tertiary")
      document.getElementById("statusmark_bath").classList.remove("primary")
    }else{
      document.getElementById("statusmark_bath").classList.remove("tertiary")
      document.getElementById("statusmark_bath").classList.add("primary")
    }

    if(jsonResponse.status_vl == "VL: Automatik"){
      document.getElementById("statusmark_vl").classList.add("tertiary")
      document.getElementById("statusmark_vl").classList.remove("primary")
    }else{
      document.getElementById("statusmark_vl").classList.remove("tertiary")
      document.getElementById("statusmark_vl").classList.add("primary")
    }






    };


    req.send(null);
  }



  function init_update () {

    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', "/api/status", true);
    req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    document.getElementById("grid").innerHTML = jsonResponse.grid;
    document.getElementById("inverter").innerHTML = jsonResponse.inverter;
    document.getElementById("soc").innerHTML = jsonResponse.soc;
    document.getElementById("pv").innerHTML = jsonResponse.pv;
    document.getElementById("consumption").innerHTML = jsonResponse.consumption;
    document.getElementById("total_available_power").innerHTML = jsonResponse.total_available_power;

    document.getElementById("temp_ww").innerHTML = jsonResponse.temp_ww;
    document.getElementById("soll_temp_ww").innerHTML = jsonResponse.soll_temp_ww;
    document.getElementById("temp_vl").innerHTML = jsonResponse.temp_vl;
    document.getElementById("soll_temp_vl").innerHTML = jsonResponse.soll_temp_vl;
    document.getElementById("water_power").innerHTML = jsonResponse.water_power;
    document.getElementById("water_power_max").innerHTML = jsonResponse.water_power_max;
    document.getElementById("heat_power").innerHTML = jsonResponse.heat_power;
    document.getElementById("heat_power_max").innerHTML = jsonResponse.heat_power_max;
    document.getElementById("bath_power").innerHTML = jsonResponse.bath_power;
    document.getElementById("bath_power_max").innerHTML = jsonResponse.bath_power_max;
    document.getElementById("mode_ww").value = jsonResponse.mode_ww;
    document.getElementById("mode_vl").value = jsonResponse.mode_vl;
    document.getElementById("mode_bath").value = jsonResponse.mode_bath;

    document.getElementById("status_ww").innerHTML = jsonResponse.status_ww;
    document.getElementById("status_bath").innerHTML = jsonResponse.status_bath;
    document.getElementById("status_vl").innerHTML = jsonResponse.status_vl;

    document.getElementById("status").innerHTML = jsonResponse.status;
    if(jsonResponse.status == "Betrieb"){
      document.getElementById("statusmark").classList.add("tertiary")
      document.getElementById("statusmark").classList.remove("secondary")
    }else{
      document.getElementById("statusmark").classList.remove("tertiary")
      document.getElementById("statusmark").classList.add("secondary")
    }

    if(jsonResponse.status_ww == "WW: Automatik"){
      document.getElementById("statusmark_ww").classList.add("tertiary")
      document.getElementById("statusmark_ww").classList.remove("primary")
    }else{
      document.getElementById("statusmark_ww").classList.remove("tertiary")
      document.getElementById("statusmark_ww").classList.add("primary")
    }

    if(jsonResponse.status_bath == "BAD: Automatik"){
      document.getElementById("statusmark_bath").classList.add("tertiary")
      document.getElementById("statusmark_bath").classList.remove("primary")
    }else{
      document.getElementById("statusmark_bath").classList.remove("tertiary")
      document.getElementById("statusmark_bath").classList.add("primary")
    }

    if(jsonResponse.status_vl == "VL: Automatik"){
      document.getElementById("statusmark_vl").classList.add("tertiary")
      document.getElementById("statusmark_vl").classList.remove("primary")
    }else{
      document.getElementById("statusmark_vl").classList.remove("tertiary")
      document.getElementById("statusmark_vl").classList.add("primary")
    }
    
    };

    

    req.send(null);
  }

  function update_mode () {


      var data = new Object();
      data.mode_ww = document.getElementById("mode_ww").value
      data.mode_vl = document.getElementById("mode_vl").value
      data.mode_bath = document.getElementById("mode_bath").value
      var jsonData= JSON.stringify(data);
      //base64 encode the object for transfer
      var encodedData = btoa(jsonData);
      //url encode
      var urlencodedData = encodeURIComponent(encodedData)


      var req = new XMLHttpRequest();
      req.overrideMimeType("application/json");
      url = "/api/setmode/data="+urlencodedData
      req.open('GET', url, true);
      req.send(null);
      req.onload  = function() {
          window.location.assign("/");
          };
    


}
