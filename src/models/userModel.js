
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
{
    name:{
        type:String,
        require:[true,'Username is required'],
    },
    email:{
        type:String,
        require:[true,'Email is required'],
        unique:true,
    },
    password:{
        type:String,
        require:[true,'Password is required'],
        
    }
},{timestamps:true}
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;


