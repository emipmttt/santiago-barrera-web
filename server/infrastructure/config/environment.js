const environment = () => {

  const environment = {
    database: {
      user: 'CHRISTOPHER_WEBIN',
      password: 'MONGO_PRUEBAS',
      url: 'mongodb+srv://CHRISTOPHER_WEBIN:MONGO_PRUEBAS@cluster0.dqukd.mongodb.net/app?retryWrites=true&w=majority',
    },

    jsonwebtoken: {
      secret: 'SER_DEV_ES_GENIAL'
    }
  }

  if (process.env.NODE_ENV === 'development') {
    // TODO: HANDLE THIS
  }


  return environment;
};

module.exports = environment();
