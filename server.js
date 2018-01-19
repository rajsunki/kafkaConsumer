var kafka = require('kafka-node')
var Consumer = kafka.Consumer
var client = new kafka.Client("localhost:2181")
var consumer = new Consumer(
    client,
    [
      { topic: 'topic_name', partition: 0, offset: 0}
    ],
    {
      fromOffset: true
    }
  );


consumer.on('message', function (message) {
  console.log("received message", message);
});