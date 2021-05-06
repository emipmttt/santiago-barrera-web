const settingsModel = require("../../domain/Setting");
const settingsRepository = require("../../infrastructure/repositories/SettingsRepository");

module.exports = {
  async createSetting(req, res) {
    try {
      const model = new settingsModel(null, req.body.availableToWork, req.body.words);
      const setting = await settingsRepository.create(model);

      return res.json({
        ok: true,
        data: setting,
        message: "SETTINGS CREATED"
      });

    } catch (e) {

      return res.json({
        error: e.toString()
      });
    }
  },

  async updateSettings(req, res) {
    try {
      await settingsRepository.update(req.body._id, req.body);

      return res.json({
        ok: true,
        data: "UPDATED"
      });

    } catch (e) {
      return res.json({
        error: e.toString()
      });
    }
  },

  async getSettings(req, res) {
    try {
      const settings = await settingsRepository.getSettings(req.body._id);

      return res.json({
        ok: true,
        data: settings,
        message: "SETTINGS"
      });
    } catch (e) {

      return res.json({
        error: e.toString()
      });
    }
  }
}
