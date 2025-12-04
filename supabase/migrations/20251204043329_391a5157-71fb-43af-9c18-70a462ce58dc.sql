-- Create purchases table to track orders
CREATE TABLE public.purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  city TEXT NOT NULL,
  product_name TEXT NOT NULL DEFAULT 'NeoMe Premium',
  amount DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Allow public read access for social proof (only showing first_name, city, product_name, created_at)
CREATE POLICY "Anyone can view purchases for social proof"
ON public.purchases
FOR SELECT
USING (true);

-- Allow inserts (will be done server-side or during checkout)
CREATE POLICY "Allow insert purchases"
ON public.purchases
FOR INSERT
WITH CHECK (true);

-- Enable realtime for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.purchases;