// Import the extendTheme function from Chakra UI
import { extendTheme } from '@chakra-ui/react'

// Define a custom Chakra UI theme using extendTheme
const theme = extendTheme({

  fonts: {

    heading: `'Figtree Variable', sans-serif`,

    body: `'Figtree Variable', sans-serif`,

    brand: `'Audiowide', sans-serif`,
  },
})


export default theme;
