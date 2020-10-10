import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Pricings from '../../commons/widgets/Pricings'
import NewAgentAndRetailers from '../../commons/widgets/NewAgentAndRetailers'
import NewPartners from './NewPartners'
import Companies from './Companies'
class AdminHome extends React.Component{

    componentDidMount = ()=>{

    }

    render(){

        return(
            <Container maxWidth={'lg'}>
                <Grid container spacing={2}>

                    <Grid item md={8} xs={12} sm={12}>
                        <Grid container spacing={2}>

                            <Grid item md={12} xs={12} sm={12}>
                                <NewPartners/>
                            </Grid>

                            <Grid item md={12} xs={12} sm={12}>
                                <Companies/>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item md={4} xs={12} sm={12}>
                        <NewAgentAndRetailers/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default AdminHome