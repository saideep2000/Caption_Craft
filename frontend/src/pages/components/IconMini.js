import React from 'react';
import Box from '@mui/material/Box';

function IconMini(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: theme => theme.spacing(7), // Adjust the size as needed
        height: theme => theme.spacing(7), // Adjust the size as needed
        borderRadius: '20%',
        marginLeft: theme => `calc(${theme.spacing(1)} * -1)`, // Move image to the left
        overflow: 'hidden', // Hide overflow if the image is larger than the box
        ...props.sx,
      }}
    >
      <img
        src="/ccmini.jpg"
        alt="Icon"
        style={{
          width: '100%', // The image will fill the box
          height: '100%', // The image will fill the box
          objectFit: 'cover', // Cover the area of the box without stretching
        }}
      />
    </Box>
  );
}

export default IconMini;
