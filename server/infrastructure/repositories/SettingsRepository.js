const Settings = require("../orm/mongoose/schemas/Content");

module.exports = {
  async create(userModel) {
    const settings = new Settings(userModel);
    return settings.save();
  },

  async update(settingsId, model) {
    return Settings.updateOne({
      _id: settingsId
    }, {
      availableToWork: model.availableToWork,
      words: model.words,
    })
  },

  async getSettings(settingsId) {
    return Settings.findOneAndUpdate({
      _id: settingsId
    })
  }
};
