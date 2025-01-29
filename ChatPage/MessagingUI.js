import React from "react";
import { Box, Typography, List, ListItem, Avatar, Button, TextField, IconButton, Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import data from '../mockData/ChatApp.json';

const MessagingUI = () => {

    const profiles = data.datafetch.allMatches?.data || [];

    return (
        <Box display="flex" height="100vh" sx={{ marginBottom: '50px' }}>
            {/* Sidebar */}
            <Box width="30%" borderRight="1px solid #ddd" overflow="auto">
                <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6">All</Typography>
                    <Typography variant="h6" color="textSecondary">
                        Awaiting Response
                    </Typography>
                </Box>
                <Divider />
                <List>
                    {profiles.map((profile, index) => (
                        <ListItem key={index} button>
                            <Avatar alt={profile.Name} src={profile.image} />
                            <Box ml={2}>
                                <Typography variant="subtitle1">{profile.Name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {profile.status}
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Chat Section */}
            <Box width="70%" display="flex" flexDirection="column">
                {/* Header */}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={2}
                    borderBottom="1px solid #ddd"
                    bgcolor="#EBF2FA"
                >
                    <Box display="flex" alignItems="center" >
                        <Avatar alt="Selected Profile" src={profiles[0].image}
                            sx={{
                                width: 40,
                                height: 40,
                                marginLeft: '10px',
                                marginBottom: '60px'
                            }} />
                        <Box ml={2}>
                            <Typography variant="h6">{profiles[0].Name}</Typography>
                            <Typography variant="body2" color="black">
                                Last seen few hours ago
                            </Typography>
                            <Typography variant="body2" color="black">
                                22 yrs • 5'3" • Vishwakarma • B Tech. • Not Working  • Virudhanagar
                            </Typography>
                            <Typography variant="body2" color="black">
                                She has sent you an interest.  Accept to communicate further Accept to communicate further
                            </Typography>
                            <Button variant="outlined" color="error" sx={{ mr: 2, borderRadius: '20px' }}>
                                Decline
                            </Button>
                            <Button variant="contained" color="warning" sx={{ borderRadius: '20px' }}>
                                Accept
                            </Button>
                        </Box>
                    </Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>

                {/* Chat Content */}
                <Box flex="1" p={2} overflow="auto" >
                    <Typography variant="body1" color="textSecondary">
                        {profiles[0].status}
                    </Typography>


                    {/* Chat Messages */}
                    <Box mt={4}>
                        <Box mb={2}>
                            <Typography variant="caption" color="textSecondary">
                                10 Oct 2024
                            </Typography>
                        </Box>
                        <Box p={2} bgcolor="#f9f9f9" borderRadius="8px" maxWidth="70%">
                            <Typography variant="body1">
                                Greetings! We looked at your brother's profile and we liked it. Could you please
                                check our daughter's profile too? If you are interested, please accept to proceed
                                further. We look forward to your response.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Message Input */}
                <Box p={2} borderTop="1px solid #ddd" display="flex" alignItems="center">
                    <TextField
                        fullWidth
                        placeholder="Type a message"
                        variant="outlined"
                        size="small"
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" sx={{ borderRadius: '15px', backgroundColor: 'green' }}>
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default MessagingUI;
