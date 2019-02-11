var https = require('https');

function getAndPrintHTML() {
    var buffer = "";
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    /* Add your code here */
    https.get(requestOptions, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            buffer = buffer + data;
            //printing in this parameter may print every chunk
        });
        //as each chunk recieved, assign to variable
        //make array from varibles
        //print variable.
        response.on('end', function () {
            console.log(buffer); // printing here before break prints once
            console.log('Response stream complete.');
        })
    })

}
getAndPrintHTML();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var https = require('https');

// function getAndPrintHTMLChunks() {

//     var requestOptions = {
//         host: 'sytantris.github.io',
//         path: '/http-examples/step1.html'
//     };
//     /* Add your code here */
//     https.get(requestOptions, function (response) {
//         response.setEncoding('utf8');

//         response.on('data', function (data) {
//             //
//             console.log('Chunk Recieved. Length:', data.length + '\n');
//         });
//         response.on('end', function () {
//             console.log('Response stream complete.');
//         })
//     })

// }
// getAndPrintHTMLChunks();