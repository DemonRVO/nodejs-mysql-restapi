import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { validateEmployee, validateId } from "../middleware/validator.middleware.js";

const router = Router();

// All routes are protected with authentication
router.use(verifyToken);

// GET all clients
router.get("/clients", getEmployees);

// GET An Employee
router.get("/clients/:id", validateId, getEmployee);

// DELETE An Employee
router.delete("/clients/:id", validateId, deleteEmployee);

// INSERT An Employee
router.post("/clients", validateEmployee, createEmployee);

// UPDATE An Employee
router.put("/clients/:id", validateId, validateEmployee, updateEmployee);

export default router;
