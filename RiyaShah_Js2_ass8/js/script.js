$.ajax({
    type: "Get",
    url: "data.json",
    dataType: "json",
    success: function(data) {

        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].firstname+ '</td><td>' + data[i].lastname + '</td><td>' + data[i].description + '</td><td>' + data[i].occupation+ '</td><td>' + data[i].Fiance + '</td></tr>');
            $('#dataTable').append(row);
        }
    },
    error: function(){
        alert("json not found");
    }
    
});



$(document).ready(function(){

    $("#myInput").keyup(function(){

        var value= $(this).val();
    
    
        $("#dataTable tr:not(:first-child)").each(function(data){
        
            //if(data !==1){
                var input= $(this).find("td:first").text();
                if(input.indexOf(value)!==0){
                    $(this).hide().parent('tr').removeClass("color");
                   
                }else{
                    $(this).show().parent('tr').addClass("color");
                }
           // }
        })
    });
})


$("#alphabaetRange").on("click", function () {
    
    $("#dataTable tr:not(:first-child)").filter(function (e) {

        var click = $(this).find("td:nth-child(2)").text();
        
            if (click.includes("A") || click.includes("B") || click.includes("C") || click.includes("D") || click.includes("E") || click.includes("F") ||click.includes("G") ||click.includes("H") ||click.includes("I") || click.includes("J") || click.includes("K") ||click.includes("L") || click.includes("M")) {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
            
    });

});


$("#alphaRange").on("click", function () {
    
    $("#dataTable tr:not(:first-child)").filter(function (e) {

        var click = $(this).find("td:nth-child(2)").text();
        
            if (click.includes("N") || click.includes("o") || click.includes("P") || click.includes("Q") || click.includes("R") || click.includes("S") ||click.includes("T") ||click.includes("U") ||click.includes("V") || click.includes("W") || click.includes("X") ||click.includes("Y") || click.includes("Z")) {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
            
    });

});



