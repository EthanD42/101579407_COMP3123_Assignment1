import express from 'express';
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employeeController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { validateEmployee, validateEmployeeId, validateEmployeeQueryId } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/employees', authenticateToken, validateEmployee, createEmployee);
router.get('/employees', authenticateToken, getEmployees);
router.get('/employees/:eid', authenticateToken, validateEmployeeId, getEmployeeById);
router.put('/employees/:eid', authenticateToken, validateEmployeeId, validateEmployee, updateEmployee);
router.delete('/employees', authenticateToken, validateEmployeeQueryId, deleteEmployee);

export default router;