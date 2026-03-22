const Anthropic = require("@anthropic-ai/sdk");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

module.exports = async (req, res) => {
  // Set CORS headers
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  try {
    const { model, max_tokens, system, messages } = req.body;
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: model || "claude-sonnet-4-6",
      max_tokens: max_tokens || 8000,
      system,
      messages,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
