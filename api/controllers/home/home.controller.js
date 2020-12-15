class HomeController {
  welcome(req, res) {
    return res
      .status(200)
      .send({
        success: true,
        message: 'Server is up and running',
      });
  }
}

module.exports = HomeController;
