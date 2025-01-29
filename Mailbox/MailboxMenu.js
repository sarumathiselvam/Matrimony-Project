import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MailboxMenu() {
  return (
    <div style={{ width: '350px', padding: '16px', marginBottom: '20px' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Received</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem button>
              <ListItemText primary="All" sx={{color: 'green'}} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pending" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Accepted/ Replied" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Declined" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Expired" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Sent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem button>
              <ListItemText primary="All" sx={{color:'green'}} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pending" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Accepted" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Declined" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Requests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
          <ListItem button>
              <ListItemText primary="Request completed" sx={{color:'green'}} />
            </ListItem>
            <ListItem button>
              <ListItemText primary=" Requests received " />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Request sent" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Calls</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem button>
              <ListItemText primary="Contacted You" sx={{color:'green'}} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contacted By You" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MailboxMenu;
