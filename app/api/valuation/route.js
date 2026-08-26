export async function POST(request) {
  try {
    const body = await request.json();

    const {
      address,
      city,
      state,
      zip,
      beds,
      baths,
      sqft,
      timeframe,
      name,
      email,
      phone,
    } = body;

    // Basic validation
    if (!address || !city || !state || !zip || !name || !email) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const valuationLead = {
      source: 'website-home-valuation',
      timestamp: new Date().toISOString(),
      property: {
        address,
        city,
        state,
        zip,
        beds,
        baths,
        sqft,
        timeframe,
      },
      contact: {
        name,
        email,
        phone,
      },
    };

    // TODO: SEND TO GHL HERE
    //
    // Option 1: Webhook URL
    // await fetch(process.env.GHL_VALUATION_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(valuationLead),
    // });
    //
    // Option 2: Direct GHL API (e.g., create contact + custom fields)
    // await fetch('https://rest.gohighlevel.com/v1/contacts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     ...map valuationLead.contact to contact fields,
    //     customField: JSON.stringify(valuationLead.property),
    //   }),
    // });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Valuation API error:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}