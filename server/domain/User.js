module.exports = class {
  constructor(
    id = null,
    name,
    email,
    password,
    active,
    type)
  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.active = active;
    this.type = type;
  }
};
