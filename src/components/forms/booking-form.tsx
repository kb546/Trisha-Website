"use client";

import { useState } from "react";
import { CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { eventTypes, audienceSizes, howHeardOptions } from "@/lib/constants";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      eventType: formData.get("eventType"),
      eventDate: date ? format(date, "PPP") : "",
      location: formData.get("location"),
      audienceSize: formData.get("audienceSize"),
      description: formData.get("description"),
      howHeard: formData.get("howHeard"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-12 border border-border/50 shadow-sm text-center">
        <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-6" />
        <h3 className="font-heading text-2xl font-bold text-navy mb-4">
          Thank You!
        </h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Your booking inquiry has been received. Trisha&apos;s team will get back
          to you within 48 hours to discuss your event.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="h-12 bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
            Email Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-12 bg-white"
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">
          Organization / Company
        </label>
        <Input
          id="organization"
          name="organization"
          placeholder="Your organization name"
          className="h-12 bg-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Event Type */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Event Type <span className="text-destructive">*</span>
          </label>
          <Select name="eventType" required>
            <SelectTrigger className="h-12 bg-white">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Preferred Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-navy mb-2">
            Event Location
          </label>
          <Input
            id="location"
            name="location"
            placeholder="City, venue, or virtual"
            className="h-12 bg-white"
          />
        </div>

        {/* Audience Size */}
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Estimated Audience Size
          </label>
          <Select name="audienceSize">
            <SelectTrigger className="h-12 bg-white">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {audienceSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-navy mb-2">
          Tell Us About Your Event <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Describe your event, what you're looking for, and any relevant details..."
          className="bg-white resize-none"
        />
      </div>

      {/* How Heard */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">
          How Did You Hear About Trisha?
        </label>
        <Select name="howHeard">
          <SelectTrigger className="h-12 bg-white">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {howHeardOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-14 bg-gold text-navy font-semibold text-base rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Booking Inquiry"
        )}
      </Button>

      {status === "error" && (
        <p className="text-center text-destructive text-sm">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
