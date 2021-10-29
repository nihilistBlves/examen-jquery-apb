var url = "https://apiseriespersonajes.azurewebsites.net";

function cargarMenu() {
    $.ajax({
        "url": "https://apiseriespersonajes.azurewebsites.net" + "/api/series",
        "method": "GET",
        "dataType": "json",
        "success": function(data) {
            $.each(data, function(key, serie) {
                var li = $("<li>");
                var a = $("<a>", {"class":"dropdown-item", "href":"./VerSerie.html?idSerie="+serie.idSerie, "text":serie.nombre});
                li.append(a);
                $("#menuSeries").append(a);
            })
        }
    })
}