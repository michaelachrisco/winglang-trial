const sdk = require("@winglang/sdk"); // import the wing sdk library
const simulator = new sdk.testing.Simulator({ simfile : "./target/hello.wsim"}); // create an instance of the Simulator
await simulator.start(); // start the simulator 

const queue = simulator.getResource("root/cloud.Queue"); // retrieve the queue resource
await queue.push("Wing")

const bucket = simulator.getResource("root/cloud.Bucket"); // retrieve the bucket resource
await bucket.list() // will show available files
await bucket.get("wing.txt") // will show the file content

//should be [ 'wing.txt' ]
//'Hello, Wing'

//Success!