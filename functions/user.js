exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      user: {
        name: "Mahdi Khashan",
        email: "mahdikhashan1@gmail.com",
        id: "591443513248",
      },
    }),
  };
};
