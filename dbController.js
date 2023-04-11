const clientConnection = require('./util/dbConnection')
const { getSecrets } = require('./util/secretsDB')
const { GetItemCommand } = require('@aws-sdk/client-dynamodb');
require('dotenv').config()

exports.dbController = async (req, res) => {
  try {
    const id = req.body.param
    const secret = JSON.parse(await getSecrets())
    const params = {
      TableName: secret.tableName,
      Key: {
        id: { S: id }
      }
    };
    const command = new GetItemCommand(params);
    clientConnection.send(command).then((data) => {
      return res.status(200).json(data.Item)
    })

  } catch (error) {
    console.error("Error form db controller", error);
  }
};


