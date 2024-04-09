const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  sName: {
    type: String,
    require: true,
  },
  sAccountNumber: {
    type: String,
    require: true,
  },
  rName: {
    type: String,
    require: true,
  },
  rAccountNumber: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  transactionID: {
    type: String,
    require: true,
  },
  transactionType: {
    type: String,
    require: true,
  },
});

const transactionsModel = new mongoose.model("transactions", transactionSchema);

module.exports = transactionsModel;
