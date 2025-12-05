"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Clipboard, Delete } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "./button";

interface OtpInputProps extends Omit<React.ComponentProps<typeof Input>, 'onChange' | 'value'> {
  value?: string;
  onChange?: (value: string) => void;
}

export function OtpInput({
  className,
  value: controlledValue,
  onChange,
  ...props
}: OtpInputProps) {
  const [internalValue, setInternalValue] = useState("");

  // Support both controlled and uncontrolled usage
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasValue = value.length > 0;

  // Format value with dashes: XXX-XXX-XXX
  const formatValue = useCallback((input: string): string => {
    // Remove all non-alphanumeric characters
    const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toUpperCase();

    // Limit to 9 characters (XXX-XXX-XXX without dashes)
    const limited = cleaned.slice(0, 9);

    // Add dashes after every 3 characters
    const parts: string[] = [];
    for (let i = 0; i < limited.length; i += 3) {
      parts.push(limited.slice(i, i + 3));
    }

    return parts.join("-");
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatValue(e.target.value);

    if (onChange) {
      onChange(formatted);
    } else {
      setInternalValue(formatted);
    }
  }, [formatValue, onChange]);

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      const formatted = formatValue(text);

      if (onChange) {
        onChange(formatted);
      } else {
        setInternalValue(formatted);
      }
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  }, [formatValue, onChange]);

  const handleBackspace = useCallback(() => {
    // Remove the last character (considering dashes)
    const cleaned = value.replace(/[^A-Za-z0-9]/g, "");
    const newCleaned = cleaned.slice(0, -1);
    const formatted = formatValue(newCleaned);

    if (onChange) {
      onChange(formatted);
    } else {
      setInternalValue(formatted);
    }
  }, [value, formatValue, onChange]);

  return (
    <div className="relative">
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={11}
        className={cn("pr-10 [&::-ms-reveal]:hidden tracking-wide font-sans", className)}
        {...props}
      />
      <Button
        size="icon"
        type="button"
        variant="ghost"
        onClick={hasValue ? handleBackspace : handlePaste}
        title={hasValue ? "Delete last character" : "Paste from clipboard"}
        className="hover:bg-accent rounded-lg text-muted-foreground hover:text-foreground absolute top-1/2 right-[5px] -translate-y-1/2 transform"
      >
        {hasValue ? (
          <Delete className="size-4" />
        ) : (
          <Clipboard className="size-4" />
        )}
      </Button>
    </div>
  );
}
