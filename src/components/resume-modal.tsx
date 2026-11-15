"use client";

import { Download, FileText } from "lucide-react";
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
};

export function ResumeModal({
  triggerClassName,
  triggerLabel = "View resume",
}: ResumeModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
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
            <div className="pt-2">
              <Button asChild variant="outline" size="sm">
                <a href={site.resumePath} download={site.resumeFileName}>
                  <Download className="size-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </DialogHeader>

          <div className="min-h-0 flex-1 bg-slate-100/80">
            <iframe
              title={`${site.name} resume`}
              src={site.resumePath}
              className="h-[min(70vh,40rem)] w-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
