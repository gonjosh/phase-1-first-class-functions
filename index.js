function callback(name, cb){
    return cb(name)
}
callback('Joshua', function (name) {return 'Hello how are you' + name})