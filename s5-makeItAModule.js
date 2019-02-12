var https = require('https');
module.exports = function getHTML(options, callback) {


    // var requestOptions = {
    //     host: 'sytantris.github.io',
    //     path: '/http-examples/step4.html'
    // };


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



    // function printHTML(html) {
    //     console.log(html);

    // }
    // getHTML(requestOptions, printHTML);

};