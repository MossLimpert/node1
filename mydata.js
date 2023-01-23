const message = "Hello other file.";
// can do common js (module.exports) or es6 modules, type must be set to es6 though. eventually we will move over
const getMessage = () => {
    console.log(message);
    return message;
}

// everything is a module
module.exports = {
    getMessage
};