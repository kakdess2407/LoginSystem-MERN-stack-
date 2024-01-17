const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/signup', { useNewUrlParser: true, useUnifiedTopology: true });

const loginSchema = new mongoose.Schema({
    name: String,
    address: String,
    number: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['login', 'admin'],
        default: 'login',
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const loginModel = mongoose.model('login', loginSchema);

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
});

const AdminModel = mongoose.model('Admin', adminSchema);
const test = new AdminModel({
    email: 'admin@gmail.com',
    password: 'Admin',
});
test.save()
    .then(savedTest => console.log('Test record created:', savedTest))
    .catch(saveErr => console.error('Error creating test record:', saveErr));

module.exports = {loginModel,AdminModel};