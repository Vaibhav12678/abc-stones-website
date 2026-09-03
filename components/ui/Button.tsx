import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BaseProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "outline-dark";
  className?: string;
  showArrow?: boolean;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  target?: string;
  rel?: string;
}

interface ButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "group inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2";

const variants = {
  primary: "bg-gold text-charcoal hover:bg-gold-soft",
  outline: "border border-gold/70 text-cream hover:bg-gold hover:text-charcoal",
  "outline-dark": "border border-charcoal/40 text-charcoal hover:border-gold hover:text-gold",
  ghost: "text-gold hover:text-charcoal",
};

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "primary", className, showArrow, ...rest } = props;
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={15}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = rest as LinkProps;
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  const { onClick, type } = rest as ButtonProps;
  return (
    <button onClick={onClick} type={type ?? "button"} className={classes}>
      {content}
    </button>
  );
}
