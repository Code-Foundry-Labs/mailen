import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

export function PasswordInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10 [&::-ms-reveal]:hidden", className)}
        {...props}
      />
      <Button
        size="icon"
        type="button"
        variant="ghost"
        onClick={() => setShowPassword(!showPassword)}
        title={showPassword ? "Hide password" : "Show password"}
        className=" hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground absolute top-1/2 right-[5px] -translate-y-1/2 transform"
      >
        {showPassword ? (
          <EyeOffIcon />
        ) : (
          <EyeIcon />
        )}
      </Button>
    </div>
  );
}
