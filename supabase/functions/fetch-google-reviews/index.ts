import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { placeId } = await req.json();
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');

    if (!apiKey) {
      throw new Error('Google Places API key not configured');
    }

    if (!placeId) {
      throw new Error('Place ID is required');
    }

    console.log('Fetching reviews for place ID:', placeId);

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google API error:', data);
      throw new Error(`Google API returned status: ${data.status}`);
    }

    const reviews = data.result?.reviews || [];
    const rating = data.result?.rating || 0;
    const totalRatings = data.result?.user_ratings_total || 0;

    console.log(`Successfully fetched ${reviews.length} reviews`);

    return new Response(
      JSON.stringify({ 
        reviews,
        rating,
        totalRatings,
        success: true 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in fetch-google-reviews:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        success: false 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
