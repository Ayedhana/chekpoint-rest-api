
const router=require ("express").Router();
const User = require("../models/user");
router.post("/createUser", async (req, res) => {
    try {
        const {nom,prenom,email,télephone}=req.body;
        const user= await User.create({nom,prenom,email,télephone})
        res.status(200).json({status:true,msg:"created",data:user})

    } catch (error) {
       console.log(error) 
       res.status(500).json({status:false,msg:'Not created'})
    }
});
router.get("/userList",async (req,res)=>{
    try {
        const userList= await User.find({})
        res.status(200).json({status:true,msg:'voila la liste des utilisateurs',data:userList})
    } catch (error) {
        res.status(500).json({status:false,msg:'Not found'})
    }
})
router.delete("/deleteUser/:id",async(req,res)=>{
    try {
        let { id } = req.params;
        let user = User.findById(id);
        if (user) {
          await User.findByIdAndDelete(id);
          res.status(200).json({ status: true, msg: "contact has been deleted" });
        } else {
          res.status(200).json({ status: false, msg: "user not found" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, msg:error });  
    }

});
router.put("/updateUser/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let user= await User.find(id);
        if (user)
        { await User.findByIdAndUpdate(id,{...req.body},{new:true})
        
        res.status(200).json({status: true, msg: "user has been updated",data:user,
          });}
        else{res.status(200).json({status:false,msg:'user not found'})}
        
    } catch (error) {
         res.status(500).json({ status: false, msg:error}) 
    }
})





module.exports=router