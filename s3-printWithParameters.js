var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};
//by passing options thru function we can call host and path 
//from key-value objects in another module

function getAndPrintHTML(options) {
    //var buffer = [];
    var buffer = '';

    /* Add your code here */
    https.get(Options, function (response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            //buffer.push(data);
            buffer += data
            //printing in this parameter may print every chunk
        });
        //as each chunk recieved, assign to variable. this data 'loops' itself
        //print variable.
        response.on('end', function () {
            //console.log(buffer.join(''));  // printing here before break prints once
            console.log(buffer);
            console.log('Response stream complete.');
        })
    })

}
getAndPrintHTML(requestOptions);