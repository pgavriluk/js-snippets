var links = document.querySelectorAll("a");
var linkReport = [];
links.forEach(function(link) {
    var reportLine = {
        url: link.getAttribute('href'),
        status: 0,
        message: "",
        element: link
    };
    linkReport.push(reportLine);
})

console.table(linkReport);
