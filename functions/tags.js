exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      tags: [
        "Deep Dive 230",
        "Track 50",
        "How-to 390",
        "FAQ 290",
        "Success approved! 212",
        "tax",
        "demo 1",
        "newsletter",
        "Webinar",
        "Cash",
        "Travel 125",
        "Two Factor Authentication (2FA)",
      ],
    }),
  };
};
