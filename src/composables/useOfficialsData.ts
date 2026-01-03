export interface Official {
  name: string
  title: string
  email?: string
  phone?: string
}

export interface OfficialsData {
  mayor: Official
  vice_mayor: Official
  councilors: Official[]
}

const officialsData: OfficialsData = {
  mayor: {
    name: "Hon. Manuel Vicente M. Torres",
    title: "Municipal Mayor",
    email: "mayor@kananga.gov.ph",
    phone: "(078) 805-3581"
  },
  vice_mayor: {
    name: "Hon. Miguel Jorge P. Tan",
    title: "Municipal Vice Mayor",
    email: "vicemayor@kananga.gov.ph",
    phone: "(078) 805-3582"
  },
  councilors: [
    {
      name: "Hon. Fernando M. Aseo",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Minerva M. Bulawit",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Richie C. Cruz",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Alma N. Orfano",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
    },
    {
      name: "Hon. Brenzon C. Cabintoy",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Allan C. Espinosa",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Rudy B. Cogay",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    },
    {
      name: "Hon. Ronelio C. Palar",
      title: "Sangguniang Bayan Member",
      email: "council@kananga.gov.ph",
      phone: "(078) 805-3585"
    }
  ]
}

export function useOfficialsData() {
  const getMayor = (): Official => officialsData.mayor

  const getViceMayor = (): Official => officialsData.vice_mayor

  const getCouncilors = (): Official[] => officialsData.councilors

  const getAllOfficials = (): Official[] => [
    officialsData.mayor,
    officialsData.vice_mayor,
    ...officialsData.councilors
  ]

  const getByTitle = (title: string): Official[] =>
    getAllOfficials().filter(o => o.title.toLowerCase().includes(title.toLowerCase()))

  return {
    getMayor,
    getViceMayor,
    getCouncilors,
    getAllOfficials,
    getByTitle
  }
}
