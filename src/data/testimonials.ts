export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: "John Doe",
    role: "Patient since 2018",
    content: "Dr. Ilayaraja is incredibly thorough and compassionate. She takes the time to listen and properly explain everything. One of the best primary care experiences I've had in years.",
    rating: 5
  },
  {
    id: 't2',
    name: "Maria Rodriguez",
    role: "Diabetes Management Patient",
    content: "The chronic care management here has changed my life. My diabetes is finally under control, and I feel supported every step of the way by the entire team.",
    rating: 5
  },
  {
    id: 't3',
    name: "Robert Smith",
    role: "Geriatric Care",
    content: "A truly professional medical clinic. They handle everything with respect and expertise. The wait times are minimal, and the care is top-notch.",
    rating: 5
  },
  {
    id: 't4',
    name: "Sarah Lee",
    role: "Preventive Care Patient",
    content: "Clean, modern facilities and a very friendly staff. I appreciate the focus on preventive health and the detailed wellness check-ups.",
    rating: 5
  }
];
