
function siteReady(){
    document.getElementById("tb_custoff").value = offset;
    writeTime();
    setInterval(writeTime, 1000);
}

var offset = 2;


function writeTime(){

    var realtime = new Date();
    // var utchrs = realtime.getUTCHours();
    // var utcmins = realtime.getUTCMinutes();
    // var utcsecs = realtime.getSeconds();
    var seconds, minutes, hours;

    seconds = realtime.getSeconds();
    minutes = realtime.getMinutes();
    hours = (realtime.getUTCHours())+offset;

    if (hours > 24) hours = hours - 24;
    if (hours < 0) hours = 24 + hours;

    var binsecs = (seconds%10).toString(2).padStart(4, 0);
    var binsect = (Math.floor(seconds/10)).toString(2).padStart(3, 0);

    var binmins = (minutes%10).toString(2).padStart(4, 0);
    var binmint = (Math.floor(minutes/10)).toString(2).padStart(3, 0);

    var binhrss = (hours%10).toString(2).padStart(4, 0);
    var binhrst = (Math.floor(hours/10)).toString(2).padStart(2, 0);

    for (var i = 0; i < 4; i++){
        if (binsecs[i] == 0) document.getElementById("secs" + i).className = "off";
        else document.getElementById("secs" + i).className = "on";
    }

    for (var i = 0; i < 3; i++){
        if (binsect[i] == 0) document.getElementById("sect" + i).className = "off";
        else document.getElementById("sect" + i).className = "on";
    }

    for (var i = 0; i < 4; i++){
        if (binmins[i] == 0) document.getElementById("mins" + i).className = "off";
        else document.getElementById("mins" + i).className = "on";
    }

    for (var i = 0; i < 3; i++){
        if (binmint[i] == 0) document.getElementById("mint" + i).className = "off";
        else document.getElementById("mint" + i).className = "on";
    }

    for (var i = 0; i < 4; i++){
        if (binhrss[i] == 0) document.getElementById("hrss" + i).className = "off";
        else document.getElementById("hrss" + i).className = "on";
    }

    for (var i = 0; i < 2; i++){
        if (binhrst[i] == 0) document.getElementById("hrst" + i).className = "off";
        else document.getElementById("hrst" + i).className = "on";
    }

    var timeString = hours.toString().padStart(2,0)+" : "+minutes.toString().padStart(2, 0)+" : "+seconds.toString().padStart(2,0);
    //var timeString = utchrs.toString().padStart(2,0)+" : "+utcmins.toString().padStart(2, 0)+" : "+utcsecs.toString().padStart(2,0);

    document.getElementById("timetime").innerHTML = timeString;
}

function SwapColorTheme(){
    var form = document.getElementById("selector");
    var theme = form.elements["colorselector"].value;

    if (theme == "light"){
        // document.styleSheets[0].href = "css/light.css";
        document.getElementById("csslink").setAttribute("href", "css/light.css");
    }
    if (theme == "dark"){
        document.getElementById("csslink").setAttribute("href", "css/dark.css");
    }
}

function SwitchToAussieTime(){
    offset = 12;
    document.getElementById("tb_custoff").value = offset;
    document.getElementById("SW1").classList.remove("swsel");
    document.getElementById("SW2").classList.remove("swsel");
    document.getElementById("SW2").className = "switch";
    document.getElementById("SW1").className = "switch";
    document.getElementById("SW3").classList.add("swsel");
}

function SwitchToMoeMoeTime(){
    offset = 2;
    document.getElementById("tb_custoff").value = offset;
    document.getElementById("SW1").classList.remove("swsel");
    document.getElementById("SW3").classList.remove("swsel");
    document.getElementById("SW1").className = "switch";
    document.getElementById("SW3").className = "switch";
    document.getElementById("SW2").classList.add("swsel");
}

function SwitchToBigAppleTime(){
    offset = -4;
    document.getElementById("tb_custoff").value = offset;
    document.getElementById("SW2").classList.remove("swsel");
    document.getElementById("SW3").classList.remove("swsel");
    document.getElementById("SW2").className = "switch";
    document.getElementById("SW3").className = "switch";
    document.getElementById("SW1").classList.add("swsel");
}

function SwitchToCustom(){
    document.getElementById("SW1").classList.remove("swsel");
    document.getElementById("SW2").classList.remove("swsel");
    document.getElementById("SW3").classList.remove("swsel");
    document.getElementById("SW1").className = "switch";
    document.getElementById("SW2").className = "switch";
    document.getElementById("SW3").className = "switch";
}

function HideClock(){
    if (!document.getElementById("timetime").classList.contains("pinvisible"))
    document.getElementById("timetime").className = "pinvisible";
    else document.getElementById("timetime").classList.remove("pinvisible");
}

function SetCustomOffset(){
    if (parseInt(document.getElementById("tb_custoff").value) < 24 &&
    parseInt(document.getElementById("tb_custoff").value) > -24) {
        offset = parseInt(document.getElementById("tb_custoff").value);
        SwitchToCustom();
    }
    else {
        alert('Offset must be greater than -24 and less than 24!');
    }
}

function DoStuff(e) {
    e.preventDefault();
    SetCustomOffset();
}