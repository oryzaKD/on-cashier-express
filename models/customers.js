const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  customerType: {
    type: String,
    required: true,
    enum: ["regular", "premium", "vip"],
  },
  notes: { type: String, required: true, unique: true },
}, { timestamps: true })

// Add a unique identifier for the counter
CustomerSchema.plugin(AutoIncrement, { 
  inc_field: "id",
  id: "customer_id" // Add this line to make the counter unique
})

module.exports = mongoose.model("Customer", CustomerSchema)
