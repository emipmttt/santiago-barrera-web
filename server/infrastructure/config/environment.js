const environment = () => {
  const environment = {
    database: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      url: process.env.DB_URL
    },

    jsonwebtoken: {
      secret: "SER_DEV_ES_GENIAL"
    }
  };

  console.log(environment)

  if (process.env.NODE_ENV === "development") {
    // TODO: HANDLE THIS
  }

  return environment;
};

module.exports = environment();
