const router = require("express").Router()
const {userinfo} = require("../models")



router.get("/list",async(request,response)=>{


    const records = await userinfo.findAll() ;
    response.json(records)
})


router.post("/save",async(request,response)=>{


   const data = request.body;
   
   const emp = await userinfo.create(data)
   
   response.json({msg:"User data saved"})
}) 

module.exports = router