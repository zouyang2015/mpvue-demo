module.exports = async (ctx, next) => {
  ctx.state.data = {
    msg: "小程序后台demo"
  };
};
