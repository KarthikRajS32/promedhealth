import { 
  Stethoscope, Activity, Heart, Thermometer, Brain, Baby, Pill, ShieldCheck, 
  ClipboardCheck, UserCheck, Gauge, Droplets, Bone, Smartphone, Microscope 
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  icon: any;
  category: 'primary' | 'chronic' | 'specialized';
  content: {
    overview: string;
    symptoms?: string[];
    causes?: string[];
    treatment?: string[];
    benefits?: string[];
  };
}

export const services: ServiceDetail[] = [
  {
    id: 'same-day-visit',
    title: 'Same Day Visit',
    shortDescription: 'Quick healthcare access for urgent, non-life-threatening concerns.',
    icon: Stethoscope,
    category: 'primary',
    content: {
      overview: "Same-day visits are designed for patients needing immediate attention for acute illnesses or injuries that aren't life-threatening but require prompt medical evaluation.",
      symptoms: ["Fever or chills", "Sore throat", "Cough or congestion", "Minor cuts or sprains", "Urinary tract infections"],
      causes: ["Viral or bacterial infections", "Minor physical trauma", "Allergies"],
      treatment: ["Physical assessment", "Rapid testing (Flu, Strep, COVID)", "Prescription management", "Wound care"],
      benefits: ["Reduced wait times", "Avoidance of expensive ER visits", "Continuity of care with your primary physician"]
    }
  },
  {
    id: 'annual-visit',
    title: 'Annual Visit',
    shortDescription: 'Comprehensive yearly health assessments to maintain peak wellness.',
    icon: ClipboardCheck,
    category: 'primary',
    content: {
      overview: "An annual physical exam is the cornerstone of preventive healthcare. It provides a baseline for your health and allows for early detection of potential issues.",
      symptoms: ["Fatigue", "Unexplained weight changes", "Routine check-up (no specific symptoms)"],
      causes: ["Lifestyle factors", "Genetic predispositions", "Age-related changes"],
      treatment: ["Comprehensive physical exam", "Lab work (blood sugar, cholesterol)", "Immunization updates", "Preventive screenings"],
      benefits: ["Early disease detection", "Personalized health counseling", "Strengthening doctor-patient relationship"]
    }
  },
  {
    id: 'womens-care',
    title: "Women’s Care",
    shortDescription: "Personalized healthcare services dedicated to women's diagnostic and therapeutic needs.",
    icon: Baby,
    category: 'specialized',
    content: {
      overview: "We provide specialized care for women at every stage of life, focusing on reproductive health, hormonal balance, and preventive screenings.",
      symptoms: ["Irregular cycles", "Pelvic pain", "Menopausal symptoms", "Hormonal imbalances"],
      causes: ["Hormonal shifts", "Reproductive conditions", "Age-related transitions"],
      treatment: ["Well-woman exams", "Pap smears", "Mammogram referrals", "Birth control counseling"],
      benefits: ["Gender-specific health management", "Early cancer detection", "Support for reproductive transitions"]
    }
  },
  {
    id: 'preventive-care',
    title: 'Preventive Care',
    shortDescription: 'Strategic health screenings and counseling to prevent future medical issues.',
    icon: ShieldCheck,
    category: 'primary',
    content: {
      overview: "Preventive care focuses on keeping you healthy rather than just treating you when you're sick. It includes screenings, counseling, and immunizations.",
      symptoms: ["Often asymptomatic", "General wellness monitoring"],
      causes: ["Environmental risks", "Hereditary factors", "Sedentary lifestyle"],
      treatment: ["Screening tests", "Health education", "Lifestyle modifications", "Vaccination schedules"],
      benefits: ["Increased lifespan", "Lower healthcare costs", "Better quality of life"]
    }
  },
  {
    id: 'diabetes',
    title: 'Diabetes Management',
    shortDescription: 'Expert monitoring and management of blood sugar levels and long-term health.',
    icon: Activity,
    category: 'chronic',
    content: {
      overview: "Diabetes management is a collaborative effort to keep your blood glucose levels within a target range to prevent complications like nerve or kidney damage.",
      symptoms: ["Increased thirst", "Frequent urination", "Blurred vision", "Slow-healing sores"],
      causes: ["Insulin resistance", "Genetics", "Pancreatic issues", "Excess body weight"],
      treatment: ["Regular glucose monitoring", "HbA1c testing", "Medication management", "Nutritional counseling"],
      benefits: ["Prevention of serious complications", "Improved energy levels", "Better control over long-term health"]
    }
  },
  {
    id: 'hypertension',
    title: 'Hypertension',
    shortDescription: 'Specialized care for high blood pressure to prevent cardiovascular complications.',
    icon: Droplets,
    category: 'chronic',
    content: {
      overview: "Hypertension, or high blood pressure, is often called the 'silent killer' because it usually has no symptoms but can lead to severe heart issues.",
      symptoms: ["Headaches (severe cases)", "Shortness of breath", "Often no symptoms"],
      causes: ["High salt intake", "Obesity", "Stress", "Genetic factors"],
      treatment: ["Blood pressure monitoring", "SASH (Salt reduction)", "Prescription therapy", "Regular exercise"],
      benefits: ["Reduced stroke risk", "Lower risk of heart attack", "Kidney health preservation"]
    }
  },
  {
    id: 'heart',
    title: 'Heart Disease',
    shortDescription: 'Comprehensive care and monitoring for cardiovascular health.',
    icon: Heart,
    category: 'chronic',
    content: {
      overview: "Cardiovascular care involves diagnosing and managing conditions that affect the heart and blood vessels, focusing on risk reduction and healthy habits.",
      symptoms: ["Chest pain", "Palpitations", "Shortness of breath", "Dizziness"],
      causes: ["Build-up of plaque", "Inflammation", "Congenital factors", "Poor diet"],
      treatment: ["Diagnostic tests (EKG, Stress tests)", "Medication for cholesterol/BP", "Cardiac risk assessment", "Lifestyle changes"],
      benefits: ["Improved heart function", "Lower risk of cardiac arrest", "Increased physical stamina"]
    }
  },
  {
    id: 'cholesterol',
    title: 'High Cholesterol',
    shortDescription: 'Monitoring and treatment plans featuring statins and heart-healthy lifestyle changes.',
    icon: Microscope,
    category: 'chronic',
    content: {
      overview: "Managing lipids like LDL and HDL is crucial for preventing the narrowing of arteries and maintaining overall vascular health.",
      symptoms: ["Silent (no symptoms)", "Can lead to early signs of atherosclerosis"],
      causes: ["High saturated fat diet", "Genetics", "Lack of exercise", "Smoking"],
      treatment: ["Lipid panel blood tests", "Statin therapy", "Dietary adjustments", "Omega-3 supplementation"],
      benefits: ["Clearer arteries", "Prevention of cardiovascular events", "Long-term metabolic health"]
    }
  },
  {
    id: 'covid-flu',
    title: 'Covid & Flu care',
    shortDescription: 'Integrated evaluation and testing for acute respiratory illnesses.',
    icon: Thermometer,
    category: 'primary',
    content: {
      overview: "We provide comprehensive testing and symptom management for common respiratory viruses to ensure quick recovery and prevent spread.",
      symptoms: ["High fever", "Body aches", "Dry cough", "Loss of taste/smell"],
      causes: ["Viral infection (Influenza, SARS-CoV-2)"],
      treatment: ["Rapid PCR or antigen testing", "Hydration therapy", "Antiviral prescriptions", "Symptom relief"],
      benefits: ["Accurate diagnosis", "Prevention of secondary infections", "Public health safety"]
    }
  },
  {
    id: 'chronic-care',
    title: 'Chronic Care',
    shortDescription: 'Coordinated care for patients with multiple chronic conditions for better quality of life.',
    icon: Brain,
    category: 'specialized',
    content: {
      overview: "Chronic Care Management (CCM) is for patients with two or more long-term conditions, providing a coordinated plan to improve health stability.",
      symptoms: ["Multiple overlapping health issues", "Complexity in medication management"],
      causes: ["Age-related health decline", "Multi-system disease"],
      treatment: ["Coordinated care plans", "Monthly check-ins", "Medication reconciliation", "Specialist coordination"],
      benefits: ["Fewer hospitalizations", "Better medication adherence", "Dedicated support system"]
    }
  },
  {
    id: 'geriatric-care',
    title: 'Geriatric Care',
    shortDescription: 'Compassionate medical care specialized for the unique needs of older adults.',
    icon: UserCheck,
    category: 'specialized',
    content: {
      overview: "Geriatric medicine focuses on the complex needs of older adults, including cognitive health, mobility, and multiple medication management.",
      symptoms: ["Memory loss", "Mobility issues", "Frailty", "Multiple chronic illnesses"],
      causes: ["Biological aging", "Cognitive decline", "Musculoskeletal changes"],
      treatment: ["Comprehensive geriatric assessment", "Cognitive screening", "Fall prevention", "Social support integration"],
      benefits: ["Maintenance of independence", "Reduced medication interactions", "Palliative care coordination"]
    }
  },
  {
    id: 'thyroid',
    title: 'Thyroid Disease',
    shortDescription: 'Diagnostic testing and hormone regulation for hypothyroidism and hyperthyroidism.',
    icon: Pill,
    category: 'chronic',
    content: {
      overview: "The thyroid gland controls metabolism. We manage disorders that cause the thyroid to be underactive or overactive.",
      symptoms: ["Weight gain or loss", "Extreme fatigue", "Heat/Cold intolerance", "Nervousness"],
      causes: ["Autoimmune conditions (Hashimoto's)", "Iodine deficiency", "Thyroid nodules"],
      treatment: ["TSH, T3, T4 testing", "Hormone replacement therapy", "Symptom monitoring", "Lifestyle support"],
      benefits: ["Restored energy levels", "Improved metabolic rate", "Better mood and cognitive function"]
    }
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    shortDescription: 'Personalized plans featuring nutritional counseling and medical monitoring.',
    icon: Gauge,
    category: 'specialized',
    content: {
      overview: "Medical weight loss is a comprehensive, science-based approach to reaching and maintaining a healthy weight under physician supervision.",
      symptoms: ["BMI over 30", "Joint pain", "Sleep apnea", "Metabolic syndrome"],
      causes: ["Caloric imbalance", "Metabolic disorders", "Psychological factors"],
      treatment: ["Nutritional counseling", "Exercise prescriptions", "Medical appetite management", "Regular metabolic tracking"],
      benefits: ["Reduction in diabetes risk", "Lower blood pressure", "Improved self-esteem and mobility"]
    }
  },
  {
    id: 'arthritis',
    title: 'Arthritis',
    shortDescription: 'Pain management and anti-inflammatory lifestyle guidance for joint health.',
    icon: Bone,
    category: 'chronic',
    content: {
      overview: "We help manage joint inflammation and pain through integrated strategies that combine medical treatment with physical activity.",
      symptoms: ["Joint swelling", "Stiffness in the morning", "Reduced range of motion", "Redness over joints"],
      causes: ["Wear and tear (Osteo)", "Autoimmune response (Rheumatoid)", "Injury factors"],
      treatment: ["Anti-inflammatory management", "Physical therapy referrals", "Lifestyle adjustments", "Joint supplements"],
      benefits: ["Reduced pain", "Better joint preservation", "Increased daily activity"]
    }
  },
  {
    id: 'medicare',
    title: 'Medicare Services',
    shortDescription: 'Guidance on coverage and specialized internal medicine for seniors.',
    icon: ClipboardCheck,
    category: 'specialized',
    content: {
      overview: "We help Medicare patients navigate their coverage and ensure they receive all the preventive benefits they are entitled to.",
      symptoms: ["N/A (Age-based coverage)"],
      causes: ["Eligibility for federal health insurance"],
      treatment: ["Annual Wellness Visits (AWV)", "Review of medical history", "Screening for cognitive impairment", "Personalized prevention plan"],
      benefits: ["100% covered preventive visits", "Unified primary care for seniors", "Support for Medicare billing"]
    }
  },
  {
    id: 'medicare-advantage',
    title: 'Medicare Advantage',
    shortDescription: 'Coordination of comprehensive care including vision, dental, and Part C benefits.',
    icon: Smartphone,
    category: 'specialized',
    content: {
      overview: "Our clinic coordinates care for patients with Medicare Part C (Advantage) plans, ensuring seamless access across multi-system providers.",
      symptoms: ["N/A (Benefit-based care)"],
      causes: ["Enrollment in Medicare Part C plans"],
      treatment: ["Coordinated specialist visits", "Comprehensive health review", "Vision/Dental coordination", "Medication Part D support"],
      benefits: ["Predictable out-of-pocket costs", "Integrated extra benefits", "Focused health management"]
    }
  }
];
