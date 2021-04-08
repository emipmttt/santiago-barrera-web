const CreateUser = require("../../application/user_cases/CreateUser");
const findUser = require("../../application/user_cases/FindUserByEmail");
const updateUserById = require("../../application/user_cases/UpdateUserById");
const deleteById = require("../../application/user_cases/DeleteUserById");

const { hash, compare } = require("../../infrastructure/security/HashManager");
const { generate } = require("../../infrastructure/security/TokenManager");

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

      const passwordHash = await hash(password);
      const user = await CreateUser(name, email, passwordHash, active, type);

      return res.json({
        ok: true,
        data: user,
        message: await generate({
          id: user.id,
          name,
          email,
        })
      });

    } catch (e) {
      console.log(e);
    }
  },

  async loginUser(req, res) {
    try {

      const userExist = await findUser(req.body.email);

      const wrongResponse = {
        ok: false,
        error: 'Wrong credentials'
      };

      if (userExist === null) return res.json(wrongResponse);

      const passwordIsCorrect = await compare(req.body.password, userExist.password);

      if (!passwordIsCorrect) return res.json(wrongResponse);

      const token = await generate({
        id: userExist.id,
        name: userExist.id,
        email: userExist.email
      });

      return res.json({
        ok: true,
        data: userExist,
        message: token
      });


    } catch (e) {
      console.log(e);
    }
  },

  async updateUser(req, res) {
    try {
      const id = req.params.id;
      await updateUserById(id, req.body);

      return res.json({
        ok: true,
        message: 'Updated'
      });
    } catch (e) {
      console.log(e);
    }
  },

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      await deleteById(id);

      return res.json({
        ok: true,
        message: 'Deleted'
      });

    } catch (e) {
      console.log(e);
    }
  }
};
