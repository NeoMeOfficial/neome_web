import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Save, LogOut, ArrowLeft, Link as LinkIcon } from 'lucide-react';

const AdminSettings = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
      } else if (!isAdmin) {
        toast.error('Nemáte oprávnenie na prístup k tejto stránke');
        navigate('/');
      } else {
        fetchWebhookUrl();
      }
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchWebhookUrl = async () => {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'checkout_webhook_url')
        .maybeSingle();

      if (error) throw error;
      setWebhookUrl(data?.value || '');
    } catch (error) {
      console.error('Error fetching webhook URL:', error);
      toast.error('Chyba pri načítaní nastavení');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      const { data: existing } = await supabase
        .from('app_settings')
        .select('id')
        .eq('key', 'checkout_webhook_url')
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from('app_settings')
          .update({ value: webhookUrl, updated_at: new Date().toISOString() })
          .eq('key', 'checkout_webhook_url');

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('app_settings')
          .insert({ key: 'checkout_webhook_url', value: webhookUrl });

        if (error) throw error;
      }

      toast.success('Webhook URL bol uložený');
    } catch (error) {
      console.error('Error saving webhook URL:', error);
      toast.error('Chyba pri ukladaní nastavení');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Späť na stránku
          </Button>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Odhlásiť sa
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <LinkIcon className="h-5 w-5" />
              Nastavenia Webhook
            </CardTitle>
            <CardDescription>
              Nakonfigurujte webhook URL pre automatické notifikácie pri nových objednávkach.
              Podporované platformy: Zapier, Make.com, n8n, alebo vlastný endpoint.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input
                id="webhookUrl"
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.zapier.com/hooks/catch/..."
              />
              <p className="text-sm text-muted-foreground">
                Po každej úspešnej objednávke bude na túto URL odoslaná POST požiadavka s údajmi zákazníka a objednávky.
              </p>
            </div>

            <Button onClick={handleSave} disabled={isSaving} className="w-full">
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Uložiť nastavenia
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display">Formát Webhook dát</CardTitle>
            <CardDescription>
              Príklad dát, ktoré budú odoslané na váš webhook:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "customer": {
    "name": "Meno Priezvisko",
    "email": "email@priklad.sk",
    "city": "Bratislava"
  },
  "program": {
    "id": "postpartum",
    "title": "Postpartum",
    "level": 1
  },
  "subscription": {
    "type": "quarterly",
    "price": "11.99€",
    "total": "35.97€"
  },
  "timestamp": "2025-12-09T10:30:00Z"
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
