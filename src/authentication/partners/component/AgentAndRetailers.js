import { Avatar, Card, CardContent, CardHeader, Container, Grid } from '@material-ui/core'
import React from 'react'
import PersonIcon  from '@material-ui/icons/Person'
import AcceptedAgentAndRetailers from '../../commons/widgets/AcceptedAgentAndRetailers'
import UnAcceptedAgentAndRetailers from '../../commons/widgets/UnAcceptedAgentAndRetailers'
class AgentAndRetailers extends React.Component{

    render(){

        return <Container maxWidth={'lg'}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} sm={12}>
                        <AcceptedAgentAndRetailers/>
                    </Grid>

                    <Grid item md={12} xs={12} sm={12}>
                        <UnAcceptedAgentAndRetailers/>
                    </Grid>
                    
                </Grid>
        </Container>
    }
}

export default AgentAndRetailers