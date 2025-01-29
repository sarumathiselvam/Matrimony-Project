import React from 'react'
import { Divider, Chip } from '@mui/material'

const MembershipToggle = () => {
  return (
    <div>
        <Divider>
        <Chip label="Regular" size='medium' 
        sx={{
          width:'100px',color:'black',
            '&:hover': {
                        backgroundColor: '#F5A623', // Light shade of E56717
                        borderColor: '#E56717',
                    },
        }} />
        <Chip label="Prime" size='medium'
         sx={{
          width:'100px',color:'black',
            '&:hover': {
                        backgroundColor: '#F5A623', // Light shade of E56717
                        borderColor: '#E56717',
                    },
          }}/>
        </Divider>
    </div>
  )
}

export default MembershipToggle
