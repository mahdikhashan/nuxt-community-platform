var jwt = require('jsonwebtoken');

exports.handler = async function (event, context) {
  let credentials = JSON.parse(event.body);
  let token = jwt.sign(
    {
      username: credentials.username,
      password: credentials.password,
    },
    "secret-no-laugh"
  );

  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        token: token,
      }),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "login failed",
      }),
    };
  }
};
