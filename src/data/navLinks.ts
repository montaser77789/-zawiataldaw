export type NavSubmenu = "services" | "projects";

export type NavItem = {
  title: string;
  href: string;
  submenu?: NavSubmenu;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "خدماتنا",
    href: "/services",
    submenu: "services",
  },
  // {
  //   title: "الكتالوج",
  //   href: "/catalog",
  // },
  {
    title: "المشاريع",
    href: "/projects",
    submenu: "projects",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "خدماتنا",
    href: "/services",
  },
  {
    title: "المشاريع",
    href: "/projects",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
  },
];

export const footerServices = [
  "أعمدة الإنارة",
  "فوانيس الإنارة",
  "إنارة الطرق",
  "لمبات الليد",
  "المحطات الكهربائية",
];

export const contactInfo = {
  email1: "khalidisok@yahoo.com",
  email2: "mangment@diamondlights.site",
  phone: "+966 54 021 2965",
  phoneTel: "+966540212965",
  location: "الرياض - السلي - مخرج 18",
  mapsUrl:
    "https://www.google.com/maps?q=24.6251583,46.8193596",
};

export const catalogInfo = {
  title: "كتالوج منتجاتنا",
  description:
    "حمّل كتالوج زاوية الضوء واطّلع على تشكيلة أعمدة الإنارة، الفوانيس، حلول LED، والمستلزمات الكهربائية.",
  fileUrl: "/catalog/catalog.pdf",
  fileName: "diamond-catalog.pdf",
  coverImage: "/solutions/solution-4.jpg",
};
