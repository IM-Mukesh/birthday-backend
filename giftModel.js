const mongoose = require("mongoose");
const giftSchema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    giftName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("gift", giftSchema);
