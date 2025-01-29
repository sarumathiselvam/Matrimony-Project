import React from 'react';
import { CardContent, Card, Typography, Button, Grid, Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VenueCard = () => {
    return (
        <Container maxWidth="xs">
            <Card
                sx={{
                    width: '450px',
                    height: '200px',
                    padding: 4,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    marginTop: '50px',
                    marginBottom: '50px'

                }}
            >
                <CardContent>
                    <Grid container spacing={2}>
                      
                        <Grid item xs={8}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e74c3c' }}>
                                mandap.com
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                from Matrimony.com group
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="body1">
                                        India's largest venue booking platform
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
                                    <Typography variant="body1">
                                        Over 40,000+ venues
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, backgroundColor: '#e74c3c', borderRadius: 20 }}
                            >
                                Find Venue
                            </Button>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                component="img"
                                src="/images/venue.webp"  
                                alt="Venue Card"
                                sx={{ width: '100%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    );
};

export default VenueCard;
