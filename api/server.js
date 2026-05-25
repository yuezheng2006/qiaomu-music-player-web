const { route, ensureStorage } = require("../server-handler");

// Initialize storage once on cold start
let storageInitialized = false;

module.exports = async (req, res) => {
  try {
    // Ensure storage is initialized
    if (!storageInitialized) {
      await ensureStorage();
      storageInitialized = true;
    }

    // Handle the request
    await route(req, res);
  } catch (error) {
    const status = error.message === "payload_too_large" ? 413 : 500;
    res.statusCode = status;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: error.message || "server_error" }));
  }
};
