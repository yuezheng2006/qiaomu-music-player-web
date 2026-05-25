const http = require("node:http");
const { route } = require("../server-handler");

module.exports = async (req, res) => {
  try {
    await route(req, res);
  } catch (error) {
    const status = error.message === "payload_too_large" ? 413 : 500;
    res.status(status).json({ error: error.message || "server_error" });
  }
};
