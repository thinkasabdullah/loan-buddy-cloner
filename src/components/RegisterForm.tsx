import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import worldBankLogo from "@/assets/world-bank-logo.png";

interface RegisterFormProps {
  onSwitchToLogin?: () => void;
}

export const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "ত্রুটি",
        description: "পাসওয়ার্ড মিল নেই।",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "রেজিস্ট্রেশন সফল",
        description: "আপনার একাউন্ট সফলভাবে তৈরি হয়েছে।",
      });
      onSwitchToLogin?.();
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="glass-card bank-shadow">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={onSwitchToLogin}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex justify-center flex-1">
                <img 
                  src={worldBankLogo} 
                  alt="World Bank Group" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="w-10" /> {/* Spacer for alignment */}
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-bank-blue-dark">
                নতুন একাউন্ট তৈরী করুন
              </h1>
              <p className="text-sm text-muted-foreground">
                World Bank Loan Bangladesh (WBLB)
              </p>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  পূর্ণ নাম
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  মোবাইল নাম্বার
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="মোবাইল নাম্বার লিখুন"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  ইমেইল
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="ইমেইল ঠিকানা লিখুন"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  পাসওয়ার্ড
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="h-11"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  পাসওয়ার্ড নিশ্চিত করুন
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                  className="h-11"
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="bank"
                className="w-full h-12 text-base font-medium mt-6"
                disabled={isLoading}
              >
                {isLoading ? "একাউন্ট তৈরি হচ্ছে..." : "একাউন্ট তৈরি করুন"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};