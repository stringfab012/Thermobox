


document.getElementById('push1').addEventListener('click', function() {
    var ts_api_key = "PC2FP123343GUS9Y";
    var entry = document.getElementById('entries').value;
    var temperature = document.getElementById('temp').value;
    var url = "http://api.thingspeak.com/update?api_key="+ ts_api_key + "&field4="+entry + "&field5="+temperature
    $.getJSON(url, function(data) {
        console.log(data);
    });
});

