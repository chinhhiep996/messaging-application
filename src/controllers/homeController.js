const getHome = (req, res) => {
  res.render("main/home/home", {
    success: req.flash("success")
  });
};

module.exports = {
  getHome
};
