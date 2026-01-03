import { ref } from 'vue'

export interface Service {
  id: string
  title: string
  category: string
  categoryId: string
  description: string
  fee: string
  processingTime: string
  office: string
  url: string
}

const servicesData = ref<Service[]>([
  {
    id: 'birth-certificate',
    title: 'Birth Certificate',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Get a certified copy of birth certificate registered in Solano',
    fee: '₱150',
    processingTime: '15-30 minutes',
    office: 'Local Civil Registrar',
    url: '/services/birth-certificate'
  },
  {
    id: 'marriage-certificate',
    title: 'Marriage Certificate',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Register or request certified true copy of marriage certificate',
    fee: 'Free (Registration)',
    processingTime: '5 minutes',
    office: 'Local Civil Registrar',
    url: '/services/marriage-certificate'
  },
  {
    id: 'death-certificate',
    title: 'Death Certificate',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Register death certificate and obtain burial or transfer permit',
    fee: '₱50-150',
    processingTime: '1 hour 35 minutes',
    office: 'Local Civil Registrar',
    url: '/services/death-certificate'
  },
  {
    id: 'barangay-clearance',
    title: 'Barangay Clearance',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Certificate of residence from your barangay',
    fee: '₱50-100',
    processingTime: 'Same day',
    office: 'Barangay Hall',
    url: '/services/barangay-clearance'
  },
  {
    id: 'barangay-id',
    title: 'Barangay ID',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Official barangay identification card',
    fee: 'Free',
    processingTime: '1-2 days',
    office: 'Barangay Hall',
    url: '/services/barangay-id'
  },
  {
    id: 'police-clearance',
    title: 'Police Clearance',
    category: 'Certificates & Vital Records',
    categoryId: 'certificates',
    description: 'Police clearance coordination through municipal office',
    fee: 'Varies',
    processingTime: '3-5 days',
    office: 'PNP Solano',
    url: '/services/police-clearance'
  },
  {
    id: 'business-permit-new',
    title: 'Business Permit (New)',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Apply for a new mayor\'s permit to operate a business',
    fee: 'Varies',
    processingTime: '3-5 days',
    office: 'Business Permits & Licensing Office',
    url: '/services/business-permit-new'
  },
  {
    id: 'business-permit-renewal',
    title: 'Business Permit Renewal',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Renew your annual business permit',
    fee: 'Varies',
    processingTime: 'Same day',
    office: 'Business Permits & Licensing Office',
    url: '/services/business-permit-renewal'
  },
  {
    id: 'business-closure',
    title: 'Business Closure',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'File for business closure/termination',
    fee: 'Free',
    processingTime: '1-2 days',
    office: 'Business Permits & Licensing Office',
    url: '/services/business-closure'
  },
  {
    id: 'sanitary-permit',
    title: 'Sanitary Permit',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Health and sanitation permit for businesses',
    fee: 'Varies',
    processingTime: '1-3 days',
    office: 'Municipal Health Office',
    url: '/services/sanitary-permit'
  },
  {
    id: 'cedula',
    title: 'Community Tax Certificate (Cedula)',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Obtain cedula for individuals and businesses',
    fee: '₱5+',
    processingTime: 'Same day',
    office: 'Municipal Treasurer\'s Office',
    url: '/services/cedula'
  },
  {
    id: 'senior-citizen-id',
    title: 'Senior Citizen ID',
    category: 'Social Services & Assistance',
    categoryId: 'social-services',
    description: 'ID card and benefits for citizens 60 years and above',
    fee: 'Free',
    processingTime: '1-2 weeks',
    office: 'MSWDO / OSCA',
    url: '/services/senior-citizen-id'
  },
  {
    id: 'pwd-id',
    title: 'PWD ID & Services',
    category: 'Social Services & Assistance',
    categoryId: 'social-services',
    description: 'ID and benefits for persons with disabilities',
    fee: 'Free',
    processingTime: '1-2 weeks',
    office: 'MSWDO',
    url: '/services/pwd-id'
  },
  {
    id: 'financial-assistance',
    title: 'Financial Assistance',
    category: 'Social Services & Assistance',
    categoryId: 'social-services',
    description: 'Emergency financial aid for qualified residents',
    fee: 'Free',
    processingTime: 'Varies',
    office: 'MSWDO',
    url: '/services/financial-assistance'
  },
  {
    id: 'burial-assistance',
    title: 'Burial Assistance',
    category: 'Social Services & Assistance',
    categoryId: 'social-services',
    description: 'Financial assistance for burial expenses',
    fee: 'Free',
    processingTime: '1-3 days',
    office: 'MSWDO',
    url: '/services/burial-assistance'
  },
  {
    id: 'solo-parent-id',
    title: 'Solo Parent ID',
    category: 'Social Services & Assistance',
    categoryId: 'social-services',
    description: 'ID and benefits for solo parents',
    fee: 'Free',
    processingTime: '1-2 weeks',
    office: 'MSWDO',
    url: '/services/solo-parent-id'
  },
  {
    id: 'vaccination',
    title: 'Vaccination Programs',
    category: 'Health & Wellness',
    categoryId: 'health',
    description: 'Free immunization for children and adults',
    fee: 'Free',
    processingTime: 'Same day',
    office: 'Municipal Health Office',
    url: '/services/vaccination'
  },
  {
    id: 'health-certificate',
    title: 'Health Certificate',
    category: 'Health & Wellness',
    categoryId: 'health',
    description: 'Medical certificate for employment or business',
    fee: '₱100-200',
    processingTime: 'Same day',
    office: 'Municipal Health Office',
    url: '/services/health-certificate'
  },
  {
    id: 'medical-assistance',
    title: 'Medical Assistance',
    category: 'Health & Wellness',
    categoryId: 'health',
    description: 'Financial aid for medical expenses and hospitalization',
    fee: 'Free',
    processingTime: '1-3 days',
    office: 'Municipal Health Office / MSWDO',
    url: '/services/medical-assistance'
  },
  {
    id: 'prenatal-checkup',
    title: 'Prenatal Checkup',
    category: 'Health & Wellness',
    categoryId: 'health',
    description: 'Free prenatal care for pregnant women',
    fee: 'Free',
    processingTime: 'Same day',
    office: 'Municipal Health Office',
    url: '/services/prenatal-checkup'
  },
  {
    id: 'real-property-tax',
    title: 'Real Property Tax Payment',
    category: 'Taxation & Payments',
    categoryId: 'tax-payments',
    description: 'Pay annual real property tax (amilyar)',
    fee: 'Varies',
    processingTime: 'Same day',
    office: 'Municipal Treasurer\'s Office',
    url: '/services/real-property-tax'
  },
  {
    id: 'business-tax',
    title: 'Business Tax Payment',
    category: 'Taxation & Payments',
    categoryId: 'tax-payments',
    description: 'Pay quarterly or annual business taxes',
    fee: 'Varies',
    processingTime: 'Same day',
    office: 'Municipal Treasurer\'s Office',
    url: '/services/business-tax'
  },
  {
    id: 'tax-clearance',
    title: 'Tax Clearance',
    category: 'Taxation & Payments',
    categoryId: 'tax-payments',
    description: 'Certificate of no tax liability',
    fee: '₱50-100',
    processingTime: 'Same day',
    office: 'Municipal Treasurer\'s Office',
    url: '/services/tax-clearance'
  },
  {
    id: 'agricultural-loan',
    title: 'Agricultural Loans',
    category: 'Agriculture & Economic Development',
    categoryId: 'agriculture',
    description: 'Low-interest loans for farmers',
    fee: 'Varies',
    processingTime: '1-2 weeks',
    office: 'Municipal Agriculture Office',
    url: '/services/agricultural-loan'
  },
  {
    id: 'crop-insurance',
    title: 'Crop Insurance',
    category: 'Agriculture & Economic Development',
    categoryId: 'agriculture',
    description: 'Insurance coverage for crop damage',
    fee: 'Subsidized',
    processingTime: 'Varies',
    office: 'Municipal Agriculture Office',
    url: '/services/crop-insurance'
  },
  {
    id: 'fertilizer-assistance',
    title: 'Fertilizer Assistance',
    category: 'Agriculture & Economic Development',
    categoryId: 'agriculture',
    description: 'Free or subsidized fertilizer for registered farmers',
    fee: 'Free/Subsidized',
    processingTime: 'Varies',
    office: 'Municipal Agriculture Office',
    url: '/services/fertilizer-assistance'
  },
  {
    id: 'building-permit',
    title: 'Building Permit',
    category: 'Infrastructure & Public Works',
    categoryId: 'infrastructure',
    description: 'Permit for new construction or renovation',
    fee: 'Varies',
    processingTime: '5-10 days',
    office: 'Municipal Engineering Office',
    url: '/services/building-permit'
  },
  {
    id: 'occupancy-permit',
    title: 'Occupancy Permit',
    category: 'Infrastructure & Public Works',
    categoryId: 'infrastructure',
    description: 'Certificate of completion for new buildings',
    fee: 'Varies',
    processingTime: '3-5 days',
    office: 'Municipal Engineering Office',
    url: '/services/occupancy-permit'
  },
  {
    id: 'road-maintenance',
    title: 'Road Maintenance Request',
    category: 'Infrastructure & Public Works',
    categoryId: 'infrastructure',
    description: 'Report road damage or request repairs',
    fee: 'Free',
    processingTime: 'Varies',
    office: 'Municipal Engineering Office',
    url: '/services/road-maintenance'
  },
  {
    id: 'scholarship',
    title: 'Scholarship Programs',
    category: 'Education & Scholarship',
    categoryId: 'education',
    description: 'Financial assistance for students',
    fee: 'Free',
    processingTime: 'Varies',
    office: 'Municipal Mayor\'s Office',
    url: '/services/scholarship'
  },
  {
    id: 'student-assistance',
    title: 'Student Assistance',
    category: 'Education & Scholarship',
    categoryId: 'education',
    description: 'Educational grants and allowances',
    fee: 'Free',
    processingTime: 'Varies',
    office: 'MSWDO',
    url: '/services/student-assistance'
  },
  {
    id: 'emergency-response',
    title: 'Emergency Response',
    category: 'Public Safety & Security',
    categoryId: 'public-safety',
    description: '24/7 emergency assistance and rescue',
    fee: 'Free',
    processingTime: 'Immediate',
    office: 'MDRRMO',
    url: '/services/emergency-response'
  },
  {
    id: 'disaster-preparedness',
    title: 'Disaster Preparedness',
    category: 'Public Safety & Security',
    categoryId: 'public-safety',
    description: 'Training and resources for disaster readiness',
    fee: 'Free',
    processingTime: 'Varies',
    office: 'MDRRMO',
    url: '/services/disaster-preparedness'
  },
  {
    id: 'environmental-clearance',
    title: 'Environmental Clearance',
    category: 'Environment & Natural Resources',
    categoryId: 'environment',
    description: 'Environmental compliance certificate for projects',
    fee: 'Varies',
    processingTime: '5-10 days',
    office: 'Municipal Environment Office',
    url: '/services/environmental-clearance'
  },
  {
    id: 'tree-cutting-permit',
    title: 'Tree Cutting Permit',
    category: 'Environment & Natural Resources',
    categoryId: 'environment',
    description: 'Permit to cut or trim trees',
    fee: 'Varies',
    processingTime: '3-5 days',
    office: 'Municipal Environment Office',
    url: '/services/tree-cutting-permit'
  },
  {
    id: 'seedo-slaughterhouse',
    title: 'SEEDO Slaughterhouse',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Hog, cattle, goat, and carabao slaughter with meat inspection',
    fee: '₱40-350',
    processingTime: '37 min - 1.5 hrs',
    office: 'SEEDO Slaughterhouse',
    url: '/services/seedo-slaughterhouse'
  },
  {
    id: 'tricycle-franchising',
    title: 'Tricycle Franchising & Records',
    category: 'Business, Trade & Investment',
    categoryId: 'business',
    description: 'Apply for tricycle franchise (MTOF) and request records',
    fee: 'Varies',
    processingTime: '3-5 days',
    office: 'BPLS / SBO',
    url: '/services/tricycle-franchising'
  }
])

export const useServices = () => {
  const getAll = () => servicesData.value
  
  const getById = (id: string) => {
    return servicesData.value.find(s => s.id === id)
  }
  
  const getByCategory = (categoryId: string) => {
    return servicesData.value.filter(s => s.categoryId === categoryId)
  }
  
  const search = (query: string) => {
    if (!query) return servicesData.value
    const q = query.toLowerCase()
    return servicesData.value.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    )
  }
  
  const getCategories = () => {
    const categories = new Map<string, string>()
    servicesData.value.forEach(s => {
      if (!categories.has(s.categoryId)) {
        categories.set(s.categoryId, s.category)
      }
    })
    return Array.from(categories.entries()).map(([id, name]) => ({ id, name }))
  }
  
  return {
    getAll,
    getById,
    getByCategory,
    search,
    getCategories
  }
}
