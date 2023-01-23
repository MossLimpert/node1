const myData = require("./mydata.js");
const _ = require("underscore");
const http = require("http");

const helloWorld = () => {
    console.log("Hello everyone!");
};

helloWorld();

myData.getMessage();

const myArray = [1.2,3,4,5];
console.log(_.chunk(myArray, 3));

// server stuff
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Server");
    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on port ${port}`);
    
});