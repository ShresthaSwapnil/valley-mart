"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already verified age
    const isVerified = localStorage.getItem("age-verified");

    if (!isVerified) {
      setOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    setOpen(false);
  };

  const handleDecline = () => {
    // Redirect to a safe page or external site
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <Wine className="h-12 w-12 mx-auto mb-2" />
          <DialogTitle className="text-xl">Age Verification</DialogTitle>
          <DialogDescription>
            This website sells alcoholic beverages and is only suitable for
            those above the legal drinking age in Nepal.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-center font-medium">
            Are you at least 21 years old?
          </p>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-center">
          <Button variant="outline" onClick={handleDecline}>
            No, I am under 21
          </Button>
          <Button onClick={handleVerify}>Yes, I am over 21</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
