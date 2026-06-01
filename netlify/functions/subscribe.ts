import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { email, firstName, lastName, industry, source, goals } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // The MailerLite API key provided by the user
    // In a production environment, this should be an env variable, but for this specific request we are integrating it directly since the user provided it to us to use. 
    // Usually it's better to put it in process.env.MAILERLITE_API_KEY
    const API_KEY = process.env.MAILERLITE_API_KEY || "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYzRmMjYzYTE3ZDAwYzUzMjdjOTQxOWViNmM4ZDg1MDJlMzE4OGU1YWVlYWNiNzdhYmExNTIxOWMyODk2NDZmYTgzYWU4NDAyNDE0ZjBjZDkiLCJpYXQiOjE3Nzc2NzU2NTMuMTI1MTMxLCJuYmYiOjE3Nzc2NzU2NTMuMTI1MTM1LCJleHAiOjQ5MzMzNDkyNTMuMTIwMDA0LCJzdWIiOiIxNzY1Njc2Iiwic2NvcGVzIjpbXX0.bueyVvL9oWWM9uiiE5cn5o9XDmgmNHTKqaHVKAN3AYJxbgSC91o9gREOSf2jeONNpMdBls84OJ8juHm1Y3zywaX_6TzMFeA5SzmmVy8Y0WPpJz_nta_ZioEUXWU-tOpd5-giaA05f3VKpukjfZXFggO-Snm86DTFOfgc4n47MBp4J3_4DFuSbRTNGxyvP1zDEMoGnrjzQuYqcuSM4JvMToxShpgd_ZvPXJLc4ZKBqLIe7hdwX0ILQZBVj2IeJmdjb-Bjb6f7vY54x24Kzt8v_82J_CTddknoUn2iLtk76edVm3mjlAsvanVbse6tta3PqUImYGw7f3iWU1SLqhZTAon1RvFiaFJFsy5jrSDC1jna6gU_Z9LtNJAr3-adLqmKxJJqECs2MbEbiWO6ge_Yh9sQ2xtb09wssKe2LXpWpT7PKRcCRlNOEE5Z-sDNAZ9mabDxJks3AsKMmysPcHO2arjLbZUJh6PazaLZ6p6Nkc1Ce2r_AwFX9NNwC6Bzvu29mTtomWYA1zAuHjnIlKzJLW5WaAIymK0HSkjVMzJnOAzIRGpc34CH_RfzpkMTegfCbsCjpj69iQVuYL072vfXWDeuVT7NYZWarmHePwUzhGxccTGJqbEAGPL-5dnQB4pF0DJ30F9Icjup1px_XOu-escDXQ-sxQtrpfPhtY9DQY8";

    // Build the subscriber payload for MailerLite API (v3)
    const payload = {
      email,
      fields: {
        name: firstName ? `${firstName} ${lastName || ''}`.trim() : '',
        last_name: lastName || '',
        industry: industry || '',
        source: source || 'Website',
        about_me: goals || '',
      },
      // You can also add groups here if you know the Group ID
      // groups: ["1234567"]
    };

    // Send request to MailerLite API v3
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("MailerLite API Error:", errorData);
      throw new Error("Failed to subscribe user");
    }

    const data = await response.json();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: any) {
    console.error("Subscription error:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};
