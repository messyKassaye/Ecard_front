import React from 'react'
import {fetchFaultTypes} from '../state/actions/FaultTypeAction'
import {connect} from 'react-redux'
import { Container, Grid } from '@material-ui/core'
import NewCardRequestAndBuyCards from '../../commons/NewCardRequestAndBuyCards'
import Pricings from '../../commons/widgets/Pricings'
class AdminHome extends React.Component{

    componentDidMount = ()=>{

    }

    render(){

        return(
            <Container maxWidth={'lg'}>
                <Grid container spacing={2}>

                    <Grid item md={8} xs={12} sm={12}>
                        <NewCardRequestAndBuyCards/>
                    </Grid>

                    <Grid item md={4} xs={12} sm={12}>
                        <Pricings/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state=>({
    faultTypes:state.authReducer.adminReducer.faultTypeReducers.faultTypes,
    loading:state.authReducer.adminReducer.faultTypeReducers.loading
})
export default connect(mapStateToProps,{fetchFaultTypes})(AdminHome)