export function StartButton({ placement = "content" }) {
  const className = placement === "navigation" ? "button nav-cta" : "button";

  return (
    <a className={className} href="#pricing">
      Start your journey
    </a>
  );
}
