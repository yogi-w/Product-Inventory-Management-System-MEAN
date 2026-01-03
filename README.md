## 📦 Inventory Management System

- A full-stack Inventory Management System built using Angular, Node.js, Express, and MongoDB.
This application allows users to add, update, delete, and view products with a clean and user-friendly interface.

## 🚀 Features

- ➕ Add new products
- ✏️ Update existing products
- ❌ Delete products
- 📋 View product list
- 💰 Price displayed in Indian Currency (₹)
- 🧾 Form validations (required fields, price > 0)
- 🔄 Real-time UI updates (no page refresh)
- 🎯 Only one row editable at a time
- 🚫 Prevents accidental duplicate updates

  

##🛠️ Tech Stack
### Frontend
  - Angular
  - HTML, CSS
  - Template Driven Forms
  - Angular Currency Pipe (INR)

### Backend
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose



## 🧪 Form Validation Rules

- All fields are required
- Price must be greater than 0
- Product Code cannot be changed during update



## 💡 Key Learning Outcomes

- Angular Template Driven Forms
- Two-way data binding (ngModel)
- CRUD operations with MongoDB
- Component-to-service communication
- Conditional UI rendering (*ngIf)
- Handling edit/update state correctly
- Clean UX design principles


## 🔗 API Endpoints

- POST /api/products – Create product
- GET /api/products – Get all products
- PUT /api/products/:id – Update product
- DELETE /api/products/:id – Delete product












