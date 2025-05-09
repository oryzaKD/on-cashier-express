const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)

const InventorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true, index: true },
  price: { type: String, required: true, index: true },
  cost: { type: String, required: true, index: true },
  stock: { type: String, required: true, index: true },
}, { timestamps: true })

// Add a unique identifier for the counter
InventorySchema.plugin(AutoIncrement, { 
  inc_field: "id",
  id: "inventory_id" // Add this line to make the counter unique
})

module.exports = mongoose.model("Inventory", InventorySchema)
