exports.handler = async function(event) {
  return await (new (require("/Users/michaelchrisco/.nvm/versions/node/v18.11.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/queue.addconsumer.inflight.js")).QueueAddConsumerHandlerClient({ handler: new ((function(){
return class Handler {
  constructor(clients) {
    for (const [name, client] of Object.entries(clients)) {
      this[name] = client;
    }
  }
  async handle(message) {
  const { bucket } = this;
  (await bucket.put("wing.txt",`Hello, ${message}`));
}

};
})())({
bucket: (function(env) {
        let handle = process.env[env];
        if (!handle) {
          throw new Error("Missing environment variable: " + env);
        }
        return $simulator.findInstance(handle);
      })("BUCKET_HANDLE_2cd0933d")
}) })).handle(event);
};