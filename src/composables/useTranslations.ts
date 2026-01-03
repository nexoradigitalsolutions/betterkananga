import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

export const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-government': 'Government',
    'nav-statistics': 'Statistics',
    'nav-legislative': 'Legislative',
    'nav-transparency': 'Transparency',
    'nav-contact': 'Contact',
    
    // Home Page
    'hero-title': 'Welcome to BetterKananga',
    'hero-subtitle': 'Access government services, information, and resources for the people of Kananga, Leyte.',
    'hero-browse-services': 'Browse Services',
    'hero-contact-us': 'Contact Us',
    'hero-find-service': 'Find a Service',
    'hero-search-placeholder': 'e.g., birth certificate, business permit, tax...',
    'hero-popular': 'Popular:',
    
    // Services Section
    'section-popular': 'Popular Services',
    'section-popular-desc': 'Quick access to frequently requested municipal services',
    'service-certificates': 'Certificates',
    'service-certificates-desc': 'Birth, marriage, death certificates',
    'service-business': 'Business Permits',
    'service-business-desc': 'New permits and renewals',
    'service-tax': 'Tax Payments',
    'service-tax-desc': 'Property and business taxes',
    'service-social': 'Social Services',
    'service-social-desc': 'Senior citizen & PWD services',
    'service-health': 'Health Services',
    'service-health-desc': 'Medical assistance & programs',
    'btn-view-all-services': 'View All Services',
    'btn-view-all-services-desc': 'Browse complete directory',
    
    // Government
    'page-government': 'Government Leadership',
    'page-government-desc': 'Meet the officials serving the Municipality of Kananga',
    'executive-leadership': 'Executive Leadership',
    'legislative-body-title': 'Legislative Body',
    'municipal-mayor': 'Municipal Mayor',
    'municipal-vice-mayor': 'Municipal Vice Mayor',
    'vice-mayor': 'Vice Mayor',
    'position-mayor': 'Mayor',
    'position-viceayor': 'Vice Mayor',
    'position-councilor': 'Councilor',
    
    // Services Page
    'services-title': 'Municipal Services Directory',
    'services-desc': 'Find all LGU Kananga services with fees, requirements, and processing times',
    'search-services': 'Search Services',
    'filter-category': 'Filter by Category',
    'all-categories': 'All Categories',
    'showing-results': 'Showing',
    'of': 'of',
    'services': 'services',
    'no-services-found': 'No Services Found',
    'no-services-adjust': 'Try adjusting your search or filter criteria',
    'clear-filters': 'Clear Filters',
    'view-details': 'View Details',
    
    // Statistics
    'statistics-title': 'Municipal Statistics',
    'statistics-desc': 'Key data about Kananga, Leyte',
    'stat-population': 'Total Population',
    'stat-population-desc': '(2024 Census)',
    'stat-barangays': 'Barangays',
    'stat-land-area': 'Land Area (km²)',
    'stat-demographics': 'Demographics',
    'stat-classification': 'Classification',
    'stat-economy': 'Economy',
    'stat-1st-class': '1st Class Municipality',
    'stat-1st-class-desc': 'Kananga is classified as a 1st class municipality based on its income classification.',
    'stat-key-barangays': 'Key Barangays',
    'stat-barangays-desc': 'Administrative divisions including Osmeña, Bagumbayan, Cabaruan, and others serving diverse communities.',
    'stat-income': 'Income Classification',
    'stat-established': 'Year Established',
    
    // Legislative
    'legislative-title': 'Legislative Documents',
    'legislative-desc': 'Ordinances and Resolutions from Sangguniang Bayan',
    'legislative-ordinances': 'Ordinances',
    'legislative-ordinances-desc': 'Laws passed by the Sangguniang Bayan on various municipal matters including land use, business regulations, and public safety.',
    'legislative-latest-ordinances': 'Latest Ordinances:',
    'legislative-view-ordinances': 'View All Ordinances',
    'legislative-resolutions': 'Resolutions',
    'legislative-resolutions-desc': 'Declarations and resolutions on specific matters including recognitions, appropriations, and policy directions.',
    'legislative-latest-resolutions': 'Latest Resolutions:',
    'legislative-view-resolutions': 'View All Resolutions',
    'legislative-about-title': 'About the Sangguniang Bayan',
    'legislative-about-desc': 'The Sangguniang Bayan is the legislative body of Kananga, Leyte, composed of elected representatives who formulate and enact policies for the municipality\'s development.',
    
    // Budget
    'budget-title': 'Budget & Transparency',
    'budget-desc': 'Financial reports and government expenditures of LGU Kananga',
    
    // Contact
    'contact-title': 'Contact Information',
    'contact-desc': 'Get in touch with LGU Kananga for inquiries and services',
    'contact-get-in-touch': 'Get in Touch',
    'contact-phone': 'Phone',
    'contact-phone-desc': 'Call us during office hours',
    'contact-email': 'Email',
    'contact-email-desc': 'Send us your inquiries',
    'contact-address': 'Address',
    'contact-address-desc': 'Visit us in person',
    'contact-hours': 'Monday - Friday: 8:00 AM - 5:00 PM',
    'contact-response': 'Response within 24 hours',
    'contact-form-title': 'Send us a Message',
    'contact-form-name': 'Your Name',
    'contact-form-email': 'Your Email',
    'contact-form-phone': 'Your Phone',
    'contact-form-subject': 'Subject',
    'contact-form-message': 'Message',
    'contact-form-send': 'Send Message',
    'contact-department': 'Department',
    'contact-office-hours': 'Office Hours',
    'contact-open-mon-fri': 'Open Mon-Fri, 8-5',
    
    // News
    'news-title': 'News & Updates',
    'news-desc': 'Latest announcements and updates from LGU Kananga',
    'news-featured': 'Featured News',
    'news-announcement': 'Announcement',
    'news-subscribe': 'Subscribe to receive the latest news and announcements from LGU Kananga',
    
    // Barangay Detail
    'barangay-details': 'Learn more about this barangay',
    'barangay-not-found': 'The barangay you are looking for does not exist.',
    'location-map': 'Location Map',
    'area': 'Area',
    'population': 'Population',
    'total-officials': 'Total Officials',
    'barangay-officials': 'Barangay Officials',
    'barangay-info': 'About Barangay Administration',
    'barangay-info-desc': 'Each barangay has its own local government unit with elected officials (Punong Barangay and Sangguniang Barangay) responsible for local affairs, peace and order, and community services.',
    'back': 'Back',
    'back-to-government': 'Back to Government',
    'kagawads': 'Barangay Councilmen',
    'chief-executive': 'Punong Barangay (Chief Executive)',
    'not-found': 'Not Found',
    
    // General
    'loading': 'Loading...',
    'error': 'An error occurred',
    'success': 'Success',
    'close': 'Close',
  },
  fil: {
    // Navigation
    'nav-home': 'Tahanan',
    'nav-services': 'Mga Serbisyo',
    'nav-government': 'Pamahalaan',
    'nav-statistics': 'Estadistika',
    'nav-legislative': 'Batas-Lokal',
    'nav-transparency': 'Transparency',
    'nav-contact': 'Makipag-ugnayan',
    
    // Home Page
    'hero-title': 'Maligayang Pagdating sa BetterKananga',
    'hero-subtitle': 'Palakasin ang inyong access sa mga serbisyo ng pamahalaan, impormasyon, at kagamitan para sa mga tao ng Kananga, Leyte.',
    'hero-browse-services': 'Tingnan ang Mga Serbisyo',
    'hero-contact-us': 'Makipag-ugnayan sa Amin',
    'hero-find-service': 'Hanapin ang isang Serbisyo',
    'hero-search-placeholder': 'hal., birth certificate, business permit, tax...',
    'hero-popular': 'Sikat:',
    
    // Services Section
    'section-popular': 'Mga Sikat na Serbisyo',
    'section-popular-desc': 'Mabilis na access sa mga madalas na hinihinging serbisyo ng lungsod',
    'service-certificates': 'Mga Sertipiko',
    'service-certificates-desc': 'Sertipiko ng paganak, kasal, at kamatayan',
    'service-business': 'Business Permits',
    'service-business-desc': 'Bagong permit at pagpapabago',
    'service-tax': 'Pagbabayad ng Buwis',
    'service-tax-desc': 'Buwis sa ari-arian at negosyo',
    'service-social': 'Social Services',
    'service-social-desc': 'Mga serbisyo para sa senior at PWD',
    'service-health': 'Health Services',
    'service-health-desc': 'Tulong sa medikal at mga programa',
    'btn-view-all-services': 'Tingnan ang Lahat ng Serbisyo',
    'btn-view-all-services-desc': 'Tuklasin ang kumpletong direktoryo',
    
    // Government
    'page-government': 'Pamumuno ng Pamahalaan',
    'page-government-desc': 'Kilalanin ang mga opisyal na nagsisilbi sa Munisipyo ng Kananga',
    'executive-leadership': 'Pangasiwaan ng Ehekutibo',
    'legislative-body-title': 'Katawan ng Batas',
    'municipal-mayor': 'Punong-Bayan ng Munisipyo',
    'municipal-vice-mayor': 'Bise Punong-Bayan ng Munisipyo',
    'vice-mayor': 'Bise-Punong-Bayan',
    'position-mayor': 'Punong-Bayan',
    'position-viceayor': 'Bise-Punong-Bayan',
    'position-councilor': 'Konsehero',
    
    // Services Page
    'services-title': 'Direkturyo ng Mga Serbisyong Pampubliko',
    'services-desc': 'Hanapin ang lahat ng mga serbisyo ng LGU Kananga na may bayad, pangangailangan, at oras ng pagpoproseso',
    'search-services': 'Maghanap ng Mga Serbisyo',
    'filter-category': 'Salain ayon sa Kategorya',
    'all-categories': 'Lahat ng Kategorya',
    'showing-results': 'Ipinakikita',
    'of': 'ng',
    'services': 'mga serbisyo',
    'no-services-found': 'Walang Serbisyong Nahanap',
    'no-services-adjust': 'Subukan na mag-adjust ng inyong paghahanap o filter criteria',
    'clear-filters': 'I-clear ang mga Filter',
    'view-details': 'Tingnan ang Detalye',
    
    // Statistics
    'statistics-title': 'Istatistika ng Munisipyo',
    'statistics-desc': 'Mahalagang impormasyon tungkol sa Kananga, Leyte',
    'stat-population': 'Kabuuang Populasyon',
    'stat-population-desc': '(2024 Census)',
    'stat-barangays': 'Mga Barangay',
    'stat-land-area': 'Lugar ng Lupa (km²)',
    'stat-demographics': 'Demografiya',
    'stat-classification': 'Pag-uuri',
    'stat-economy': 'Ekonomiya',
    'stat-1st-class': '1st Class Municipality',
    'stat-1st-class-desc': 'Ang Kananga ay naitala bilang 1st class municipality batay sa kita ng bawat pamahalaan.',
    'stat-key-barangays': 'Mga Pangunahing Barangay',
    'stat-barangays-desc': 'Mga sangay ng administratibo kabilang ang Osmeña, Bagumbayan, Cabaruan, at iba pa na nagsisilbi sa iba\'t ibang komunidad.',
    'stat-income': 'Pagkakataon ng Kita',
    'stat-established': 'Taon ng Pagkakatatag',
    
    // Legislative
    'legislative-title': 'Mga Dokumento ng Lehislatura',
    'legislative-desc': 'Mga Ordinansa at Resolusyon mula sa Sangguniang Bayan',
    'legislative-ordinances': 'Mga Ordinansa',
    'legislative-ordinances-desc': 'Mga batas na ipinasa ng Sangguniang Bayan sa iba\'t ibang mga bagay ng munisipyo kabilang ang paggamit ng lupa, patakaran sa negosyo, at kaligtasan ng publiko.',
    'legislative-latest-ordinances': 'Pinakabagong Mga Ordinansa:',
    'legislative-view-ordinances': 'Tingnan ang Lahat ng Ordinansa',
    'legislative-resolutions': 'Mga Resolusyon',
    'legislative-resolutions-desc': 'Mga deklarasyon at resolusyon sa mga partikular na isyu kabilang ang pagkilala, paglalaan, at direksyon ng patakaran.',
    'legislative-latest-resolutions': 'Pinakabagong Mga Resolusyon:',
    'legislative-view-resolutions': 'Tingnan ang Lahat ng Resolusyon',
    'legislative-about-title': 'Tungkol sa Sangguniang Bayan',
    'legislative-about-desc': 'Ang Sangguniang Bayan ay ang lehislaturang katawan ng Kananga, Leyte, na binubuo ng mga piniling kinatawan na bumubuo at nagpapatupad ng mga patakaran para sa pag-unlad ng munisipyo.',
    
    // Budget
    'budget-title': 'Budget at Transparency',
    'budget-desc': 'Mga ulat sa pananalapi at paggastos ng pamahalaan ng LGU Kananga',
    
    // Contact
    'contact-title': 'Impormasyon sa Makipag-ugnayan',
    'contact-desc': 'Makipag-ugnayan sa LGU Kananga para sa mga katanungan at serbisyo',
    'contact-get-in-touch': 'Makipag-ugnayan',
    'contact-phone': 'Telepono',
    'contact-phone-desc': 'Tawagan kami sa oras ng opisina',
    'contact-email': 'Email',
    'contact-email-desc': 'Ipadala sa amin ang inyong mga katanungan',
    'contact-address': 'Tirahan',
    'contact-address-desc': 'Bisitahin kami ng personal',
    'contact-hours': 'Lunes - Biyernes: 8:00 AM - 5:00 PM',
    'contact-response': 'Sasagot kami sa loob ng 24 na oras',
    'contact-form-title': 'Magpadala sa Amin ng Mensahe',
    'contact-form-name': 'Inyong Pangalan',
    'contact-form-email': 'Inyong Email',
    'contact-form-phone': 'Inyong Telepono',
    'contact-form-subject': 'Paksa',
    'contact-form-message': 'Mensahe',
    'contact-form-send': 'Magpadala ng Mensahe',
    'contact-department': 'Departamento',
    'contact-office-hours': 'Oras ng Opisina',
    'contact-open-mon-fri': 'Bukas Lun-Biy, 8-5',
    
    // News
    'news-title': 'Balita & Mga Update',
    'news-desc': 'Mga pinakabagong anunsyo at update mula sa LGU Kananga',
    'news-featured': 'Nangunguna na Balita',
    'news-announcement': 'Anunsyo',
    'news-subscribe': 'Mag-subscribe upang makatanggap ng pinakabagong balita at anunsyo mula sa LGU Kananga',
    
    // Barangay Detail
    'barangay-details': 'Matuto pa tungkol sa barangay na ito',
    'barangay-not-found': 'Ang barangay na inyong hinahanap ay hindi umiiral.',
    'location-map': 'Mapa ng Lokasyon',
    'area': 'Lugar',
    'population': 'Populasyon',
    'total-officials': 'Kabuuang mga Opisyal',
    'barangay-officials': 'Mga Opisyal ng Barangay',
    'barangay-info': 'Tungkol sa Administrasyon ng Barangay',
    'barangay-info-desc': 'Ang bawat barangay ay may sariling yunit ng lokal na pamahalaan na may mga piniling opisyal (Punong Barangay at Sangguniang Barangay) na responsable sa mga lokal na gawain, kapayapaan at kaayusan, at mga serbisyo ng komunidad.',
    'back': 'Bumalik',
    'back-to-government': 'Bumalik sa Pamahalaan',
    'kagawads': 'Mga Kagawad ng Barangay',
    'chief-executive': 'Punong Barangay (Pangunahing Ehekutibo)',
    'not-found': 'Hindi Nahanap',
    
    // General
    'loading': 'Naglo-load...',
    'error': 'Nagkaroon ng kamalian',
    'success': 'Matagumpay',
    'close': 'Isara',
  },
  bis: {
    // Navigation
    'nav-home': 'Balay',
    'nav-services': 'Mga Serbisyo',
    'nav-government': 'Gobiyerno',
    'nav-statistics': 'Mga Estadistika',
    'nav-legislative': 'Batas-Lokal',
    'nav-transparency': 'Transparency',
    'nav-contact': 'Makipag-ugnayan',
    
    // Home Page
    'hero-title': 'Maayong Pagabut sa BetterKananga',
    'hero-subtitle': 'I-access ang mga serbisyo ng gobyerno, impormasyon, at mga adlaw para sa mga tawo sa Kananga, Leyte.',
    'hero-browse-services': 'Tuklasin ang Mga Serbisyo',
    'hero-contact-us': 'Makipag-ugnayan',
    'hero-find-service': 'Hanapin ang Serbisyo',
    'hero-search-placeholder': 'hal., birth certificate, business permit, tax...',
    'hero-popular': 'Bantug:',
    
    // Services Section
    'section-popular': 'Mga Bantug na Serbisyo',
    'section-popular-desc': 'Mabilis na pagsulod sa mga sagad na hinahangad na serbisyo sa siyudad',
    'service-certificates': 'Mga Sertipiko',
    'service-certificates-desc': 'Sertipiko ng pagkatawo, kasal, at kaubisan',
    'service-business': 'Business Permits',
    'service-business-desc': 'Bag-ong permit at pagbabago',
    'service-tax': 'Pagbabayad ng Buwis',
    'service-tax-desc': 'Buwis sa kabit-bahay at negosyo',
    'service-social': 'Social Services',
    'service-social-desc': 'Mga serbisyo para sa matanda at PWD',
    'service-health': 'Health Services',
    'service-health-desc': 'Tulong sa kalusugan at mga programa',
    'btn-view-all-services': 'Tuklasin ang Lahat ng Serbisyo',
    'btn-view-all-services-desc': 'Tuklasin ang kompleto diretoryo',
    
    // Government
    'page-government': 'Pamumuno sang Gobiyerno',
    'page-government-desc': 'Kilala ang mga opisyal na nagsisilbi sa Munisipyo sang Kananga',
    'executive-leadership': 'Pangasiwaan sang Ehekutibo',
    'legislative-body-title': 'Katawan sang Batas',
    'municipal-mayor': 'Mayor sang Munisipyo',
    'municipal-vice-mayor': 'Vice Mayor sang Munisipyo',
    'vice-mayor': 'Bise-Mayor',
    'position-mayor': 'Mayor',
    'position-viceayor': 'Bise-Mayor',
    'position-councilor': 'Konsehero',
    
    // Services Page
    'services-title': 'Directory ng Mga Serbisyong Pampubliko',
    'services-desc': 'Hanapin ang lahat ng mga serbisyo ng LGU Kananga na may bayad, pangangailangan, at oras ng proseso',
    'search-services': 'Maghanap ng Mga Serbisyo',
    'filter-category': 'Salain sang Kategorya',
    'all-categories': 'Lahat ng Kategorya',
    'showing-results': 'Ipapakita',
    'of': 'sang',
    'services': 'mga serbisyo',
    'no-services-found': 'Wala\'t Nahanap na Serbisyo',
    'no-services-adjust': 'Subukan ang pag-adjust sa inyong paghahanap o filter criteria',
    'clear-filters': 'I-clear ang mga Filter',
    'view-details': 'Tuklasin ang Detalye',
    
    // Statistics
    'statistics-title': 'Estatistika sang Munisipyo',
    'statistics-desc': 'Mahalaga na impormasyon tungod sa Kananga, Leyte',
    'stat-population': 'Kabuuang Populasyon',
    'stat-population-desc': '(2024 Census)',
    'stat-barangays': 'Mga Barangay',
    'stat-land-area': 'Lugar sa Yuta (km²)',
    'stat-demographics': 'Demograpiko',
    'stat-classification': 'Pag-uuri',
    'stat-economy': 'Ekonomiya',
    'stat-1st-class': '1st Class Municipality',
    'stat-1st-class-desc': 'Ang Kananga ay itala bilang 1st class municipality batay sa kita ng pamahalaan.',
    'stat-key-barangays': 'Mga Pangunahing Barangay',
    'stat-barangays-desc': 'Mga kahit-bangkay sang administratibo kabilang ang Osmeña, Bagumbayan, Cabaruan, at iba\'pa na nagsisilbi sa iba\'t ibang komunidad.',
    'stat-income': 'Kita Classification',
    'stat-established': 'Tuig sang Pagtukod',
    
    // Legislative
    'legislative-title': 'Mga Dokumento sang Lehislatura',
    'legislative-desc': 'Mga Ordinansa at Resolusyon mula sa Sangguniang Bayan',
    'legislative-ordinances': 'Mga Ordinansa',
    'legislative-ordinances-desc': 'Mga batas na inaprobahan ng Sangguniang Bayan sa iba\'t ibang mga bagay sang munisipyo kabilang ang paggamit sa yuta, patakaran sa negosyo, at kaligtasan sang publiko.',
    'legislative-latest-ordinances': 'Pinakabagong Mga Ordinansa:',
    'legislative-view-ordinances': 'Tuklasin ang Lahat ng Ordinansa',
    'legislative-resolutions': 'Mga Resolusyon',
    'legislative-resolutions-desc': 'Mga deklarasyon at resolusyon sa mga partikular na isyu kabilang ang pagkilala, alokasyon, at direksyon sang patakaran.',
    'legislative-latest-resolutions': 'Pinakabagong Mga Resolusyon:',
    'legislative-view-resolutions': 'Tuklasin ang Lahat ng Resolusyon',
    'legislative-about-title': 'Tungkol sa Sangguniang Bayan',
    'legislative-about-desc': 'Ang Sangguniang Bayan ay ang lehislaturang katawan sang Kananga, Leyte, na binubuo ng mga piniling kinatawan na bumubuo at nagpapatupad ng mga patakaran para sa pag-unlad sang munisipyo.',
    
    // Budget
    'budget-title': 'Budget at Transparency',
    'budget-desc': 'Mga ulat sa pananalapi at gastos sang gobiyerno ng LGU Kananga',
    
    // Contact
    'contact-title': 'Impormasyon sa Makipag-ugnayan',
    'contact-desc': 'Makipag-ugnayan sa LGU Kananga para sa mga pangutana at serbisyo',
    'contact-get-in-touch': 'Makipag-ugnayan',
    'contact-phone': 'Telepono',
    'contact-phone-desc': 'Tawagan kami sa oras sang opisina',
    'contact-email': 'Email',
    'contact-email-desc': 'Ipadala sa amin ang inyong mga pangutana',
    'contact-address': 'Direksyon',
    'contact-address-desc': 'Bisitahin kami sang personal',
    'contact-hours': 'Lunes - Biyernes: 8:00 AM - 5:00 PM',
    'contact-response': 'Sasagot kami sa loob sang 24 oras',
    'contact-form-title': 'Magpadala sang Mensahe',
    'contact-form-name': 'Inyong Pangalan',
    'contact-form-email': 'Inyong Email',
    'contact-form-phone': 'Inyong Telepono',
    'contact-form-subject': 'Paksa',
    'contact-form-message': 'Mensahe',
    'contact-form-send': 'Magpadala sang Mensahe',
    'contact-department': 'Departamento',
    'contact-office-hours': 'Oras sang Opisina',
    'contact-open-mon-fri': 'Bukas Lun-Biy, 8-5',
    
    // News
    'news-title': 'Balita & Mga Update',
    'news-desc': 'Mga pinakabagong anunsyo at update mula sa LGU Kananga',
    'news-featured': 'Pangunahing Balita',
    'news-announcement': 'Anunsyo',
    'news-subscribe': 'Mag-subscribe para makatanggap sang pinakabagong balita at anunsyo mula sa LGU Kananga',
    
    // Barangay Detail
    'barangay-details': 'Matuto pa tungkol sa barangay na ito',
    'barangay-not-found': 'Ang barangay na inyong ginhahanap ay wala na.',
    'location-map': 'Mapa sang Lokasyon',
    'area': 'Lugar',
    'population': 'Populasyon',
    'total-officials': 'Kabuuang Mga Opisyal',
    'barangay-officials': 'Mga Opisyal sang Barangay',
    'barangay-info': 'Tungkol sa Administrasyon sang Barangay',
    'barangay-info-desc': 'Ang bawat barangay ay may sariling yunit sang lokal na pamahalaan na may mga piniling opisyal (Punong Barangay at Sangguniang Barangay) na responsable sa mga lokal na gawain, kapayapaan at kaginhawahan, at mga serbisyo sang komunidad.',
    'back': 'Balik',
    'back-to-government': 'Balik sa Pamahalaan',
    'kagawads': 'Mga Kagawad sang Barangay',
    'chief-executive': 'Punong Barangay (Pangunahing Ehekutibo)',
    'not-found': 'Hindi Nahanap',
    
    // General
    'loading': 'Naglo-load...',
    'error': 'May kamalian',
    'success': 'Matagumpay',
    'close': 'Isara',
  }
}

export function useTranslations() {
  const appStore = useAppStore()
  
  const t = (key: string, defaultValue?: string): string => {
    const lang = appStore.language as keyof typeof translations
    const langObj = translations[lang]
    return langObj[key as keyof typeof langObj] as string || defaultValue || key
  }
  
  const locale = computed(() => appStore.language)
  
  return {
    t,
    locale,
    translations
  }
}
