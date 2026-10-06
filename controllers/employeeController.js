import Employee from '../models/Employee.js';

export const createEmployee = async (req, res) => {
    try {
        const { first_name, last_name, email, position, department,  salary, date_of_joining } = req.body;

        const employee = await Employee.create({
            first_name,

            last_name,

            email,

            position,

            department,

            salary,

            date_of_joining,

            createdBy: req.user.id
        });


        res.status(201).json({
            message: 'Employee created successfully',
            employee
        });

    } catch (error) {
        res.status(500).json({
            message: 'A server error occurred',
            error: error.message
        });
    }
};

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({ createdBy: req.user.id });
        res.status(200).json({
            employees
        });


    } catch (error) {
        res.status(500).json({
            message: 'A server error occurred',
            error: error.message
        });
    }
};


export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findOne({ _id: req.params.eid, createdBy: req.user.id });


        if (!employee) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }


        res.status(200).json({
            employee
        });


    } catch (error) {
        res.status(500).json({
            message: 'A server error occurred',
            error: error.message
        });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { first_name, last_name, email, position, department,  salary, date_of_joining } = req.body;

        const employee = await Employee.findOneAndUpdate(
            { _id: req.params.eid, createdBy: req.user.id },
            { first_name, last_name, email, position, department, salary, date_of_joining },
            { new: true }
        );


        if (!employee) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }


        res.status(200).json({
            message: 'Employee updated successfully',
            employee
        });


    } catch (error) {
        res.status(500).json({
            message: 'A server error occurred',
            error: error.message
        });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({
            _id: req.query.eid,
            createdBy: req.user.id
});


        if (!employee) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }


        res.status(204).send();


    } catch (error) {
        res.status(500).json({
            message: 'A server error occurred',
            error: error.message
        });
    }
};