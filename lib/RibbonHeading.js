import React from 'react';
import Box from '@mui/material/Box';

const RibbonHeading = ({ children }) => {
  const ribbonSx = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fff',
    '--s': '1.8em', // the ribbon size
    '--d': '.6em',  // the depth
    '--c': '.8em',  // the cutout part
    padding: '0 calc(var(--s) + 2*var(--d) + .5em) var(--d)',
    lineHeight: 1.8,
    background: `
      linear-gradient(90deg, #0004 var(--d), #0000 0 calc(100% - var(--d)), #0004 0)
      50% 0/calc(100% - 2*(var(--s) + var(--d))) calc(100% - var(--d)),
      conic-gradient(from 135deg at 50% -50%, #0004 25%, #0008 0)
      var(--s) 100%/calc(3*var(--d)) var(--d),
      conic-gradient(from 135deg at 50% -50%, #0004 25%, #0008 0)
      calc(100% - var(--s)) 100%/calc(3*var(--d)) var(--d)
    `,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#CC333F', // the main color
    clipPath: `
      polygon(0 0, calc(var(--s) + var(--d)) 0, calc(var(--s) + var(--d)) var(--d),
      calc(var(--s) + 2*var(--d)) var(--d), calc(var(--s) + 2*var(--d)) 0,
      calc(100% - var(--s) - 2*var(--d)) 0, calc(100% - var(--s) - 2*var(--d)) var(--d),
      calc(100% - var(--s) - var(--d)) var(--d), calc(100% - var(--s) - var(--d)) 0,
      100% 0, calc(100% - var(--c)) calc(50% - var(--d)/2), 100% calc(100% - var(--d)),
      calc(100% - var(--s)) calc(100% - var(--d)), calc(100% - var(--s)) 100%,
      calc(100% - var(--s) - 3*var(--d)) 100%, calc(100% - var(--s) - 3*var(--d)) calc(100% - var(--d)),
      calc(var(--s) + 3*var(--d)) calc(100% - var(--d)), calc(var(--s) + 3*var(--d)) 100%,
      var(--s) 100%, var(--s) calc(100% - var(--d)), 0 calc(100% - var(--d)),
      var(--c) calc(50% - var(--d)/2))
    `,
    width: 'fit-content',
  };

  return (
    <Box sx={ribbonSx}>
      {children}
    </Box>
  );
};

export default RibbonHeading;
