export interface HeaderLink {
  label: string;
  link: string;
  subcategories?: HeaderLink[]; // Optional property for nested links
}

export const headerLinks: HeaderLink[] = [
  { label: "Categories", link: "/categories", subcategories: [
      { label: "Electronics", link: "/categories/electronics" },
      { label: "Fashion", link: "/categories/fashion" },
      { label: "Home Appliances", link: "/categories/home-appliances" },
      { label: "Books", link: "/categories/books" },
      { label: "Beauty & Health", link: "/categories/beauty-health" },
      { label: "Sports & Outdoors", link: "/categories/sports-outdoors" }
    ] 
  },
  { label: "Deals", link: "/deals" },
  { label: "What's New", link: "/whats-new" },
  { label: "Delivery", link: "/delivery" }
];
