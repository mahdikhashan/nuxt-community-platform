exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      token: "my_very_own_private_token",
    }),
  };
};
