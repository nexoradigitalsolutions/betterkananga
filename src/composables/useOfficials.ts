import { ref } from 'vue'

export interface Official {
  name: string
  title?: string
  position?: string
  email?: string
  phone?: string
}

export interface OfficialsData {
  mayor?: Official
  vice_mayor?: Official
  councilors?: Official[]
  [key: string]: any
}

const officialsData = ref<OfficialsData>({
  mayor: {
    name: 'Hon. Philip A. Dacayo',
    title: 'Municipal Mayor',
    position: 'Mayor',
    email: 'mayor@solano.gov.ph',
    phone: '(078) 326-5002'
  },
  vice_mayor: {
    name: 'Hon. Eduardo D. Tiongson',
    title: 'Municipal Vice Mayor',
    position: 'Vice Mayor',
    email: 'vicemayor@solano.gov.ph',
    phone: '(078) 326-5003'
  },
  councilors: [
    {
      name: 'Hon. Maria Santos',
      position: 'Sangguniang Bayan Member',
      email: 'maria.santos@solano.gov.ph',
      phone: '(078) 326-5010'
    },
    {
      name: 'Hon. Juan Dela Cruz',
      position: 'Sangguniang Bayan Member',
      email: 'juan.delacruz@solano.gov.ph',
      phone: '(078) 326-5011'
    },
    {
      name: 'Hon. Rosa Garcia',
      position: 'Sangguniang Bayan Member',
      email: 'rosa.garcia@solano.gov.ph',
      phone: '(078) 326-5012'
    },
    {
      name: 'Hon. Pedro Reyes',
      position: 'Sangguniang Bayan Member',
      email: 'pedro.reyes@solano.gov.ph',
      phone: '(078) 326-5013'
    },
    {
      name: 'Hon. Ana Lopez',
      position: 'Sangguniang Bayan Member',
      email: 'ana.lopez@solano.gov.ph',
      phone: '(078) 326-5014'
    },
    {
      name: 'Hon. Carlos Fernandez',
      position: 'Sangguniang Bayan Member',
      email: 'carlos.fernandez@solano.gov.ph',
      phone: '(078) 326-5015'
    },
    {
      name: 'Hon. Diana Castillo',
      position: 'Sangguniang Bayan Member',
      email: 'diana.castillo@solano.gov.ph',
      phone: '(078) 326-5016'
    },
    {
      name: 'Hon. Roberto Gomez',
      position: 'Sangguniang Bayan Member',
      email: 'roberto.gomez@solano.gov.ph',
      phone: '(078) 326-5017'
    }
  ],
  departments: [
    {
      name: 'Municipal Engineering Office',
      head: 'Eng. Antonio Ramos',
      email: 'engineering@solano.gov.ph',
      phone: '(078) 326-5020'
    },
    {
      name: 'Municipal Health Office',
      head: 'Dr. Marie Santos',
      email: 'health@solano.gov.ph',
      phone: '(078) 326-5021'
    },
    {
      name: 'Social Welfare & Development Office',
      head: 'Ms. Elena Villanueva',
      email: 'swdo@solano.gov.ph',
      phone: '(078) 326-5022'
    },
    {
      name: 'Municipal Assessor',
      head: 'Mr. Ruben Santos',
      email: 'assessor@solano.gov.ph',
      phone: '(078) 326-5023'
    }
  ]
})

export const useOfficials = () => {
  const getAll = () => officialsData.value
  
  const getMayor = () => officialsData.value.mayor
  
  const getViceMayor = () => officialsData.value.vice_mayor
  
  const getCouncilors = () => officialsData.value.councilors || []
  
  const getDepartments = () => officialsData.value.departments || []
  
  return {
    getAll,
    getMayor,
    getViceMayor,
    getCouncilors,
    getDepartments
  }
}
