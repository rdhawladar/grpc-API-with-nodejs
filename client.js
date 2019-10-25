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

function main() {
  var client = new user_proto.UserInfo('localhost:50051',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'Hawladar';
  }
  client.userDetails({name: "riad", age: "50"}, function(err, response) {
    console.log('Details:', response.message);
  });
  client.userDetailsAgain({name: user}, function(err, response) {
    console.log('Details:', response.message);
  });
}

main();
