import { Container, Divider, Typography } from '@material-ui/core'
import React from 'react'

class NewPartners extends React.Component{

    render(){

        return <Container maxWidth={'lg'}>
                <Typography color={'primary'}>
                    Partners, Agents and Retailers
                </Typography>
                <Divider/>
        </Container>
    }
}

export default NewPartners