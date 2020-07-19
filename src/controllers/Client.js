const Client = require("../models/Client");
const Sale = require("../models/Sale");
const { deleteMany } = require("../models/Client");

module.exports = {
  async index(req, res) {
    try {
      const clients = await Client.find().sort({ name: 1 });
      return res.send({ clients });
    } catch (error) {
      console.log(error);
    }
  },
  async create(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.send({ client });
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    const { client_id } = req.params;
    try {
      const deleted = await Client.deleteOne({ _id: client_id });
      if (deleted) {
        await Sale.deleteMany({ client_id });
      }
      return res.send();
    } catch (error) {
      console.log(error);
    }
  },
  async deleteAll(req, res) {
    try {
      await Client.deleteMany({});
      return res.send();
    } catch (error) {
      console.log(error);
    }
  },
};
