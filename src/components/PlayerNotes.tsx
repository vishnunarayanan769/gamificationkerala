import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PlayerNotes() {
  const [shareState, setShareState] = useState<"idle" | "copied" | "shared" | "error">("idle");

  const sharePlayground = async () => {
    const url = window.location.href.split("#")[0];
    try {
      if (navigator.share) {
        await navigator.share({
          title: "gamiFICATION",
          text: "A little library of original browser games.",
          url,
        });
        setShareState("shared");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setShareState("copied");
      } else {
        window.prompt("Copy this link to share:", url);
        return;
      }
      window.setTimeout(() => setShareState("idle"), 2800);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareState("error");
    }
  };

  return (
    <section className="notes-section section-pad" aria-labelledby="notes-title">
      <div className="section-shell notes-inner">
        <Reveal className="notes-intro">
          <span className="eyebrow">Player notes</span>
          <h2 id="notes-title">The good word starts with you.</h2>
        </Reveal>
        <Reveal className="notes-content" delay={0.12}>
          <span className="notes-quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>Games are better when you share them.</blockquote>
          <p>
            This is a young little library, so we're keeping the reviews real. Play something, then
            pass the fun along to the person who needs it most.
          </p>
          <button className="text-link notes-share" type="button" onClick={sharePlayground}>
            {shareState === "copied"
              ? "Link copied"
              : shareState === "shared"
                ? "Thanks for sharing"
                : shareState === "error"
                  ? "Try sharing again"
                  : "Share the library"}
            <ArrowUpRight size={19} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {shareState === "copied"
              ? "Link copied to clipboard"
              : shareState === "shared"
                ? "Shared successfully"
                : shareState === "error"
                  ? "Could not share the link"
                  : ""}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
