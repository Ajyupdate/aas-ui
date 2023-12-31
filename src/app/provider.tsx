// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    heading: `'Montserrat' sans-serif`,
    body: `'Work Sans', sans-serif`,
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}