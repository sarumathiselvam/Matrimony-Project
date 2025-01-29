import React from 'react';
import { Card, CardContent, Typography, Box, Divider, Button, CardMedia, Grid } from '@mui/material';
import { ChevronRight, Phone } from '@mui/icons-material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import data from '../mockData/MatchesList.json';

const MatchesList = () => {
    const matches = data.datafetch.allMatches.data;

    return (
        <Box>
            <Typography variant="h6">Matches who tried contacting you ({matches.length})</Typography>
            <Divider sx={{ my: 2 }} />
            {matches.map((match, index) => (
                <Card key={index} sx={{ display: 'flex', width: 600, mb: 2, p: 2, borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, height: 200, borderRadius: '10%', marginRight: 2 }}
                        image={match.image}
                        alt={match.name}
                    />
                    <CardContent sx={{ flex: '1 1 auto', padding: '8px' }}>
                        <Grid item xs={2} display="flex" justifyContent="flex-end">
                            <MoreVertIcon />
                        </Grid>
                        <Typography variant="body1" fontWeight="bold">{match.Name}</Typography>

                        <Typography variant="body2" color="textSecondary">{match.ID}</Typography>
                        <Typography variant="body2" color="textSecondary">
                        <Phone  size="small" sx={{ verticalAlign: 'middle', mr: 1, fontSize:'18px' }} />
                           <span style={{color:'black'}}> {match.contactStatus} </span>- {match.contactDate}
                        </Typography>
                        <Button size="small" endIcon={<ChevronRight />} color="warning">
                            View mobile number
                        </Button>

                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default MatchesList;
