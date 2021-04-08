const environment = () => {

  const environment = {
    database: {
      user: 'sb01',
      password: 'Artiswisdom',
      url: 'mongodb+srv://sb01:Artiswisdom@sb01.yh0n5.mongodb.net/SB01?retryWrites=true&w=majority',
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
