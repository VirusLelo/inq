var request=require('request');
var keys=require('./enum/ApiKeys');
var urls=require('./enum/Urls');
var statusCode=require('./enum/HttpStatusCode');
var fse = require('fs-extra');
exports.getSearchBasedOnQuery= function(req,res){
   console.log("getSearchBasedOnQuery");
   var query=urls.SEARCH_URL+'?query='+req.query.text+'&key='+keys.SEARCH_KEY;
    request({
        method: "GET",
        uri: query,
        headers: {
            "Content-Type": "application/json"
        }
    },function(error, httpResponse, body) {
        if(error){
            console.log("error occured");
        }
        if(body){
            res.send(body);
        }
        //console.log("Satyam Chaudhary",httpResponse);
    });
}