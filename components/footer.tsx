import Link from "next/link";

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@NeuralControl_media" },
  { label: "Instagram", href: "https://www.instagram.com/neuralcontrol_media/" },
  { label: "Linktree", href: "https://linktr.ee/NeuralControl_media" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" }
];

export const Footer = () => {
  return (
    <footer className="border-t border-border mt-20 py-12">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Contact
            </h3>
            <p className="text-sm text-foreground/60">
              For general inquiries, use the contact form on our website.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-xs font-mono text-foreground/40 text-center">
            © Neural Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
