import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const templates = [
    { id: 1, title: 'Blank Template', description: 'Start with a blank canvas.', image: `${process.env.PUBLIC_URL}/assets/blank.png`, link: '/GameOfLife/blank' },
    { id: 2, title: 'Glider', description: 'A common pattern.', image: `${process.env.PUBLIC_URL}/assets/glider.png`, link: '/GameOfLife/1' },
    { id: 3, title: 'Beacon', description: 'A more complex pattern.', image: `${process.env.PUBLIC_URL}/assets/beacon.png`, link: '/GameOfLife/2' },
    { id: 4, title: 'Toad', description: 'Another common pattern.', image: `${process.env.PUBLIC_URL}/assets/toad.png`, link: '/GameOfLife/3' },
  ];

  return (
    <Grid container spacing={4} style={{ padding: '20px' }}>
      {templates.map((template) => (
        <Grid item key={template.id} xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea component={Link} to={template.link}>
              <CardMedia
                component="img"
                height="140"
                image={template.image}
                alt={template.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {template.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {template.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
