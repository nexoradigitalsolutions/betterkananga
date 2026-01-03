import { ref } from 'vue'

export interface Ordinance {
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

const ordinancesData = ref<Ordinance[]>([
  {
    id: 'sb-2025-001',
    number: 'SB No. 2025-001',
    title: 'Comprehensive Land Use Planning for Sustainable Development',
    description: 'Ordinance establishing comprehensive land use plan to promote sustainable municipal development and environmental protection.',
    year: 2025,
    status: 'active',
    category: 'Land Use & Planning',
    dateEnacted: 'January 2025',
    pdfUrl: '/pdfs/ordinances/sb-2025-001.pdf'
  },
  {
    id: 'sb-2025-002',
    number: 'SB No. 2025-002',
    title: 'Environmental Protection and Climate Action Measures',
    description: 'Ordinance implementing environmental protection measures and climate action initiatives for the municipality.',
    year: 2025,
    status: 'active',
    category: 'Environment',
    dateEnacted: 'January 2025',
    pdfUrl: '/pdfs/ordinances/sb-2025-002.pdf'
  },
  {
    id: 'sb-2025-003',
    number: 'SB No. 2025-003',
    title: 'Municipal Business Regulations Code',
    description: 'Comprehensive ordinance regulating business operations and merchant activities within Kananga municipality.',
    year: 2025,
    status: 'active',
    category: 'Business & Trade',
    dateEnacted: 'February 2025',
    pdfUrl: '/pdfs/ordinances/sb-2025-003.pdf'
  },
  {
    id: 'sb-2024-150',
    number: 'SB No. 2024-150',
    title: 'Simplified Business Registration and Licensing',
    description: 'Ordinance streamlining business registration and licensing procedures to facilitate entrepreneurship.',
    year: 2024,
    status: 'active',
    category: 'Business & Trade',
    dateEnacted: 'May 2024',
    pdfUrl: '/pdfs/ordinances/sb-2024-150.pdf'
  },
  {
    id: 'sb-2024-145',
    number: 'SB No. 2024-145',
    title: 'Public Safety and Disaster Risk Reduction',
    description: 'Ordinance establishing comprehensive public safety measures and disaster preparedness programs.',
    year: 2024,
    status: 'active',
    category: 'Public Safety',
    dateEnacted: 'March 2024',
    pdfUrl: '/pdfs/ordinances/sb-2024-145.pdf'
  },
  {
    id: 'sb-2024-140',
    number: 'SB No. 2024-140',
    title: 'Education and Scholarship Support Program',
    description: 'Ordinance creating scholarship program and supporting educational initiatives for underprivileged students.',
    year: 2024,
    status: 'active',
    category: 'Education',
    dateEnacted: 'January 2024',
    pdfUrl: '/pdfs/ordinances/sb-2024-140.pdf'
  },
  {
    id: 'sb-2024-135',
    number: 'SB No. 2024-135',
    title: 'Health and Sanitation Standards',
    description: 'Ordinance setting health and sanitation standards for food establishments and public facilities.',
    year: 2024,
    status: 'active',
    category: 'Health & Sanitation',
    dateEnacted: 'December 2023',
    pdfUrl: '/pdfs/ordinances/sb-2024-135.pdf'
  },
  {
    id: 'sb-2024-125',
    number: 'SB No. 2024-125',
    title: 'Road Safety and Traffic Management Ordinance',
    description: 'Comprehensive ordinance regulating traffic flow and ensuring road safety for all municipal residents.',
    year: 2024,
    status: 'active',
    category: 'Infrastructure',
    dateEnacted: 'October 2023',
    pdfUrl: '/pdfs/ordinances/sb-2024-125.pdf'
  },
  {
    id: 'sb-2023-100',
    number: 'SB No. 2023-100',
    title: 'Geothermal Energy Industry Support',
    description: 'Ordinance supporting and regulating geothermal energy industry operations in the municipality.',
    year: 2023,
    status: 'active',
    category: 'Energy & Infrastructure',
    dateEnacted: 'July 2023',
    pdfUrl: '/pdfs/ordinances/sb-2023-100.pdf'
  },
  {
    id: 'sb-2023-090',
    number: 'SB No. 2023-090',
    title: 'Agricultural Development and Support',
    description: 'Ordinance promoting agricultural development, crop diversification, and farmer support programs.',
    year: 2023,
    status: 'active',
    category: 'Agriculture',
    dateEnacted: 'May 2023',
    pdfUrl: '/pdfs/ordinances/sb-2023-090.pdf'
  }
])

export const useOrdinancesData = () => {
  const getAll = () => ordinancesData.value
  
  const getById = (id: string) => {
    return ordinancesData.value.find(o => o.id === id)
  }
  
  const getByCategory = (category: string) => {
    return ordinancesData.value.filter(o => o.category === category)
  }
  
  const getByYear = (year: number) => {
    return ordinancesData.value.filter(o => o.year === year)
  }
  
  const getByStatus = (status: 'active' | 'expired' | 'amended') => {
    return ordinancesData.value.filter(o => o.status === status)
  }
  
  const search = (query: string) => {
    const q = query.toLowerCase()
    return ordinancesData.value.filter(o =>
      o.title.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.number.toLowerCase().includes(q)
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
