import React from 'react'
import { Card, CardContent, Typography, Box, Divider, CardMedia, Grid } from '@mui/material';
import data from '../mockData/MatchesData.json';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';


const SenderCard = () => {
    const matches = data.datafetch.allMatches.data;
    return (
        <Box>
            <Typography variant='h6'>Interest/messages sent by you ({matches.length})</Typography>
            <Divider sx={{ my: 2 }} />
            {matches.map((match, index) => (
                <Card key={index} sx={{ display: 'flex', width: 600, mb: 2, p: 2, borderRadius: 2 }} >
                    <CardMedia
                        component='img'
                        sx={{ width: 200, height: 200, borderRadius: '10%', marginRight: 2 }}
                        image={match.image}
                        alt={match.Name}
                    />
                    <CardContent sx={{ flex: '1 1 auto', padding: '8px' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <MoreVertIcon />
                        </Grid>
                        <Typography variant='body1' fontWeight='bold'>{match.Name}</Typography>
                        <Typography variant="body2" color="textSecondary">{match.ID}</Typography>
                        <Typography variant="body2" color="black">
                            {match.Age} - {match.Education} - {match.Occupation} - {match.Location}
                        </Typography>

                        <Typography variant="body2" color="black" mt={7}>
                            She has declined your interest
                        </Typography>
                    </CardContent>

                </Card>
            ))}
        </Box>
    )
}

export default SenderCard