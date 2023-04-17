exports.handler = async function(event) {
  return await (new (require("/Users/michaelchrisco/.nvm/versions/node/v18.11.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/queue.addconsumer.inflight.js")).QueueAddConsumerHandlerClient({ handler: new ((function(){
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
bucket: new (require("/Users/michaelchrisco/.nvm/versions/node/v18.11.0/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/bucket.inflight")).BucketClient(process.env["BUCKET_NAME_d755b447"], process.env["BUCKET_NAME_d755b447_IS_PUBLIC"])
}) })).handle(event);
};