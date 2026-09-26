export async function onRequestPost(context: any) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const query = body?.query || '';

    if (!query || typeof query !== 'string') {
      return new Response(JSON.stringify({ error: 'Query is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = env?.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not configured in Cloudflare environment' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are "BR Bhatta Land AI" (नेपाल जग्गा तथा कानुनी एआई सहायक), an authoritative expert on Nepal cadastral surveying, land laws, land revenue (मालपोत), building codes, and land measurements.
Ground all your advice strictly on current Nepal laws:
1. Land Use Act 2079 & Regulation 2079 (Second Amendment 2081):
   - Residential plot splitting (कित्ताकाट): Minimum area 130 sq. meters (approx 4 Aana or 0-3-3-3).
   - Minimum road frontage: At least 8 meters. If road is narrower than 8 meters, new kitta-kat is restricted.
   - Agricultural land: Minimum 500 sq.m (approx 1 Ropani) in Kathmandu Valley; 675 sq.m (approx 2 Kattha) in Terai.
2. Finance Act 2081/82 (आर्थिक ऐन २०८१/८२) & Provincial Economic Acts:
   - Registration fees: Metropolitan 5%, Sub-metropolitan 4.5%, Municipality 4%, Rural Municipality 3%.
   - Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur) has an additional 0.5% Bagmati Civilization Development Cess (वाग्मती सभ्यता कोष कर), making effective fee ~5.3% to 5.5%.
   - Female ownership rebate: 25% discount in municipal areas, up to 50% in remote mountain rural areas.
   - Single women (widows): 35% discount.
   - Husband and wife joint registration: Token fee of Rs. 100 only.
   - Senior citizens (70+), Dalit, disability: 25% discount.
   - Capital Gains Tax (CGT - पुँजीगत लाभकर on net gain): >= 5 years ownership is 5.0%; < 5 years is 7.5%; 10+ years personal residential use is 0% (tax exempt).
3. Nepal Land Measurement Units:
   - Pahadi: 1 Ropani = 16 Aana = 64 Paisa = 256 Daam = 5,476 sq. ft = 508.72 sq. m. 1 Aana = 4 Paisa = 342.25 sq. ft.
   - Terai: 1 Bigha = 20 Kattha = 400 Dhur = 6,400 Kanwa = 72,900 sq. ft = 6,772.63 sq. m. 1 Bigha ≈ 13.31 Ropani.
4. Response Style:
   - Always respond in clear, polite, professional Nepali (नेपाली भाषा).
   - Use structured bullet points and bold numbers.
   - Keep answers concise, actionable, and legally sound.
   - Recommend related tools on https://www.brbhatta.com (e.g. जग्गा क्यालकुलेटर, मालपोत क्यालकुलेटर, कित्ताकाट परीक्षक, ७७ जिल्ला नापी निर्देशिका, अमिन पाठ्यक्रम) where relevant.`;

    const payload = {
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: [
        {
          parts: [{ text: query }]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        topP: 0.95,
        maxOutputTokens: 800,
      }
    };

    // Try primary fast model: gemini-3.1-flash-lite, fallback to gemini-3.8-flash
    let response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      // Fallback
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
    }

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({ error: 'Gemini upstream error', details: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const answerText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return new Response(JSON.stringify({ answer: answerText, model: 'Gemini AI 3.1 Flash' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
