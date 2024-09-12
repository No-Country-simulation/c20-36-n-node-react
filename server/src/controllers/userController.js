const httpStatus = require("http-status");
const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync")

const userGet = catchAsync(async (req, res) => {
  const {_id}=req.body
  const response = await userService.userMe(_id);
  res.status(httpStatus.CREATED).json({ error:false,data: response });
});

const userMeUpdate = async (req, res) => {
  const response = await userService.userUpdate();
  res.json({ msg: response });
};
module.exports = {
  userGet,
  userMeUpdate,
};
