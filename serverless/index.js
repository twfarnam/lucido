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
      const badSecret = (
        event.queryStringParameters == null ||
        event.queryStringParameters.secret != process.env['LUCIDO_SECRET']
      )
      if (badSecret) return renderError('Bad secret');
      dynamo.scan({ TableName: 'lucido-tix' }, (err, res) => {
        if (err) return renderError(err.message);
        render(res);
      });
      break;
    case 'POST':
      const Item = JSON.parse(event.body);
      Item.id = uuid.v4();
      Item.passphrase = makePassphrase();
      const data = { TableName: 'lucido-tix', Item: Item };
      dynamo.putItem(data, (err, res) => {
        if (err) renderError(err.message);
        render(Item);
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

const colors = [
  'dorado',
  'morado',
  'azul',
  'verde',
  'negro',
  'amarillo',
  'gris',
  'castaño',
  'celeste',
  'verdeagua',
  'rojo',
  'ocre',
];

const modifier = [
  'del desierto',
  'de Asia',
  'marroquí',
  'en la mesa',
  'con cuernos',
  'encuerado',
  'del infierno',
];

const rand = (array) => array[Math.floor(array.length * Math.random())]

function makePassphrase() {
  return [ rand(animals), rand(colors), rand(modifier), ].join(' ') 
}

