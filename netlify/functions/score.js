const Anthropic = require("@anthropic-ai/sdk");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: CORS, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: CORS, body: "Method Not Allowed" };
  }

  try {
    const { model, max_tokens, system, messages } = JSON.parse(event.body);

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const response = await client.messages.create({
      model: model || "claude-sonnet-4-6",
      max_tokens: max_tokens || 8000,
      system,
      messages,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", ...CORS },
      body: JSON.stringify(response),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", ...CORS },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
