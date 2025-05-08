const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// CREATE
router.post('/', async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ (All)
// router.get('/', async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.json(customers);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
// GET /api/customers
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find(); // Fetching all inventory
    res.json(inventory);
  } catch (err) {
    console.error('Error fetching inventory:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// READ (Single)
router.get('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
    res.json(inventory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;