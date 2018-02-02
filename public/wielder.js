$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    // show the list of apps
    getAppsList();

    $("#btnAddNewApp").on("click", function() {
        $("#newAppModal").modal("show");
    });
});

/**
 * function showing the list of apps
 */
function getAppsList() {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        console.log("Cannot create XMLHttpRequest instance");
        return false;
    }

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                showAppsList(JSON.parse(httpRequest.responseText));
            }
        }
    };
    httpRequest.open("GET", "http://127.0.0.1:3031/list_users", true);
    httpRequest.send();
}

/**
 * function showing the apps list
 */
function showAppsList(appsList) {
    var mTable = document.createElement("table");
    mTable.setAttribute("class", "table table-striped table-bordered");

    // find the length of apps array
    var mLength = appsList.length;

    for (var app = 0; app < mLength; app++) {
        // create row
        var row = document.createElement("tr");

        var noCell = document.createElement("td");
        noCell.innerHTML = (app + 1);

        var nameCell = document.createElement("td");
        nameCell.innerHTML = appsList[app].name;

        var statusCell = document.createElement("td");
        statusCell.innerHTML = appsList[app].deadline;

        var sectionCell = document.createElement("td");
        sectionCell.innerHTML = appsList[app].status;

        row.appendChild(noCell);
        row.appendChild(nameCell);
        row.appendChild(statusCell);
        row.appendChild(sectionCell);

        mTable.appendChild(row);
    }

    document.getElementById("divList").appendChild(mTable);
}