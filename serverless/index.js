const uuid = require('node-uuid');
const doc = require('dynamodb-doc');
const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
  };

  render = (body) => callback(null, {
    statusCode: '200',
    body: JSON.stringify(body),
    headers: headers,
  });

  renderError = (message) => callback(null, {
    statusCode: '400',
    body: message,
    headers: headers,
  });

  switch (event.httpMethod) {
    case 'GET':
      if (event.queryStringParameters == null) renderError('No secret');
      const { id, secret  } = event.queryStringParameters;
      if (id) {
        dynamo.getItem({ TableName: 'lucido-tix', Key: { id: id }, }, (err, res) => {
          if (err) renderError(err.message);
          else render(res.Item);
        });
      } else if (secret == process.env['LUCIDO_SECRET']) {
        dynamo.scan({ TableName: 'lucido-tix' }, (err, res) => {
          if (err) renderError(err.message);
          else render(res);
        });
      } else {
        renderError('Bad secret') 
      }
      break;
    case 'POST':
      const Item = JSON.parse(event.body);
      Item.id = uuid.v4();
      Item.passphrase = makePassphrase();
      Item.created_at = new Date().toISOString();
      const data = { TableName: 'lucido-tix', Item: Item };
      dynamo.putItem(data, (err, res) => {
        if (err) renderError(err.message);
        else render(Item);
      });
      break;
    default:
      renderError(`Unsupported method "${event.httpMethod}"`);
  }
};

const animals = [
  'Lobo',
  'Pollo',
  'Tigre',
  'Tiburón',
  'Serpiente',
  'Coyote',
  'Venado',
  'Delfín',
  'Murciélago',
  'Buitre',
  'Cuervo',
  'Cisne',
  'Loro',
  'Leopardo',
];

const modifier = [
  'dorado',
  'morado',
  'verde',
  'negro',
  'castaño',
  'celeste',
  'verdeagua',
  'ocre',
  'del desierto',
  'marroquí',
  'en la mesa',
  'con cuernos',
  'del infierno',
];

const rand = (array) => array[Math.floor(array.length * Math.random())]

function makePassphrase() {
  return rand(animals) + ' ' + rand(modifier);
}

