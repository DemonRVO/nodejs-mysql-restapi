import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    let rows;
    
    if (req.query.destination) {
      [rows] = await pool.query(
        "SELECT * FROM employee WHERE destination = ?",
        [req.query.destination]
      );
    } else {
      [rows] = await pool.query("SELECT * FROM employee");
    }

    res.json({
      status: 'success',
      data: rows
    });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ 
      status: 'error',
      message: "An error occurred while fetching employees",
      error: error.message 
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ 
        status: 'error',
        message: "Employee not found" 
      });
    }

    res.json({
      status: 'success',
      data: rows[0]
    });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ 
      status: 'error',
      message: "An error occurred while fetching the employee",
      error: error.message 
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ 
        status: 'error',
        message: "Employee not found" 
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ 
      status: 'error',
      message: "An error occurred while deleting the employee",
      error: error.message 
    });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.status(201).json({
      status: 'success',
      data: {
        id: rows.insertId,
        name,
        salary
      }
    });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ 
      status: 'error',
      message: "An error occurred while creating the employee",
      error: error.message 
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        status: 'error',
        message: "Employee not found" 
      });
    }

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

    res.json({
      status: 'success',
      data: rows[0]
    });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ 
      status: 'error',
      message: "An error occurred while updating the employee",
      error: error.message 
    });
  }
};
