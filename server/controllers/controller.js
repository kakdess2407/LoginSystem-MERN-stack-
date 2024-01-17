const user = require("../models/module");
const loginModel = user.loginModel;
const AdminModel = user.AdminModel;

async function handleGetlogin(req,res){
    loginModel.find({})
    .then(login=>res.json(login))
    .catch(err=>res.json(err))
}

async function handleGetadmin(req,res){
    try {
        const data = await AdminModel.find();
        res.json(data);
    } catch (err) {
        res.json({ error: "Error" });
    }
}

async function handleSignup(req,res){
    try {
        const { email } = req.body;
        const existingUser = await loginModel.findOne({ email });
        if (existingUser) {
            if (existingUser.deleted) {
                const updatedUser = await loginModel.findByIdAndUpdate(
                    existingUser._id,
                    { $set: { ...req.body, deleted: false } },
                    { new: true }
                );
                return res.json(updatedUser);
            } 
            else 
            {
                return res.status(400).json({ error: 'User already exists' });
            }
        } 
        else 
        {
            const newlogin = new loginModel(req.body);
            await newlogin.save();
            res.json(newlogin);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

async function handleAdminSignup(req,res){
    try {
        const newAdmin = new AdminModel(req.body);
        await newAdmin.save();
        res.json(newAdmin);
    } catch (err) {
        res.json({ error: "Error" });
    }
}

async function handleGetsignupByid(req,res){
    try {
        await loginModel.findByIdAndRemove(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.json({ error: "Error" });
    }
}

async function handleGetdeleteByid(req,res){
    try {
        const id = req.params.id;
        const softDeletedLogin = await loginModel.findByIdAndUpdate(
            id,
            { $set: { deleted: true } },
            { new: true }
        );

        if (!softDeletedLogin) {
            return res.status(404).json({ error: 'Record not found' });
        }

        res.json(softDeletedLogin);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handleGetloginByid(req,res){
    const id = req.params.id;
    loginModel.findById({_id:id})
    .then(login=>res.json(login))
    .catch(err=>res.json(err))
}

async function handleUpdateloginByid(req,res){
    const id = req.params.id;
    loginModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        address:req.body.address,
        number:req.body.number,
        email:req.body.email,
        password:req.body.password,
    })
    .then(login=>res.json(login))
    .catch(err=>res.json(err))
}

module.exports = {
    handleGetlogin,
    handleGetadmin,
    handleSignup,
    handleAdminSignup,
    handleGetsignupByid,
    handleGetdeleteByid,
    handleGetloginByid,
    handleUpdateloginByid,
}