import { Avatar, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import {indexCustomers} from '../state/actions/customersAction'
import CardLoading from '../../commons/loading/cardLoading'
import UserCard from './widgets/UserCard'
class NewPartners extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formData:{
                user_id:'',
                company_id:'',
            }
        }
    }
    

    componentDidMount(){
        this.props.indexCustomers()
    }

    render(){

        return <Container maxWidth={'lg'}>
                {
                    this.props.loading
                    ?
                        (<CardLoading/>)
                    :
                        (
                            <Grid container spacing={2}>
                                <Typography color={'primary'}>
                                    Partners, Agents and Retailers
                                </Typography>
                                <Divider/>
                                {
                                    this.props.customers.map(user=>(
                                        <Grid item md={12} sm={12} xs={12}>
                                            <UserCard user={user}/>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                }
        </Container>
    }
}

const mapStateToProps = state=>({
    customers:state.authReducer.adminReducer.customerReducer.customers,
    loading:state.authReducer.adminReducer.customerReducer.loading
})

export default connect(mapStateToProps,{indexCustomers})(NewPartners)