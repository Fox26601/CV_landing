"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site } from "@/lib/site";

type ResumeModalProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  triggerVariant?: React.ComponentProps<typeof Button>["variant"];
  triggerSize?: React.ComponentProps<typeof Button>["size"];
};

export function ResumeModal({
  triggerClassName,
  triggerLabel = "View resume",
  triggerVariant,
  triggerSize = "lg",
}: ResumeModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size={triggerSize}
        variant={triggerVariant}
        className={triggerClassName}
        onClick={() => setOpen(true)}
      >
        <FileText className="size-4" />
        {triggerLabel}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[90vh] w-[min(92vw,52rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
          <DialogHeader className="border-b border-border/70 px-5 py-4 text-left sm:px-6">
            <DialogTitle className="font-[family-name:var(--font-display)] text-xl">
              Resume
            </DialogTitle>
            <DialogDescription>
              Preview online or download the PDF.
            </DialogDescription>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button asChild variant="default" size="sm">
                <a href={site.resumePath} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  Open PDF
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={site.resumePath} download={site.resumeFileName}>
                  <Download className="size-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </DialogHeader>

          <div className="min-h-0 flex-1 bg-slate-100/80">
            <p className="px-5 py-6 text-sm leading-relaxed text-slate-600 sm:hidden">
              For the best experience on mobile, open or download the PDF using
              the buttons above.
            </p>
            <iframe
              title={`${site.name} resume`}
              src={site.resumePath}
              className="hidden h-[min(70vh,40rem)] w-full border-0 sm:block"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}