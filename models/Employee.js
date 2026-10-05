import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        trim: true
    },

    last_name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    position: {
        type: String,
        required: true,
        trim: true
    },

    salary: {
        type: Number,
        required: true
    },

    date_of_joining: {
        type: Date,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;