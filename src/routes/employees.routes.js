import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all clients
router.get("/clients", getEmployees);

// GET An Employee
router.get("/clients/:id", getEmployee);

// DELETE An Employee
router.delete("/clients/:id", deleteEmployee);

// INSERT An Employee
router.post("/clients", createEmployee);

router.put("/clients/:id", updateEmployee);

export default router;
