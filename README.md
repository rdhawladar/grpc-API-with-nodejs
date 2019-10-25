gRPC API call from (server and client) in  (Node.js)
===========================

PREREQUISITES
-------------

- `node`: This requires Node 0.12.x or greater.

INSTALL
-------

   ```sh
   $ # Get the gRPC repository
   $ #Enter into the folder
   $ npm install
   ```

TRY IT!
-------

There are two ways to generate the code needed to work with protocol buffers in Node.js - one approach uses [Protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/) to dynamically generate the code at runtime, the other uses code statically generated using the protocol buffer compiler `protoc`.
 - Run the server

   ```sh
   $ # from this directory
   $ node server.js
   ```

 - Run the client

   ```sh
   $ # from this directory
   $ node client.js
   ```
