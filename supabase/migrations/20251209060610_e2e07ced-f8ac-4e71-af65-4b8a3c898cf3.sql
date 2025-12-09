-- Add program_id and subscription_type columns to purchases table
ALTER TABLE public.purchases 
ADD COLUMN program_id text,
ADD COLUMN subscription_type text,
ADD COLUMN email text;

-- Create settings table for webhook configuration
CREATE TABLE public.app_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read for settings (webhook URL etc)
CREATE POLICY "Anyone can view settings" 
ON public.app_settings 
FOR SELECT 
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_app_settings_updated_at
BEFORE UPDATE ON public.app_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default webhook setting (empty, to be configured)
INSERT INTO public.app_settings (key, value) VALUES ('checkout_webhook_url', '');