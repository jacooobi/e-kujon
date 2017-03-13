var gradesCorrected = false
var main = function() {
  var gradeRows = document.getElementsByClassName("list-grades")[1].getElementsByTagName("tr");

  for(var i=1; i<gradeRows.length; i++) {
    var currentRow = gradeRows[i].getElementsByTagName("td");
    currentRow[currentRow.length-1].innerHTML = "<div>Pierwszy termin: &nbsp;<span class=\"text-success\"><strong>5.0</strong></span></div>";
  }

  var gradeDetails = document.getElementsByClassName("properties-semester")[1];
  var detailRows = gradeDetails.getElementsByTagName("td");

  detailRows[0].innerHTML = "150/30";
  detailRows[1].innerHTML = "30";
  detailRows[2].innerHTML = "<span class=\"text-success\"><strong>Nieważne kiedy, ważne że zdane</span></div>";
  gradesCorrected = true;
}

if (!gradesCorrected) { setInterval(function() { main(); }, 2000); }
