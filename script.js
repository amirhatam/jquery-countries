

$("#btnShowCountries").click( () => {


    $.ajax({

        url: 'http://localhost:8000/countries',
        success: (data, statuts, response) => {

            // $("#country").html(data);

            $("#country-1").html(data[0]);
            $("#country-2").html(data[1]);
            $("#country-3").html(data[2]);
            $("#country-4").html(data[3]);
            $("#country-5").html(data[4]);

            
            
        }
    });
    
});

$("input").hide();

$("#btnShowCapital").click( () => {

    $.ajax({

        url: 'http://localhost:8000/countries:name/capital',
        success: (data, statuts, response) => {
            $("input").show()
            $("#capital1").val(data[0])
            $("#capital2").val(data[1])
            $("#capital3").val(data[2])
            $("#capital4").val(data[3])
            $("#capital5").val(data[4])

            
        }
    });

});
$("#btnShowCapital").dblclick( () => {

    $.ajax({

        url: 'http://localhost:8000/countries:name/capital',
        success: (data, statuts, response) => {
            $("input").hide()
          

            
        }
    });

});