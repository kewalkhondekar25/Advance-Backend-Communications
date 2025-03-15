import { Kafka } from "kafkajs";

//initialize
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
});

//create producer, consumer
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

const main = async () => {
  try {
    //producing

    //connect producer
    await producer.connect();
    //publish events
    await producer.send({
      topic: "quickstart-events",
      messages: [{ value: "Hello KafkaJS user!"}]
    });

    //consuming

    //connects consumer
    await consumer.connect();
    //subscripe to topic
    await consumer.subscribe({ topic: "quickstart-events", fromBeginning: true });
    //
    await consumer.run({
      eachMessage: async ({ topic, partition, message}) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value?.toString()
        });
        
      }
    })

  } catch (error) {
    console.log(error);
  }
};

main();