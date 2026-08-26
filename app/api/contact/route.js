export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, intent, message } = body;

    // Basic validation
    if (!name || !email || !intent) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Shape data for forwarding
    const lead = {
      source: 'website-contact',
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      intent,
      message,
    };

    // TODO: SEND TO GHL HERE
    //
    // Option 1: Webhook (simplest)
    // await fetch('https://hooks.zapier.com/... or GHL webhook URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(lead),
    // });
    //
    // Option 2: Direct GHL API
    // await fetch('https://rest.gohighlevel.com/v1/leads', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     ...map lead to GHL contact fields...
    //   }),
    // });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}