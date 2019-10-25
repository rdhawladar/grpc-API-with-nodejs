var PROTO_PATH = __dirname + '/userData.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var user_proto = grpc.loadPackageDefinition(packageDefinition).userData;

/**
 * Implements the userDetails RPC method.
 */
function userDetails(call, callback) {
  callback(null, {message: 'Name: ' + call.request.name + ' age: ' + call.request.age});
}

/**
 * Implements the userDetails Again RPC method.
 */
function userDetailsAgain(call, callback) {
  callback(null, {message: 'Last Name: ' + call.request.name});
}

/**
 * Starts an RPC server that receives requests for the UserInfo service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(user_proto.UserInfo.service, 
    {userDetails: userDetails, userDetailsAgain: userDetailsAgain});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
