const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const getHeaders = () => ({
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
});

const jsonResponse = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    return res.end();
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return jsonResponse(res, 500, {
      error: "Missing Supabase environment variables",
    });
  }

  if (req.method !== "GET") {
    return jsonResponse(res, 405, { error: "Method not allowed" });
  }

  const shouldIncrement = req.query.increment === "true";

  try {
    if (shouldIncrement) {
      const rpcResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/increment_visitor_counter`,
        {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({}),
        },
      );

      if (!rpcResponse.ok) {
        const errorText = await rpcResponse.text();
        console.error("RPC Error:", rpcResponse.status, errorText);
        return jsonResponse(res, 500, { error: errorText });
      }

      const value = Number(await rpcResponse.json());

      return jsonResponse(res, 200, {
        count: Number.isFinite(value) ? value : 0,
      });
    }

    const getResponse = await fetch(
      `${SUPABASE_URL}/rest/v1/visitor_counter?select=count`,
      {
        headers: getHeaders(),
      },
    );

    const data = await getResponse.json();
    const value = Number(data?.[0]?.count ?? 0);

    return jsonResponse(res, 200, {
      count: Number.isFinite(value) ? value : 0,
    });
  } catch (err) {
    console.error("API Error:", err);
    return jsonResponse(res, 500, { error: "Internal error" });
  }
}
