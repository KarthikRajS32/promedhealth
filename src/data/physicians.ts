export interface Physician {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  education?: string[];
  certifications?: string[];
}

export const physicians: Physician[] = [
  {
    id: "dr-kavitha-ilayaraja",
    name: "Dr. Kavitha Ilayaraja, MD",
    title: "Primary Care Physician",
    specialty: "Internal Medicine",
    bio: "Dr. Kavitha Ilayaraja is a dedicated Internal Medicine specialist with several years of experience in providing compassionate, personalized care to her patients. She focuses on building long-term relationships and delivering expert medical guidance for both acute and chronic conditions.",
    image: "/doctor.jpg", // Placeholder
    education: [
      "Medical Doctorate (MD)",
      "Internal Medicine Residency"
    ],
    certifications: [
      "Board Certified in Internal Medicine",
      "Advanced Cardiac Life Support (ACLS)"
    ]
  }
];
