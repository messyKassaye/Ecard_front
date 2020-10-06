import { Button, Card, CardContent, CardHeader, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import NewCardRequestAndBuyCards from '../../commons/NewCardRequestAndBuyCards'
import Pricings from '../../commons/widgets/Pricings'
import NewAgentAndRetailers from '../../commons/widgets/NewAgentAndRetailers'
class Posts extends React.Component{

    render(){
        return <Container maxWidth={'lg'}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12} sm={12}>
                    <NewCardRequestAndBuyCards/>
                </Grid>

                <Grid item md={4} xs={12} sm={12}>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12} sm={12}>
                            <Pricings/> 
                        </Grid>
                        <Grid item md={12} xs={12} sm={12}>
                            <NewAgentAndRetailers/>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    }
}

export default Posts