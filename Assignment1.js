// this IS A TEST!!!!!!!!!!!!!!!!

var http = require('http'); /* expose http object to var http */
var url = require('url'); /* expose url object to var url */
var querystring = require('querystring'); 

var server = http.createServer(function (request, response) {

 // req -> request object; res -> response object
  
	var query = url.parse(request.url).query;
	var route = request.url.split("?")[0];
	var params = querystring.parse(query);
	
	

  //console.log(req.url);
  //console.log(route);
  //console.log(params);
  
	if (route == "/getFibonacci") {
		response.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
		var fibRecursion = function(n){
			if (n == 2){
				return [0,1];
			}
			else if( n == 1 ){
				return [0];
			}
			else{
				var x = fibRecursion(n-1);
				x[x.length] = x[x.length - 1] + x[x.length-2]
				return x;
			}
		}
	
	var s = parseFloat(params.a);
	var r = fibRecursion(s);
	
	response.end(r + "\n"); // send response body
	}
  
	else{ // if route is not in any of the above
		response.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
		response.end("unidentified route"); // send response body
	}
	
	
 });
  
 
  
 
   // create an http server
server.listen(1337, "127.0.0.1"); // make server listen to port 1337

console.log('Server running at http://127.0.0.1:1337/');
