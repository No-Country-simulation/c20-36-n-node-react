const catchAsync = require('../utils/catchAsync')
const skillService = require("../services/skillService");
const skillGetController = catchAsync(async (req, res) => {
    const { _id } = req.body.tokenData;
    const getSkill = await skillService.getSkill(_id);
    res.status(201).json({error:false,data:getSkill})
});
const skillCreateController=catchAsync(async(req,res)=>{
    const { _id } = req.body.tokenData;
    const data = Object.fromEntries(
      Object.entries(req.body).filter(([key]) => key !== "tokenData")
    );
    const dataSkill ={userID:_id,...data}
    const dataResponse=await skillService.createSkill(dataSkill)
    res.status(202).json({error:false,data:dataResponse})
})
const skillUpdateController = catchAsync(async (req, res) => {
    const {ID}=req.params
    const {body}=req
    const data = Object.fromEntries(
      Object.entries(body).filter(([key]) => key !== "tokenData")
    );
    const dataResponse=await skillService.updateSkill(data,ID)
    res.status(202).json({ erro: false, data: dataResponse });
});
const skillDeleteController = catchAsync(async (req, res) => {});

module.exports={
    skillGetController,
    skillCreateController,
    skillUpdateController,
    skillDeleteController
}