var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

function getHTML(options, callback) {
    //var buffer = [];
    var buffer = '';

    /* Add your code here */
    https.get(options, function (response) {
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
            callback(buffer);
            //console.log(buffer);
            console.log('Response stream complete.');
        })
    })

}

function printHTML(html) {
    console.log(html);

}
getHTML(requestOptions, printHTML);


//by passing options thru function we can call host and path 
//from key-value objects in another module