const emailConfig = () => {
  const config = {
    credentials: {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: 'email.config',
        pass: '12336',
      },
    }
  };

  if (process.env.NODE_ENV === "development") {

  }

  return config;
};

module.exports = emailConfig();
