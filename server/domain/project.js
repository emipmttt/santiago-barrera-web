module.exports = class {
  constructor(
    id = null,
    title,
    description,
    role,
    date,
    url,
    content
  ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.role = role;
      this.date = date;
      this.url = url;
      this.content = content;
  }
}
