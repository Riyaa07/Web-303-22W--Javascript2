$.ajax({
    type: "Get",
    url: "data.json",
    dataType: "json",
    success: function(data) {

        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].firstname+ '</td><td>' + data[i].lastname + '</td><td>' + data[i].description + '</td><td>' + data[i].occupation+ '</td><td>' + data[i].Fiance + '</td><td>' + data[i].BirthDate +'</td></tr>');
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
        
            if (click.includes("A") | click.includes("B") | click.includes("C") | click.includes("D") | click.includes("E") | click.includes("F") | click.includes("G") | click.includes("H") |click.includes("I") | click.includes("J") | click.includes("K") |click.includes("L") | click.includes("M")) {
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
        
            if (click.includes("N") | click.includes("o") | click.includes("P") | click.includes("Q") | click.includes("R") | click.includes("S") |click.includes("T") |click.includes("U") |click.includes("V") | click.includes("W") | click.includes("X") |click.includes("Y") | click.includes("Z")) {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
            
    });

});



var compare = {
    name: function (a, b) {
        console.log("processing the words", b, ", ", a);
        if (a < b) {
            return -1;
        }
        else if (b < a) {
            return 1
        }
        else //they're equal
        {
            return 0;
        }
    },
    compareNumbersAscending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return parseInt(a) - parseInt(b);
    },
    compareNumbersDescending: function (a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return b - a;
    },
    compareNumbersRandom: function (a, b) {
        return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
    },
    compareDates: function (a, b) {
        var dateA = new Date(a);
        var dateB = new Date(b);
        return dateA - dateB;
    }
};

function populateTable() {
    var $tbody = $('#dataTable').find('tbody');
$('th').on('click', function(data){

    
  
    //for (var i=0; i<person.length; i++) {
    var $row = $('<tr></tr>'); // Create their row
    $row.append($('<td></td>').text(data.firstname));// Add name
    $row.append($('<td></td>').text(data.lastname));// Add rate
    $row.append($('<td></td>').text(data.description));
    $row.append($('<td></td>').text(data.occupation));
    $row.append($('<td></td>').text(data.fiance));
    $row.append($('<td></td>').text(data.BirthDate));
   // $tbody.append($row); // Add HTML for the row
    //}
});
$('#dataTable').append($tbody);
}



function init() { // this is essentially the jquery ready function now
   populateTable()
////////////////////////////////////////////////////

$('.sortable').each(function () {
    var $table = $(this); // This table
    var $tbody = $table.find('tbody'); // Table body
    var $controls = $table.find('th'); // Table headers
    var rows = $tbody.find('tr').toArray(); // Array of rows
    $controls.on('click', function () { // Event handler
        var $header = $(this); // Get header
        var order = $header.data('sortbythis'); // either name or compareNumbersAscending
        var column; // Used later
        if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
            $header.toggleClass('ascending descending');
            // Reverse the array
            $tbody.append(rows.reverse());
        } else { //not sorted yet, we need to sort
            $header.addClass('ascending'); // Add class to header
            // Remove asc or desc from all other headers
            $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
            console.log("check if has property");
            if (compare.hasOwnProperty(order)) {
                console.log("has property");
                column = $controls.index(this); // Column's index no
                rows.sort(function (a, b) { // Call sort() on rows
                    a = $(a).find('td').eq(column).text();// Text of column row a
                    b = $(b).find('td').eq(column).text();// Text of column row b
                    return compare[order](a, b); // Call compare method
                });
                $tbody.append(rows);
            }
        }
    });

   
});

}

$(init);



