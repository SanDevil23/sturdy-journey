const {Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId:'my-app',
    brokers: ["192.168.1.9:9092"]
});

async function init() {
    const admin = kafka.admin();
    console.log("Admin Connecting....");
    admin.connect();
    console.log("Admin Connection Success.......");

    // topic blue print
    /*
        topic: <String>,                                                        
        numPartitions: <Number>,                                            default:-1
        replicationFator: <Number>,                                         default:-1
        replicaAssignment: <Array>,
        configEntries: <Array>
     */

    await admin.createTopics({
        topics:[
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic Created");

    await admin.disconnect();
}

init();