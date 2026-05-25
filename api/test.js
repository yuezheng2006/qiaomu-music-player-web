module.exports = async (req, res) => {
  console.log("Test function invoked:", req.url);
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({
    ok: true,
    message: "Test endpoint working",
    url: req.url,
    method: req.method
  }));
};
