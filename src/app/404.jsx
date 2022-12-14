import React from 'react';
import { Button, Typography, Stack } from '@mui/material';


export default function PageNotFound({ Link }) {
  return (
        <Stack
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                minHeight: '100vh'
            }}
        >
            <img
              src="/404.jpg"
              alt=""
              width={500} height={250}
            />
            
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
                <Button variant="contained">Back Home</Button>
            </Link>
        </Stack>
  );
}