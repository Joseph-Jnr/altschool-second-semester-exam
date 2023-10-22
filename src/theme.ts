import { extendTheme } from '@chakra-ui/react'

const appTheme = extendTheme({
  colors: {
    primary: '#201D29',
    black: '#010409',

    gh: {
      1: '#F8FAFC',
      2: '#F1F5F9',
      3: '#E2E8F0',
      4: '#CBD5E1',
      5: '#94A3B8',
      6: '#64748B',
      7: '#334155',
      8: '#1E293B',
      10: '#020617',
      black: '#0D1117',
      green: '#2EA043',
    },
  },

  breakpoints: {
    s: '0px',
    sm: '300px',
    md: '600px',
    lg: '1200px',
  },
})

export default appTheme
