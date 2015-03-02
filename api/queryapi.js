var request=require('request');
var keys=require('./enum/ApiKeys');
var urls=require('./enum/Urls');
var statusCode=require('./enum/HttpStatusCode');
var fse = require('fs-extra');
exports.getSearchBasedOnQuery= function(req,res){
   console.log("getSearchBasedOnQuery");
   var searchQuery=req.query.text+' in '+req.query.location;
   var query=urls.SEARCH_URL+'?query='+searchQuery+'&key='+keys.SEARCH_KEY;
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
exports.autocompleteforlocation= function(req, res){
    console.log("autocompleteforlocation");
    var query=urls.AUTOCOMPLETE_URL+'?input='+req.query.text+'&types=(regions)&distance=nearby&key=AIzaSyAtW3cJKs8_TAFnLYLg4mz-Ik9SKNtEkKM';
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