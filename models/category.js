const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true })

// Add a unique identifier for the counter
CategorySchema.plugin(AutoIncrement, { 
  inc_field: "id",
  id: "category_id" // Add this line to make the counter unique
})

module.exports = mongoose.model("Category", CategorySchema)
