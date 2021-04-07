const CreateUser = require("../../application/user_cases/CreateUser");
const findUser = require("../../application/user_cases/FindUserByEmail");

module.exports = {
  async registerUser(req, res) {
    try {

      const {
        name,
        email,
        password,
        active,
        type
      } = req.body;

      const userExist = await findUser(email);

      if (userExist !== null) {
        return res.send({
          ok: false,
          error: 'Email already in use'
        });
      }

      const user = await CreateUser(name, email, password, active, type);

      return res.json({
        ok: true,
        data: user,
        message: 'un_token'
      });

    } catch (e) {
      console.log(e);
    }
  }
};
