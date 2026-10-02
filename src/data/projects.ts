export type ProjectType =
  | "street-lighting"
  | "decorative-lighting"
  | "urban-lighting"
  | "industrial-lighting";

export const PROJECT_TYPES: { value: ProjectType; label: string; icon: string }[] = [
  { value: "street-lighting", label: "إنارة طرقية", icon: "🛣️" },
  { value: "decorative-lighting", label: "إنارة ديكورية", icon: "✨" },
  { value: "urban-lighting", label: "إنارة حضرية", icon: "🏙️" },
  { value: "industrial-lighting", label: "إنارة صناعية", icon: "🏭" },
];

export type Project = {
  id: number;
  title: string;
  slug: string;
  year: string;
  image: string;
  location: string;
  description: string;
  scope: string[];
  type: ProjectType;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "مشروع أمانة حفر الباطن",
    slug: "hafr-albatin",
    year: "2025",
    image: "/projects/project-1.png",
    location: "حفر الباطن",
    description:
      "مشروع شامل لإنارة الطرق والمساحات العامة في أمانة حفر الباطن، يشمل توريد وتركيب أعمدة الإنارة وأنظمة LED عالية الكفاءة.",
    scope: [
      "توريد أعمدة إنارة طريقية",
      "تركيب أنظمة LED",
      "اختبار وتشغيل المشروع",
      "التزام بالمواصفات المعتمدة",
    ],
    type: "street-lighting",
  },
  {
    id: 2,
    title: "مشروع القرية الشعبية الرياض",
    slug: "riyadh-village",
    year: "2025",
    image: "/projects/project-2.png",
    location: "الرياض",
    description:
      "تنفيذ حلول إنارة ديكورية وطريقية للقرية الشعبية بالرياض، بما يعكس الهوية التراثية مع تقنيات إنارة حديثة.",
    scope: [
      "أعمدة إنارة ديكورية",
      "إنارة الممرات والساحات",
      "تصميم متناسق مع البيئة",
      "تسليم في الموعد المحدد",
    ],
    type: "decorative-lighting",
  },
  {
    id: 3,
    title: "مشروع المدينة الصناعية",
    slug: "industrial-city",
    year: "2025",
    image: "/projects/project-3.png",
    location: "المدينة الصناعية",
    description:
      "إنارة شاملة للمدينة الصناعية تشمل الطرق الداخلية والمناطق اللوجستية بمعايير أمان وكفاءة عالية.",
    scope: [
      "إنارة طرق صناعية",
      "أعمدة مقاومة للظروف القاسية",
      "أنظمة تحكم ذكية",
      "صيانة ما بعد التسليم",
    ],
    type: "industrial-lighting",
  },
  {
    id: 4,
    title: "مشروع ساحة تجارية كبرى",
    slug: "commercial-plaza",
    year: "2025",
    image: "/projects/project-4.png",
    location: "الرياض",
    description:
      "تنفيذ إنارة متكاملة لساحة تجارية كبرى تشمل المواقف الخارجية، الممرات، والممرات الداخلية بأحدث أنظمة LED.",
    scope: [
      "إنارة مواقف سيارات",
      "إنارة ممرات مشاة",
      "أنظمة تحكم ذكية بالطاقة",
      "صيانة دورية مبرمجة",
    ],
    type: "urban-lighting",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByType(type: ProjectType) {
  return PROJECTS.filter((project) => project.type === type);
}

export function getAllProjectTypes() {
  return [...new Set(PROJECTS.map((p) => p.type))];
}