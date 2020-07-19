const Sale = require("../models/Sale");
const { endOfDay, startOfDay } = require("date-fns");
const moment = require("moment");

module.exports = {
  async index(req, res) {
    const { date } = req.body;
    const date_modify = new Date(date);
    console.log(date_modify);
    try {
      const sales = await Sale.find({
        created_at: {
          $gte: date_modify,
          $lte: moment(date_modify).utc().endOf("day"),
        },
      })
        .populate("client_id")
        .sort({ created_at: -1 });
      return res.send({ sales });
    } catch (error) {
      console.log(error);
    }
  },
  async indexByClient(req, res) {
    const { client_id } = req.params;
    try {
      const sales = await Sale.find({ client_id }).sort({ created_at: -1 });
      return res.send({ sales });
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    const { client_id } = req.params;
    const { description, value, type } = req.body;
    try {
      const sale = await Sale.create({ client_id, description, value, type });
      return res.send({ sale });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteAll(req, res) {
    try {
      await Sale.deleteMany({});
      return res.send();
    } catch (error) {
      console.log(error);
    }
  },
};
