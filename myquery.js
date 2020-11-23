$(document).ready(function () {
    $(".btn1").click(function () {
        $.ajax({
            url: "demo.php",
            type: 'POST',
            dataType: "json",
            contetntType: "charset=utf-8",
            success: function (result) {

                console.log(result.arr.length);
                var table = "";
                table += "<table class='table table-striped'>" +
                    "<tr>" +
                    "<th>Collection</th>" +
                    "<th>Stock</th>" +
                    "<th>Sold</th>" +
                    "</tr>";
                for (var i = 0; i < result.arr.length; i++) {
                    table += "<tr>";
                    for (var j = 0; j < result.arr[i].length; j++) {

                        table += "<td>" + result.arr[i][j] + "</td>";

                    }
                    table += "</tr>";

                }

                table += "</table>";
                $("#res").html(table);




            },
            error: function () {

                alert(error);
            }


        });
    });

});