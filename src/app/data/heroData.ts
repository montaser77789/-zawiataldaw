import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";

export const heroData = {
  title: "ضوءٌ يرسم ملامح المكان",

  description:
    "من التصنيع والتوريد إلى التنفيذ والصيانة، نجمع حلول الإنارة في مسارٍ واحد يخدم الطرق والمشاريع الحضرية.",

  image: "/services/service-1.jpg",

  button: "استكشف المشاريع",
};

export const clients = [
  {
    id: 5,
    image: "/clients/client-5.png",
    alt: "وزارة الصحة",
  },
  {
    id: 9,
    image: "/clients/client-9.png",
    alt: "بلدية محافظة البكيرية",
  },
];

export const services = SERVICES;

export const solutions = [
  {
    id: 1,

    title: "تنفيذ احترافي لأعمدة الإنارة",

    image: "/solutions/solution-1.jpg",

    description:
      "نقدم خدمات تصنيع وتثبيت أعمدة الإنارة وفق أعلى المعايير الفنية لضمان الجودة والاستدامة.",

    button: "تصنيع الأعمدة ( تثبيت و تركيب )",

    features: [
      "فرق هندسية وفنية متخصصة في أعمال الإنارة",
      "التزام كامل بجودة التنفيذ ومتطلبات العميل",
      "إدارة احترافية تقلل العبء على مشروعك",
      "مرونة في التنفيذ بما يتوافق مع الموقع",
    ],
  },

  {
    id: 2,

    title: "فوانيس إنارة عالية الكفاءة",

    image: "/solutions/solution-2.jpg",

    description:
      "أنظمة إنارة متطورة تعتمد على تقنيات حديثة لتحقيق أفضل توزيع للإضاءة.",

    button: "فوانيس الإنارة",

    features: [
      "توزيع ضوئي متوازن",
      "تقليل تكاليف التشغيل",
      "مقاومة للعوامل الجوية",
      "أداء ثابت طويل المدى",
    ],
  },

  {
    id: 3,

    title: "إضاءة LED احترافية",

    image: "/solutions/solution-3.jpg",

    description: "مصابيح LED بجودة عالية لتوفير استهلاك الطاقة وتحسين الأداء.",

    button: "لمبات الإنارة الليد",

    features: ["استهلاك منخفض", "إضاءة قوية", "تقليل الصيانة", "حلول صناعية"],
  },

  {
    id: 4,

    title: "المحطات الكهربائية",

    image: "/solutions/solution-4.jpg",

    description: "خدمات متكاملة في المحطات الكهربائية وأنظمة التحكم.",

    button: "المحطات الكهربائية",

    features: ["تنفيذ سريع", "أنظمة آمنة", "فرق متخصصة", "دعم مستمر"],
  },

  {
    id: 5,

    title: "الكابلات والأسلاك الكهربائية",

    image: "/solutions/solution-5.jpg",

    description: "توريد وتنفيذ جميع متطلبات الكابلات الكهربائية.",

    button: "الكابلات و الأسلاك الكهربائية",

    features: ["اعتمادية عالية", "جودة ممتازة", "توريد سريع", "تنفيذ احترافي"],
  },
];

export const projects = PROJECTS;
