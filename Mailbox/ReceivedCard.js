import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Grid, Box } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

function ReceivedCard() {
    const profiles = [
        {
            Name: "Priya",
            image: "/images/img2.jpg", 
            details: "26 yrs • 5'0\" • Vishwakarma • M.Sc. • Teaching/Academician • Chennai",
            interestText: "She has sent an interest to you - 24 Oct 24 • Interest expires in 74 days",
            messagePreview: "Greetings! We looked at your b..."
        },
        {
            Name: "Saranya",
            image: "/images/img5.jpg", 
            details: "23 yrs • 5'0\" • Vishwakarma • M.Sc. • Teaching/Academician • Chennai",
            interestText: "She has sent an interest to you - 24 Oct 24 • Interest expires in 74 days",
            messagePreview: "Greetings! We looked at your b..."
        },
        {
            Name: "Roja Rajesh",
            image: "/images/img3.jpg", 
            details: "23 yrs • 5'0\" • Vishwakarma • M.Sc. • Teaching/Academician • Chennai",
            interestText: "She has sent an interest to you - 24 Oct 24 • Interest expires in 74 days",
            messagePreview: "Greetings! We looked at your b..."
        },
    ];

    return (
        <Box p={2} sx={{ width: '600px' }}>
            <Typography variant="h6">Incoming conversations from matches (107)</Typography>
            <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
                <Button variant="outlined" sx={{ borderRadius: '15px', color: 'black' }}>
                    Messages from paid members (5)
                </Button>
                <Button variant="outlined" sx={{ borderRadius: '15px', color: 'black' }}>
                    Interests received (49)
                </Button>
            </Box>

            {profiles.map((profile, index) => (
                <Card key={index} sx={{ display: 'flex', width: 600, mb: 2, p: 2, borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, height: 200, borderRadius: '10%', marginRight: 2 }}
                        image={profile.image}
                        alt={profile.Name}
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={10}>
                                <Typography variant="h6">{profile.Name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    M11000431
                                </Typography>
                                <Typography variant="body2" color="black">
                                    {profile.details}
                                </Typography>
                                <Typography variant="body2" color="black" mt={3}>
                                    {profile.interestText}
                                </Typography>
                                <Typography variant="body2" color="black" mt={1}>
                                    {profile.messagePreview} <span style={{ color: 'orange', cursor: 'pointer' }}>Read more</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} display="flex" justifyContent="flex-end">
                                <MoreVertIcon />
                            </Grid>
                        </Grid>

                        <Box mt={2}>
                            <Button variant="outlined" sx={{ borderRadius: '15px', color: 'gray' }}>
                                Decline
                            </Button>
                            <Button variant="contained" color="warning" sx={{ borderRadius: '15px', marginLeft: '20px' }}>
                                Accept
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default ReceivedCard;
