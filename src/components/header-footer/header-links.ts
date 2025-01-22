export interface HeaderLink {
  label: string;
  link: string;
}

export const headerLinks: HeaderLink[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Portfolio", link: "/portfolio" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
  { label: "FAQ", link: "/faq" }
];