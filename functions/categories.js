exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      categories: [
        {
          name: "Announcements",
          count: 208,
        },
        {
          name: "Expensify Classroom - Help Docs and Webinars",
          count: 505,
        },
        {
          name: "Questions about using Expensify",
          count: 3200,
        },
        {
          name: "Expensify Partners",
          count: 92,
        },
        {
          name: "Expensify.org",
          count: 158,
        },
        {
          name: "Third-party integrations",
          count: 1100,
        },
      ],
    }),
  };
};
