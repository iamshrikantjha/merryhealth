import { GET_LANGUAGE } from './testTypes'

export const getLanguage = (lang = 'en') => {
  return {
    type: GET_LANGUAGE,
    // payload: lang
  }
}
