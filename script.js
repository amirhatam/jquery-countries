

$("button").click(function getCountries() {


    $.ajax({
        url: 'http://localhost:8000/countries',
        success: function (data, statuts, response) {

            // $("#country").html(data);
            $("#country-1").html(data[0]);
            $("#country-2").html(data[1]);
            $("#country-3").html(data[2]);
            $("#country-4").html(data[3]);
            $("#country-5").html(data[4]);

            
        }
    });

});


