import React, { useState } from 'react';
import { Card, CardMedia, Typography, Grid, IconButton, Link } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/system';
import AllMatchesData from './../mockData/AllMatchesData.json'



const ProfileCard = () => {
    const  profiles  = AllMatchesData.datafetch.allMatches.data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleProfiles = 4;

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? profiles.length - visibleProfiles : prevIndex - 1
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (profiles.length - visibleProfiles + 1)
        );
    };

    const visibleProfileSet = profiles.slice(currentIndex, currentIndex + visibleProfiles);

    return (
        <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
        

            <div style={{ fontSize: '20px' }}>
            <Typography variant='h5' sx={{textAlign: 'left', marginLeft:'20px'}}>Your Daily Recommendation for 25th October</Typography>
                <Link href="#" underline="none" sx={{marginLeft:'570px'}}>
                    See all
                </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handlePrevClick}>
                    <ArrowBackIos />
                </IconButton>

                <Grid container spacing={2} style={{ overflow: 'hidden', width: '710px' }}>
                    {visibleProfileSet.map((profile, index) => (
                        <Grid item key={index}>
                            <Card style={{ width: '150px', margin: '5px', position: 'relative' }}>
                                <Box position="relative">
                                    <CardMedia
                                        component="img"
                                        image={profile.image}
                                        alt={profile.Name}
                                        style={{ height: '180px', objectFit: 'cover', borderRadius: '20px' }}
                                    />
                                    <Box
                                        position="absolute"
                                        bottom={0}
                                        left={0}
                                        right={0}
                                        bgcolor="rgba(0, 0, 0, 0.6)"
                                        color="white"
                                        px={1}
                                        py={0.5}
                                        textAlign="center"
                                    >
                                        <Typography variant="subtitle2">{profile.Name}</Typography>
                                        <Typography variant="body2">{profile.Age}</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <IconButton onClick={handleNextClick}>
                    <ArrowForwardIos />
                </IconButton>
            </div>
        </div>
    );
};

export default ProfileCard;
