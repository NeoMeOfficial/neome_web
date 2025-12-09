import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CheckoutData {
  customer: {
    name: string;
    email: string;
    city: string;
  };
  program: {
    id: string;
    title: string;
    level: number;
  };
  subscription: {
    type: string;
    price: string;
    total: string;
  };
  timestamp: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const checkoutData: CheckoutData = await req.json();
    console.log('Received checkout data:', JSON.stringify(checkoutData, null, 2));

    // Get webhook URL from settings
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: settings, error: settingsError } = await supabase
      .from('app_settings')
      .select('value')
      .eq('key', 'checkout_webhook_url')
      .single();

    if (settingsError) {
      console.error('Error fetching webhook URL:', settingsError);
      return new Response(JSON.stringify({ success: true, webhook: false, message: 'No webhook configured' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const webhookUrl = settings?.value;

    if (!webhookUrl) {
      console.log('No webhook URL configured, skipping webhook call');
      return new Response(JSON.stringify({ success: true, webhook: false, message: 'No webhook URL configured' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Calling webhook URL:', webhookUrl);

    // Call the webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkoutData),
    });

    console.log('Webhook response status:', webhookResponse.status);

    return new Response(JSON.stringify({ 
      success: true, 
      webhook: true,
      message: 'Webhook triggered successfully' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in checkout-webhook function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
