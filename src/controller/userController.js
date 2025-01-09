const userModel = require("../models/userModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//logout controller
const logoutController=async(req,res)=>{
    try{
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Logout failed",
          });
        }
        res.status(200).json({
          success: true,
          message: "Logout successful",
        });
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
}
module.exports = { loginController, registerController,loginController };