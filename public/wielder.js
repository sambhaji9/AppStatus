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
                console.log(httpRequest.responseText);
            }
        }
    };
    httpRequest.open("GET", "http://127.0.0.1:3031/list_users", true);
    httpRequest.send();
}