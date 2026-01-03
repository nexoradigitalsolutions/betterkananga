import { ref } from 'vue'

export interface Resolution {
  id: string
  number: string
  title: string
  description: string
  year: number
  status: 'active' | 'expired' | 'amended'
  category: string
  dateEnacted: string
  pdfUrl: string
}

const resolutionsData = ref<Resolution[]>([
  {
    id: 'sr-2025-001',
    number: 'SR No. 2025-001',
    title: 'Community Recognition and Appreciation',
    description: 'Resolution recognizing outstanding individuals and organizations for their contributions to the municipality.',
    year: 2025,
    status: 'active',
    category: 'Recognition',
    dateEnacted: 'January 2025',
    pdfUrl: '/pdfs/resolutions/sr-2025-001.pdf'
  },
  {
    id: 'sr-2025-002',
    number: 'SR No. 2025-002',
    title: 'Budget Appropriation for Infrastructure Projects',
    description: 'Resolution appropriating funds for critical infrastructure development and maintenance programs.',
    year: 2025,
    status: 'active',
    category: 'Budget & Finance',
    dateEnacted: 'January 2025',
    pdfUrl: '/pdfs/resolutions/sr-2025-002.pdf'
  },
  {
    id: 'sr-2025-003',
    number: 'SR No. 2025-003',
    title: 'Socio-Economic Development Initiatives',
    description: 'Resolution authorizing implementation of socio-economic programs to improve quality of life for residents.',
    year: 2025,
    status: 'active',
    category: 'Development',
    dateEnacted: 'February 2025',
    pdfUrl: '/pdfs/resolutions/sr-2025-003.pdf'
  },
  {
    id: 'sr-2024-280',
    number: 'SR No. 2024-280',
    title: 'Municipal Governance Policy Framework',
    description: 'Resolution establishing framework for transparent and effective municipal governance.',
    year: 2024,
    status: 'active',
    category: 'Governance',
    dateEnacted: 'December 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-280.pdf'
  },
  {
    id: 'sr-2024-275',
    number: 'SR No. 2024-275',
    title: 'Inter-Agency Cooperation Agreement',
    description: 'Resolution establishing cooperation mechanisms with national and regional government agencies.',
    year: 2024,
    status: 'active',
    category: 'Governance',
    dateEnacted: 'November 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-275.pdf'
  },
  {
    id: 'sr-2024-270',
    number: 'SR No. 2024-270',
    title: 'Environmental Sustainability Program',
    description: 'Resolution committing municipality to comprehensive environmental sustainability and climate action.',
    year: 2024,
    status: 'active',
    category: 'Environment',
    dateEnacted: 'October 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-270.pdf'
  },
  {
    id: 'sr-2024-260',
    number: 'SR No. 2024-260',
    title: 'Youth Development and Empowerment',
    description: 'Resolution supporting youth programs and initiatives for community development and leadership.',
    year: 2024,
    status: 'active',
    category: 'Social Development',
    dateEnacted: 'September 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-260.pdf'
  },
  {
    id: 'sr-2024-250',
    number: 'SR No. 2024-250',
    title: 'Women Empowerment and Gender Equality',
    description: 'Resolution promoting women empowerment programs and ensuring gender equality in all municipal activities.',
    year: 2024,
    status: 'active',
    category: 'Social Development',
    dateEnacted: 'August 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-250.pdf'
  },
  {
    id: 'sr-2024-240',
    number: 'SR No. 2024-240',
    title: 'Tourism and Economic Development',
    description: 'Resolution promoting tourism as economic driver and supporting tourism-related business development.',
    year: 2024,
    status: 'active',
    category: 'Economic Development',
    dateEnacted: 'July 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-240.pdf'
  },
  {
    id: 'sr-2024-230',
    number: 'SR No. 2024-230',
    title: 'Disaster Risk Reduction and Management',
    description: 'Resolution establishing comprehensive disaster risk reduction framework and preparedness programs.',
    year: 2024,
    status: 'active',
    category: 'Public Safety',
    dateEnacted: 'June 2024',
    pdfUrl: '/pdfs/resolutions/sr-2024-230.pdf'
  }
])

export const useResolutionsData = () => {
  const getAll = () => resolutionsData.value
  
  const getById = (id: string) => {
    return resolutionsData.value.find(r => r.id === id)
  }
  
  const getByCategory = (category: string) => {
    return resolutionsData.value.filter(r => r.category === category)
  }
  
  const getByYear = (year: number) => {
    return resolutionsData.value.filter(r => r.year === year)
  }
  
  const getByStatus = (status: 'active' | 'expired' | 'amended') => {
    return resolutionsData.value.filter(r => r.status === status)
  }
  
  const search = (query: string) => {
    const q = query.toLowerCase()
    return resolutionsData.value.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.number.toLowerCase().includes(q)
    )
  }
  
  return {
    getAll,
    getById,
    getByCategory,
    getByYear,
    getByStatus,
    search
  }
}
