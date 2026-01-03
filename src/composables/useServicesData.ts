export interface Service {
  id: string
  title: string
  category: string
  categoryId: string
  description: string
  keywords: string[]
  fee: string
  processingTime: string
  office: string
  url: string
}

const servicesData: Service[] = [
  {
    id: "birth-certificate",
    title: "Birth Certificate",
    category: "Certificates & Vital Records",
    categoryId: "certificates",
    description: "Get a certified copy of birth certificate registered in Kananga",
    keywords: ["birth", "certificate", "born", "baby", "civil registry", "vital records"],
    fee: "₱150",
    processingTime: "15-30 minutes",
    office: "Local Civil Registrar",
    url: "/services/birth-certificate"
  },
  {
    id: "marriage-certificate",
    title: "Marriage Certificate",
    category: "Certificates & Vital Records",
    categoryId: "certificates",
    description: "Register or request certified true copy of marriage certificate",
    keywords: ["marriage", "wedding", "married", "spouse", "civil registry"],
    fee: "Free (Registration)",
    processingTime: "5 minutes",
    office: "Local Civil Registrar",
    url: "/services/marriage-certificate"
  },
  {
    id: "death-certificate",
    title: "Death Certificate",
    category: "Certificates & Vital Records",
    categoryId: "certificates",
    description: "Register death certificate and obtain burial or transfer permit",
    keywords: ["death", "died", "deceased", "obituary", "burial permit"],
    fee: "₱50-150",
    processingTime: "1 hour 35 minutes",
    office: "Local Civil Registrar",
    url: "/services/death-certificate"
  },
  {
    id: "barangay-clearance",
    title: "Barangay Clearance",
    category: "Certificates & Vital Records",
    categoryId: "certificates",
    description: "Certificate of residence from your barangay",
    keywords: ["barangay", "clearance", "residence", "residency"],
    fee: "₱50-100",
    processingTime: "Same day",
    office: "Barangay Hall",
    url: "/services/barangay-clearance"
  },
  {
    id: "barangay-id",
    title: "Barangay ID",
    category: "Certificates & Vital Records",
    categoryId: "certificates",
    description: "Official barangay identification card",
    keywords: ["barangay", "id", "identification"],
    fee: "Free",
    processingTime: "1-2 days",
    office: "Barangay Hall",
    url: "/services/barangay-id"
  },
  {
    id: "business-permit-new",
    title: "Business Permit (New)",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Apply for a new mayor's permit to operate a business",
    keywords: ["business", "permit", "new", "mayor", "license", "negosyo"],
    fee: "Varies",
    processingTime: "3-5 days",
    office: "Business Permits & Licensing Office",
    url: "/services/business-permit-new"
  },
  {
    id: "business-permit-renewal",
    title: "Business Permit Renewal",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Renew your annual business permit",
    keywords: ["business", "permit", "renewal", "renew", "annual"],
    fee: "Varies",
    processingTime: "Same day",
    office: "Business Permits & Licensing Office",
    url: "/services/business-permit-renewal"
  },
  {
    id: "business-closure",
    title: "Business Closure",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "File for business closure/termination",
    keywords: ["business", "closure", "close", "terminate", "end"],
    fee: "Free",
    processingTime: "1-2 days",
    office: "Business Permits & Licensing Office",
    url: "/services/business-closure"
  },
  {
    id: "sanitary-permit",
    title: "Sanitary Permit",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Health and sanitation permit for businesses",
    keywords: ["sanitary", "permit", "health", "sanitation", "food"],
    fee: "Varies",
    processingTime: "1-3 days",
    office: "Municipal Health Office",
    url: "/services/sanitary-permit"
  },
  {
    id: "cedula",
    title: "Community Tax Certificate (Cedula)",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Obtain cedula for individuals and businesses",
    keywords: ["cedula", "community", "tax", "certificate"],
    fee: "₱5+",
    processingTime: "Same day",
    office: "Municipal Treasurer's Office",
    url: "/services/cedula"
  },
  {
    id: "senior-citizen-id",
    title: "Senior Citizen ID",
    category: "Social Services & Assistance",
    categoryId: "social-services",
    description: "ID card and benefits for citizens 60 years and above",
    keywords: ["senior", "citizen", "elderly", "old", "60", "discount"],
    fee: "Free",
    processingTime: "1-2 weeks",
    office: "MSWDO / OSCA",
    url: "/services/senior-citizen-id"
  },
  {
    id: "pwd-id",
    title: "PWD ID & Services",
    category: "Social Services & Assistance",
    categoryId: "social-services",
    description: "ID and benefits for persons with disabilities",
    keywords: ["pwd", "disability", "disabled", "special", "discount"],
    fee: "Free",
    processingTime: "1-2 weeks",
    office: "MSWDO",
    url: "/services/pwd-id"
  },
  {
    id: "financial-assistance",
    title: "Financial Assistance",
    category: "Social Services & Assistance",
    categoryId: "social-services",
    description: "Emergency financial aid for qualified residents",
    keywords: ["financial", "assistance", "aid", "help", "money", "emergency"],
    fee: "Free",
    processingTime: "Varies",
    office: "MSWDO",
    url: "/services/financial-assistance"
  },
  {
    id: "burial-assistance",
    title: "Burial Assistance",
    category: "Social Services & Assistance",
    categoryId: "social-services",
    description: "Financial assistance for burial expenses",
    keywords: ["burial", "funeral", "death", "assistance", "aid"],
    fee: "Free",
    processingTime: "1-3 days",
    office: "MSWDO",
    url: "/services/burial-assistance"
  },
  {
    id: "solo-parent-id",
    title: "Solo Parent ID",
    category: "Social Services & Assistance",
    categoryId: "social-services",
    description: "ID and benefits for solo parents",
    keywords: ["solo", "parent", "single", "mother", "father"],
    fee: "Free",
    processingTime: "1-2 weeks",
    office: "MSWDO",
    url: "/services/solo-parent-id"
  },
  {
    id: "vaccination",
    title: "Vaccination Programs",
    category: "Health & Wellness",
    categoryId: "health",
    description: "Free immunization for children and adults",
    keywords: ["vaccine", "vaccination", "immunization", "shot", "covid"],
    fee: "Free",
    processingTime: "Same day",
    office: "Municipal Health Office",
    url: "/services/vaccination"
  },
  {
    id: "health-certificate",
    title: "Health Certificate",
    category: "Health & Wellness",
    categoryId: "health",
    description: "Medical certificate for employment or business",
    keywords: ["health", "certificate", "medical", "employment", "work"],
    fee: "₱100-200",
    processingTime: "Same day",
    office: "Municipal Health Office",
    url: "/services/health-certificate"
  },
  {
    id: "medical-assistance",
    title: "Medical Assistance",
    category: "Health & Wellness",
    categoryId: "health",
    description: "Financial aid for medical expenses and hospitalization",
    keywords: ["medical", "assistance", "hospital", "medicine", "health", "sick"],
    fee: "Free",
    processingTime: "1-3 days",
    office: "Municipal Health Office",
    url: "/services/medical-assistance"
  },
  {
    id: "prenatal-checkup",
    title: "Prenatal Checkup",
    category: "Health & Wellness",
    categoryId: "health",
    description: "Free prenatal care for pregnant women",
    keywords: ["prenatal", "pregnant", "pregnancy", "baby", "maternal"],
    fee: "Free",
    processingTime: "Same day",
    office: "Municipal Health Office",
    url: "/services/prenatal-checkup"
  },
  {
    id: "real-property-tax",
    title: "Real Property Tax Payment",
    category: "Taxation & Payments",
    categoryId: "tax-payments",
    description: "Pay annual real property tax (amilyar)",
    keywords: ["property", "tax", "real", "amilyar", "land", "house"],
    fee: "Varies",
    processingTime: "Same day",
    office: "Municipal Treasurer's Office",
    url: "/services/real-property-tax"
  },
  {
    id: "business-tax",
    title: "Business Tax Payment",
    category: "Taxation & Payments",
    categoryId: "tax-payments",
    description: "Pay quarterly or annual business taxes",
    keywords: ["business", "tax", "payment", "quarterly", "annual"],
    fee: "Varies",
    processingTime: "Same day",
    office: "Municipal Treasurer's Office",
    url: "/services/business-tax"
  },
  {
    id: "tax-clearance",
    title: "Tax Clearance",
    category: "Taxation & Payments",
    categoryId: "tax-payments",
    description: "Certificate of no tax liability",
    keywords: ["tax", "clearance", "certificate", "liability"],
    fee: "₱50-100",
    processingTime: "Same day",
    office: "Municipal Treasurer's Office",
    url: "/services/tax-clearance"
  },
  {
    id: "agricultural-loan",
    title: "Agricultural Loans",
    category: "Agriculture & Economic Development",
    categoryId: "agriculture",
    description: "Low-interest loans for farmers",
    keywords: ["agricultural", "loan", "farmer", "farming", "credit"],
    fee: "Varies",
    processingTime: "1-2 weeks",
    office: "Municipal Agriculture Office",
    url: "/services/agricultural-loan"
  },
  {
    id: "crop-insurance",
    title: "Crop Insurance",
    category: "Agriculture & Economic Development",
    categoryId: "agriculture",
    description: "Insurance coverage for crop damage",
    keywords: ["crop", "insurance", "damage", "calamity"],
    fee: "Subsidized",
    processingTime: "Varies",
    office: "Municipal Agriculture Office",
    url: "/services/crop-insurance"
  },
  {
    id: "building-permit",
    title: "Building Permit",
    category: "Infrastructure & Public Works",
    categoryId: "infrastructure",
    description: "Permit for new construction or renovation",
    keywords: ["building", "permit", "construction", "house", "renovation"],
    fee: "Varies",
    processingTime: "5-10 days",
    office: "Municipal Engineering Office",
    url: "/services/building-permit"
  },
  {
    id: "occupancy-permit",
    title: "Occupancy Permit",
    category: "Infrastructure & Public Works",
    categoryId: "infrastructure",
    description: "Certificate of completion for new buildings",
    keywords: ["occupancy", "permit", "completion", "building"],
    fee: "Varies",
    processingTime: "3-5 days",
    office: "Municipal Engineering Office",
    url: "/services/occupancy-permit"
  },
  {
    id: "road-maintenance",
    title: "Road Maintenance Request",
    category: "Infrastructure & Public Works",
    categoryId: "infrastructure",
    description: "Report road damage or request repairs",
    keywords: ["road", "maintenance", "repair", "pothole", "damage"],
    fee: "Free",
    processingTime: "Varies",
    office: "Municipal Engineering Office",
    url: "/services/road-maintenance"
  },
  {
    id: "scholarship",
    title: "Scholarship Programs",
    category: "Education & Scholarship",
    categoryId: "education",
    description: "Financial assistance for students",
    keywords: ["scholarship", "student", "education", "school", "tuition"],
    fee: "Free",
    processingTime: "Varies",
    office: "Municipal Mayor's Office",
    url: "/services/scholarship"
  },
  {
    id: "emergency-response",
    title: "Emergency Response",
    category: "Public Safety & Security",
    categoryId: "public-safety",
    description: "24/7 emergency assistance and rescue",
    keywords: ["emergency", "response", "rescue", "911", "help"],
    fee: "Free",
    processingTime: "Immediate",
    office: "MDRRMO",
    url: "/services/emergency-response"
  },
  {
    id: "seedo-public-market",
    title: "SEEDO Public Market",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Market clearance, entrance fees, vendor services, and CTC issuance",
    keywords: ["public market", "market", "vendor", "stall", "clearance", "palengke"],
    fee: "₱5-50",
    processingTime: "Same day",
    office: "SEEDO Public Market",
    url: "/services/seedo-public-market"
  },
  {
    id: "seedo-slaughterhouse",
    title: "SEEDO Slaughterhouse",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Hog, cattle, goat, and carabao slaughter with meat inspection services",
    keywords: ["slaughterhouse", "slaughter", "hog", "cattle", "goat", "meat"],
    fee: "₱40-350",
    processingTime: "37 min - 1.5 hrs",
    office: "SEEDO Slaughterhouse",
    url: "/services/seedo-slaughterhouse"
  },
  {
    id: "tricycle-franchising",
    title: "Tricycle Franchising & Records",
    category: "Business, Trade & Investment",
    categoryId: "business",
    description: "Apply for tricycle franchise (MTOF) and request records",
    keywords: ["tricycle", "franchise", "MTOF", "pedicab", "driver"],
    fee: "Varies",
    processingTime: "3-5 days",
    office: "BPLS / SBO",
    url: "/services/tricycle-franchising"
  }
]

export function useServicesData() {
  const getAll = (): Service[] => servicesData

  const getById = (id: string): Service | undefined => 
    servicesData.find(s => s.id === id)

  const getByCategory = (categoryId: string): Service[] =>
    servicesData.filter(s => s.categoryId === categoryId)

  const search = (query: string): Service[] => {
    if (!query.trim()) return servicesData
    
    const q = query.toLowerCase()
    return servicesData.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.keywords.some(k => k.toLowerCase().includes(q))
    )
  }

  const getCategories = (): Array<{ id: string; name: string }> => {
    const categories = new Map<string, string>()
    servicesData.forEach(s => {
      if (!categories.has(s.categoryId)) {
        categories.set(s.categoryId, s.category)
      }
    })
    return Array.from(categories).map(([id, name]) => ({ id, name }))
  }

  return {
    getAll,
    getById,
    getByCategory,
    search,
    getCategories
  }
}
