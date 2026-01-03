import { ref } from 'vue'

export interface BarangayOfficial {
  position: string
  name: string
  phone?: string
}

export interface Barangay {
  id: string
  name: string
  officials: BarangayOfficial[]
  latitude: number
  longitude: number
  area?: string
  population?: string
}

const barangayOfficials = ref<Barangay[]>([
  {
    id: 'aguiting',
    name: 'Aguiting',
    latitude: 11.1923,
    longitude: 124.2756,
    area: '8.5 km²',
    population: '3,200',
    officials: [
      { position: 'Punong Barangay', name: 'Antonio M. Rasing' },
      { position: 'Barangay Kagawad', name: 'Romeo C. Diaz' },
      { position: 'Barangay Kagawad', name: 'Maria Santos' },
      { position: 'Barangay Kagawad', name: 'Jesus Fernandez' },
      { position: 'Barangay Secretary', name: 'Ligaya Reyes' },
      { position: 'Barangay Treasurer', name: 'Eduardo Morales' }
    ]
  },
  {
    id: 'cacao',
    name: 'Cacao',
    latitude: 11.1885,
    longitude: 124.2891,
    area: '6.2 km²',
    population: '2,800',
    officials: [
      { position: 'Punong Barangay', name: 'Rafael B. Canoy' },
      { position: 'Barangay Kagawad', name: 'Pedro Cabrera' },
      { position: 'Barangay Kagawad', name: 'Rosa Garcia' },
      { position: 'Barangay Kagawad', name: 'Juan Mendoza' },
      { position: 'Barangay Secretary', name: 'Myrna Tolentino' },
      { position: 'Barangay Treasurer', name: 'Carlos Dominguez' }
    ]
  },
  {
    id: 'kawayan',
    name: 'Kawayan',
    latitude: 11.1945,
    longitude: 124.2623,
    area: '7.1 km²',
    population: '3,100',
    officials: [
      { position: 'Punong Barangay', name: 'Wilmer C. Espena' },
      { position: 'Barangay Kagawad', name: 'Danilo Ruiz' },
      { position: 'Barangay Kagawad', name: 'Elena Cruz' },
      { position: 'Barangay Kagawad', name: 'Francisco Soto' },
      { position: 'Barangay Secretary', name: 'Josephine Teves' },
      { position: 'Barangay Treasurer', name: 'Alberto Navarro' }
    ]
  },
  {
    id: 'hiluctogan',
    name: 'Hiluctogan',
    latitude: 11.2015,
    longitude: 124.2785,
    area: '9.3 km²',
    population: '4,200',
    officials: [
      { position: 'Punong Barangay', name: 'Emilio T. Cañada' },
      { position: 'Barangay Kagawad', name: 'Vicente Palma' },
      { position: 'Barangay Kagawad', name: 'Lucia Flores' },
      { position: 'Barangay Kagawad', name: 'Mariano Duran' },
      { position: 'Barangay Secretary', name: 'Rosa Aguirre' },
      { position: 'Barangay Treasurer', name: 'Rodolfo Santiago' }
    ]
  },
  {
    id: 'libertad',
    name: 'Libertad',
    latitude: 11.1855,
    longitude: 124.2745,
    area: '5.8 km²',
    population: '2,600',
    officials: [
      { position: 'Punong Barangay', name: 'Cesar G. Dela Cruz' },
      { position: 'Barangay Kagawad', name: 'Pablo Reyes' },
      { position: 'Barangay Kagawad', name: 'Angela Flores' },
      { position: 'Barangay Kagawad', name: 'Sergio Moreno' },
      { position: 'Barangay Secretary', name: 'Evelyn Miranda' },
      { position: 'Barangay Treasurer', name: 'Felix Cordova' }
    ]
  },
  {
    id: 'libongao',
    name: 'Libongao',
    latitude: 11.1925,
    longitude: 124.2915,
    area: '8.7 km²',
    population: '3,500',
    officials: [
      { position: 'Punong Barangay', name: 'Tomas H. Gonzales' },
      { position: 'Barangay Kagawad', name: 'Andres Ramos' },
      { position: 'Barangay Kagawad', name: 'Sandra Ocampo' },
      { position: 'Barangay Kagawad', name: 'Lucas Villanueva' },
      { position: 'Barangay Secretary', name: 'Tina Roldan' },
      { position: 'Barangay Treasurer', name: 'Roberto Gutierrez' }
    ]
  },
  {
    id: 'lim-ao',
    name: 'Lim-ao',
    latitude: 11.2045,
    longitude: 124.2856,
    area: '7.4 km²',
    population: '3,000',
    officials: [
      { position: 'Punong Barangay', name: 'Dionisio R. Salazar' },
      { position: 'Barangay Kagawad', name: 'Domingo Zamora' },
      { position: 'Barangay Kagawad', name: 'Ramona Guerrero' },
      { position: 'Barangay Kagawad', name: 'Manuel Aguirre' },
      { position: 'Barangay Secretary', name: 'Norma Pascual' },
      { position: 'Barangay Treasurer', name: 'Antonio Soto' }
    ]
  },
  {
    id: 'lonoy',
    name: 'Lonoy',
    latitude: 11.1795,
    longitude: 124.2812,
    area: '6.9 km²',
    population: '2,900',
    officials: [
      { position: 'Punong Barangay', name: 'Ernesto V. Velasquez' },
      { position: 'Barangay Kagawad', name: 'Ricardo Santos' },
      { position: 'Barangay Kagawad', name: 'Consuelo Rivas' },
      { position: 'Barangay Kagawad', name: 'Silvio Romero' },
      { position: 'Barangay Secretary', name: 'Patricia Flores' },
      { position: 'Barangay Treasurer', name: 'Hector Marquez' }
    ]
  },
  {
    id: 'mahawan',
    name: 'Mahawan',
    latitude: 11.2085,
    longitude: 124.2723,
    area: '8.1 km²',
    population: '3,400',
    officials: [
      { position: 'Punong Barangay', name: 'Renato L. Fernandez' },
      { position: 'Barangay Kagawad', name: 'Aurelio Navarro' },
      { position: 'Barangay Kagawad', name: 'Belinda Cruz' },
      { position: 'Barangay Kagawad', name: 'Gumersindo Reyes' },
      { position: 'Barangay Secretary', name: 'Imelda Diaz' },
      { position: 'Barangay Treasurer', name: 'Gregorio Medina' }
    ]
  },
  {
    id: 'masarayao',
    name: 'Masarayao',
    latitude: 11.1825,
    longitude: 124.2685,
    area: '6.5 km²',
    population: '2,700',
    officials: [
      { position: 'Punong Barangay', name: 'Salvador M. Santos' },
      { position: 'Barangay Kagawad', name: 'Bartolome Ramos' },
      { position: 'Barangay Kagawad', name: 'Francisca Uy' },
      { position: 'Barangay Kagawad', name: 'Camilo Navarro' },
      { position: 'Barangay Secretary', name: 'Justina Vargas' },
      { position: 'Barangay Treasurer', name: 'Gabriel Morales' }
    ]
  },
  {
    id: 'monte-alegre',
    name: 'Monte Alegre',
    latitude: 11.1995,
    longitude: 124.2567,
    area: '7.6 km²',
    population: '3,300',
    officials: [
      { position: 'Punong Barangay', name: 'Leandro D. Rojas' },
      { position: 'Barangay Kagawad', name: 'Ismael Cortez' },
      { position: 'Barangay Kagawad', name: 'Graciana Flores' },
      { position: 'Barangay Kagawad', name: 'Nazario Fuentes' },
      { position: 'Barangay Secretary', name: 'Amelia Torres' },
      { position: 'Barangay Treasurer', name: 'Jacinto Romero' }
    ]
  },
  {
    id: 'monte-bello',
    name: 'Monte Bello',
    latitude: 11.1895,
    longitude: 124.2634,
    area: '8.3 km²',
    population: '3,600',
    officials: [
      { position: 'Punong Barangay', name: 'Rolando C. Merced' },
      { position: 'Barangay Kagawad', name: 'Feliciano Garay' },
      { position: 'Barangay Kagawad', name: 'Delores Salazar' },
      { position: 'Barangay Kagawad', name: 'Julio Montoya' },
      { position: 'Barangay Secretary', name: 'Herminia Rosas' },
      { position: 'Barangay Treasurer', name: 'Benito Calderon' }
    ]
  },
  {
    id: 'naghalin',
    name: 'Naghalin',
    latitude: 11.2125,
    longitude: 124.2801,
    area: '7.2 km²',
    population: '3,050',
    officials: [
      { position: 'Punong Barangay', name: 'Valentino P. Arellano' },
      { position: 'Barangay Kagawad', name: 'Herminio Lara' },
      { position: 'Barangay Kagawad', name: 'Pilar Suarez' },
      { position: 'Barangay Kagawad', name: 'Salvador Reyes' },
      { position: 'Barangay Secretary', name: 'Carmen Vargas' },
      { position: 'Barangay Treasurer', name: 'Ruperto Flores' }
    ]
  },
  {
    id: 'natubgan',
    name: 'Natubgan',
    latitude: 11.1965,
    longitude: 124.2546,
    area: '6.8 km²',
    population: '2,950',
    officials: [
      { position: 'Punong Barangay', name: 'Florentino G. Orozco' },
      { position: 'Barangay Kagawad', name: 'Teofilo Ramos' },
      { position: 'Barangay Kagawad', name: 'Soledad Reyes' },
      { position: 'Barangay Kagawad', name: 'Geronimo Castillo' },
      { position: 'Barangay Secretary', name: 'Violeta Mendoza' },
      { position: 'Barangay Treasurer', name: 'Aurelio Montoya' }
    ]
  },
  {
    id: 'poblacion',
    name: 'Poblacion',
    latitude: 11.1875,
    longitude: 124.2756,
    area: '4.2 km²',
    population: '5,800',
    officials: [
      { position: 'Punong Barangay', name: 'Marcelino R. Torres' },
      { position: 'Barangay Kagawad', name: 'Francisco Dela Cruz' },
      { position: 'Barangay Kagawad', name: 'Rosario Reyes' },
      { position: 'Barangay Kagawad', name: 'Luciano Flores' },
      { position: 'Barangay Secretary', name: 'Teresa Morales' },
      { position: 'Barangay Treasurer', name: 'Ruben Montero' }
    ]
  },
  {
    id: 'rizal',
    name: 'Rizal',
    latitude: 11.2015,
    longitude: 124.2912,
    area: '7.8 km²',
    population: '3,250',
    officials: [
      { position: 'Punong Barangay', name: 'Cipriano B. Guzman' },
      { position: 'Barangay Kagawad', name: 'Modesto Zamora' },
      { position: 'Barangay Kagawad', name: 'Elvira Vargas' },
      { position: 'Barangay Kagawad', name: 'Estanislao Gutierrez' },
      { position: 'Barangay Secretary', name: 'Victoria Miranda' },
      { position: 'Barangay Treasurer', name: 'Perfecto Navarro' }
    ]
  },
  {
    id: 'san-ignacio',
    name: 'San Ignacio',
    latitude: 11.1945,
    longitude: 124.2943,
    area: '5.9 km²',
    population: '2,750',
    officials: [
      { position: 'Punong Barangay', name: 'Agustin S. Medina' },
      { position: 'Barangay Kagawad', name: 'Timoteo Soto' },
      { position: 'Barangay Kagawad', name: 'Matilda Romero' },
      { position: 'Barangay Kagawad', name: 'Fabiano Ramos' },
      { position: 'Barangay Secretary', name: 'Eulalia Ortiz' },
      { position: 'Barangay Treasurer', name: 'Hilario Reyes' }
    ]
  },
  {
    id: 'san-isidro',
    name: 'San Isidro',
    latitude: 11.2055,
    longitude: 124.2643,
    area: '7.3 km²',
    population: '3,150',
    officials: [
      { position: 'Punong Barangay', name: 'Pascual T. Castillo' },
      { position: 'Barangay Kagawad', name: 'Gilberto Flores' },
      { position: 'Barangay Kagawad', name: 'Edith Lara' },
      { position: 'Barangay Kagawad', name: 'Policarpo Duran' },
      { position: 'Barangay Secretary', name: 'Araceli Moreno' },
      { position: 'Barangay Treasurer', name: 'Valentin Cordova' }
    ]
  },
  {
    id: 'santo-domingo',
    name: 'Santo Domingo',
    latitude: 11.1825,
    longitude: 124.2856,
    area: '8.5 km²',
    population: '3,700',
    officials: [
      { position: 'Punong Barangay', name: 'Lamberto V. Gutierrez' },
      { position: 'Barangay Kagawad', name: 'Silvano Ramirez' },
      { position: 'Barangay Kagawad', name: 'Presentacion Santos' },
      { position: 'Barangay Kagawad', name: 'Aurelio Cacho' },
      { position: 'Barangay Secretary', name: 'Lorenza Fernandez' },
      { position: 'Barangay Treasurer', name: 'Mariano Diaz' }
    ]
  },
  {
    id: 'santo-nino',
    name: 'Santo Niño',
    latitude: 11.1895,
    longitude: 124.2923,
    area: '6.1 km²',
    population: '2,850',
    officials: [
      { position: 'Punong Barangay', name: 'Victorino L. Palad' },
      { position: 'Barangay Kagawad', name: 'Graciano Flores' },
      { position: 'Barangay Kagawad', name: 'Natividad Reyes' },
      { position: 'Barangay Kagawad', name: 'Exequiel Morales' },
      { position: 'Barangay Secretary', name: 'Francesca Aguilar' },
      { position: 'Barangay Treasurer', name: 'Serafin Romero' }
    ]
  },
  {
    id: 'tagaytay',
    name: 'Tagaytay',
    latitude: 11.1765,
    longitude: 124.2734,
    area: '7.7 km²',
    population: '3,200',
    officials: [
      { position: 'Punong Barangay', name: 'Roderico M. Montoya' },
      { position: 'Barangay Kagawad', name: 'Fortunato Lara' },
      { position: 'Barangay Kagawad', name: 'Isidra Cortez' },
      { position: 'Barangay Kagawad', name: 'Rigoberto Vargas' },
      { position: 'Barangay Secretary', name: 'Basilisa Gutierrez' },
      { position: 'Barangay Treasurer', name: 'Calixto Soto' }
    ]
  },
  {
    id: 'tongonan',
    name: 'Tongonan',
    latitude: 11.1945,
    longitude: 124.2678,
    area: '9.2 km²',
    population: '4,100',
    officials: [
      { position: 'Punong Barangay', name: 'Reynaldo C. Gonzales' },
      { position: 'Barangay Kagawad', name: 'Sinfronio Flores' },
      { position: 'Barangay Kagawad', name: 'Concepcion Ramos' },
      { position: 'Barangay Kagawad', name: 'Isidoro Mendoza' },
      { position: 'Barangay Secretary', name: 'Fidela Navarro' },
      { position: 'Barangay Treasurer', name: 'Frederico Torres' }
    ]
  },
  {
    id: 'tugbong',
    name: 'Tugbong',
    latitude: 11.2025,
    longitude: 124.2834,
    area: '6.4 km²',
    population: '2,600',
    officials: [
      { position: 'Punong Barangay', name: 'Faustino Q. Santos' },
      { position: 'Barangay Kagawad', name: 'Rosario Diaz' },
      { position: 'Barangay Kagawad', name: 'Arcadio Flores' },
      { position: 'Barangay Kagawad', name: 'Maxima Duran' },
      { position: 'Barangay Secretary', name: 'Leonarda Morales' },
      { position: 'Barangay Treasurer', name: 'Emiliano Rivas' }
    ]
  }
])

export const useBarangayOfficials = () => {
  const getAll = () => barangayOfficials.value
  
  const getById = (id: string) => {
    return barangayOfficials.value.find(b => b.id === id)
  }
  
  return {
    barangays: barangayOfficials,
    getAll,
    getById
  }
}
