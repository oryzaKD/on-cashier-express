// const express = require("express");
// const cors = require("cors");
// const app = express();

// // Middleware
// app.use(cors()); // Allow React to connect
// app.use(express.json()); // Parse JSON requests

// // Temporary database (we'll replace this later)
// let customers = [
//     {
//         id: 1,
//         name: "Sarah Johnson",
//         email: "sarah.j@example.com",
//         phone: "(555) 123-4567",
//         address: "Helsinki",
//         customerType: "regular",
//         notes: "Prefers almond milk in coffee. Allergic to nuts.",
//     },
//     {
//         id: 2,
//         name: "Michael Brown",
//         email: "michael.b@example.com",
//         phone: "(555) 234-5678",
//         address: "Catania",
//         customerType: "regular",
//         notes: "Usually comes during lunch hours.",
//     },
//     {
//         id: 3,
//         name: "Emily Davis",
//         email: "emily.d@example.com",
//         phone: "(555) 345-6789",
//         address: "Edinburgh",
//         customerType: "regular",
//         notes: "Birthday on May 12. Likes window seating.",
//     }
// ];

// // Routes
// app.get("/", (req, res) => {
//     res.send("Customer API is running!");
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// app.get("/api/customers", (req, res) => {
//     res.json(customers);
// });

// app.post("/api/customers", (req, res) => {
//     const newCustomer = {
//         id: customers.length + 1,
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         address: req.body.address,
//         customerType: req.body.customerType,
//         notes: req.body.notes,
//     };
//     customers.push(newCustomer);
//     res.status(201).json(newCustomer);
// });

// app.put("/api/customers/:id", (req, res) => {
//     const customerId = parseInt(req.params.id);
//     const customer = customers.find((c) => c.id === customerId);

//     if (!customer) {
//         return res.status(404).json({ error: "Customer not found" });
//     }

//     customer.name = req.body.name || customer.name;
//     customer.email = req.body.email || customer.email;
//     customer.phone = req.body.phone || customer.phone;
//     customer.address = req.body.address || customer.address;
//     customer.customerType = req.body.customerType || customer.customerType;
//     customer.notes = req.body.notes || customer.notes;

//     res.json(customer);
// });

// app.delete("/api/customers/:id", (req, res) => {
//     const customerId = parseInt(req.params.id);
//     customers = customers.filter((c) => c.id !== customerId);
//     res.status(204).send(); // No content
// });