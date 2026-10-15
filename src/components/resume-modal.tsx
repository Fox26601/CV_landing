"use client";

import { Download, FileText, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open || html || loading) return;

    let cancelled = false;

    async function loadResume() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/resume/html");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? "Failed to load resume");
        }

        if (!cancelled) {
          setHtml(data.html as string);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load resume",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadResume();

    return () => {
      cancelled = true;
    };
  }, [open, html, loading]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={triggerClassName}>
          <FileText className="size-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] w-[min(92vw,52rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-border/70 px-5 py-4 text-left sm:px-6">
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl">
            Resume
          </DialogTitle>
          <DialogDescription>
            Read online or download the original DOCX file.
          </DialogDescription>
          <div className="pt-2">
            <Button asChild variant="outline" size="sm">
              <a href={site.resumePath} download={site.resumeFileName}>
                <Download className="size-4" />
                Download DOCX
              </a>
            </Button>
          </div>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {loading && (
            <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
              <LoaderCircle className="size-5 animate-spin" />
              Opening resume…
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-6 text-sm text-destructive">
              <p className="font-medium">{error}</p>
              <p className="mt-2 text-muted-foreground">
                You can still{" "}
                <a
                  className="underline underline-offset-2"
                  href={site.resumePath}
                  download={site.resumeFileName}
                >
                  download the file
                </a>
                .
              </p>
            </div>
          )}

          {html && (
            <article
              className="resume-doc prose prose-neutral max-w-none text-[0.95rem] leading-relaxed text-foreground"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
