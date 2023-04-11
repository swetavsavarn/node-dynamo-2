const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
require('dotenv').config()
const client = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    }
});

module.exports = client