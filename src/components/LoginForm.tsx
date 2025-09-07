import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import worldBankLogo from "@/assets/world-bank-logo.png";

interface LoginFormProps {
  onSwitchToRegister?: () => void;
}

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "লগইন সফল",
        description: "আপনি সফলভাবে লগইন করেছেন।",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="glass-card bank-shadow">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="flex justify-center">
              <img 
                src={worldBankLogo} 
                alt="World Bank Group" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-bank-blue-dark">
                WORLD BANK GROUP
              </h1>
              <p className="text-sm text-muted-foreground">
                World Bank Loan Bangladesh (WBLB)
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  মোবাইল নাম্বার (ইংরেজী)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="মোবাইল নাম্বার লিখুন"
                  className="h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  পাসওয়ার্ড (ইংরেজী)
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="h-12"
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="bank"
                className="w-full h-12 text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? "লগইন হচ্ছে..." : "লগইন"}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-base"
                onClick={onSwitchToRegister}
              >
                নতুন একাউন্ট তৈরী করুন
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};