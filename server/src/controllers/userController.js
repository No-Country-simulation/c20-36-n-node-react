const httpStatus = require("http-status");
const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync")

const userGet = catchAsync(async (req, res) => {
  const {_id}=req.body.tokenData
  const response = await userService.userMe(_id);
  res.status(httpStatus.CREATED).json({ error:false,data: response });
});

const userMeUpdate = catchAsync(async (req, res) => {
  const {_id} = req.body.tokenData;
  const data=Object.fromEntries(
    Object.entries(req.body).filter(([key])=>key !== 'tokenData')
  )
  const response = await userService.userUpdate(_id,data);
  if(response==0){
    res.status(httpStatus.CREATED).json({ error:true,data:"Ningun registro actualizado" });
  }
  const updateUser=await userService.userMe(_id)
  res.status(httpStatus.CREATED).json({ error: false, data:updateUser });
})
module.exports = {
  userGet,
  userMeUpdate,
};
