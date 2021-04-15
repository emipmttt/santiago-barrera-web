module.exports = class {
  constructor(
    id = null,
    type,
    content,
    belongsTo
  ) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.belongsTo = belongsTo;
  }
}
