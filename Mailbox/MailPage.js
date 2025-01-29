import React from 'react';
import { Card, Box } from '@mui/material';
import MailboxMenu from './MailboxMenu';
import ReceivedCard from './ReceivedCard';
import SenderCard from './SenderCard';
import RequestCard from './RequestCard';
import MatchesList from './MatchesList';
import MembershipToggle from './MembershipToggle';


const MatchesPage = () => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', padding: 3 }}>
            <Box sx={{ flex: 0.3, paddingRight: 3, paddingTop: 3, overflow: 'hidden' }}>
                <MailboxMenu />
            </Box>

            <Box sx={{ flex: 0.7, paddingLeft: 3 }}>
                <MembershipToggle />
                <ReceivedCard />
                <SenderCard />
                <RequestCard />
                <MatchesList />
            </Box>
        </Card>
    );
};

export default MatchesPage;
