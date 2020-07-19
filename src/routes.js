const express = require("express");

router = express.Router();

const ControllerClient = require("./controllers/Client");
const ControllerSale = require("./controllers/Sale");

// Clients
router
  .get("/clients", ControllerClient.index)
  .post("/clients", ControllerClient.create)
  .delete("/clients/:client_id", ControllerClient.delete)
  .delete("/clients", ControllerClient.deleteAll);

// Sales
router
  .post("/sales", ControllerSale.index)
  .get("/sales/:client_id", ControllerSale.indexByClient)
  .post("/sales/:client_id", ControllerSale.create)
  .delete("/sales", ControllerSale.deleteAll);

module.exports = router;
