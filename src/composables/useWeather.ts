import { ref, computed } from 'vue'

export interface WeatherData {
  temperature: number
  weatherCode: number
  humidity: number
  windSpeed: number
  isDay: boolean
}

export interface MapCoordinates {
  lat: number
  lng: number
}

const KANANGA_COORDINATES: MapCoordinates = {
  lat: 10.0892,
  lng: 125.0524
}

const weatherData = ref<WeatherData | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const interpretWeatherCode = (code: number, isDay: boolean): string => {
  // WMO Weather interpretation codes
  const weatherCodes: { [key: number]: { day: string; night: string } } = {
    0: { day: 'Clear sky', night: 'Clear sky' },
    1: { day: 'Mainly clear', night: 'Mainly clear' },
    2: { day: 'Partly cloudy', night: 'Partly cloudy' },
    3: { day: 'Overcast', night: 'Overcast' },
    45: { day: 'Foggy', night: 'Foggy' },
    48: { day: 'Foggy', night: 'Foggy' },
    51: { day: 'Light drizzle', night: 'Light drizzle' },
    53: { day: 'Moderate drizzle', night: 'Moderate drizzle' },
    55: { day: 'Dense drizzle', night: 'Dense drizzle' },
    61: { day: 'Slight rain', night: 'Slight rain' },
    63: { day: 'Moderate rain', night: 'Moderate rain' },
    65: { day: 'Heavy rain', night: 'Heavy rain' },
    80: { day: 'Slight rain showers', night: 'Slight rain showers' },
    81: { day: 'Moderate rain showers', night: 'Moderate rain showers' },
    82: { day: 'Violent rain showers', night: 'Violent rain showers' },
    85: { day: 'Slight snow showers', night: 'Slight snow showers' },
    86: { day: 'Heavy snow showers', night: 'Heavy snow showers' },
    95: { day: 'Thunderstorm', night: 'Thunderstorm' }
  }
  
  return weatherCodes[code]?.[isDay ? 'day' : 'night'] || 'Unknown'
}

const getWeatherIcon = (code: number, isDay: boolean): string => {
  if (code === 0) return isDay ? '☀️' : '🌙'
  if (code === 1 || code === 2) return isDay ? '⛅' : '🌤️'
  if (code === 3) return '☁️'
  if (code === 45 || code === 48) return '🌫️'
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️'
  if ([85, 86].includes(code)) return '🌨️'
  if ([95, 96, 99].includes(code)) return '⛈️'
  return '☁️'
}

export const useWeather = () => {
  const fetchWeather = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${KANANGA_COORDINATES.lat}&longitude=${KANANGA_COORDINATES.lng}&current=temperature_2m,weather_code,relative_humidity_2m,weather_code,is_day,wind_speed_10m&timezone=Asia/Manila`
      )
      
      if (!response.ok) throw new Error('Failed to fetch weather')
      
      const data = await response.json()
      const current = data.current
      
      weatherData.value = {
        temperature: Math.round(current.temperature_2m),
        weatherCode: current.weather_code,
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        isDay: current.is_day === 1
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      // Set default weather
      weatherData.value = {
        temperature: 28,
        weatherCode: 1,
        humidity: 70,
        windSpeed: 12,
        isDay: true
      }
    } finally {
      loading.value = false
    }
  }
  
  const weather = computed(() => weatherData.value)
  const condition = computed(() =>
    weather.value
      ? interpretWeatherCode(weather.value.weatherCode, weather.value.isDay)
      : 'Loading...'
  )
  const icon = computed(() =>
    weather.value
      ? getWeatherIcon(weather.value.weatherCode, weather.value.isDay)
      : '⏳'
  )
  
  return {
    weather,
    condition,
    icon,
    loading,
    error,
    fetchWeather,
    coordinates: KANANGA_COORDINATES
  }
}
