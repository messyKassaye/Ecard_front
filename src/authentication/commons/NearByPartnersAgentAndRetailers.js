import { Avatar, Card, CardHeader, Divider, Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import {indexNearBy} from '../commons/state/action/nearByAction'
import {connect} from 'react-redux'
import CardLoading from './loading/cardLoading'
import { VerifiedUser } from '@material-ui/icons'
class NearByPartnersAgentAndRetailers extends React.Component{

    componentDidMount(){
        this.props.indexNearBy()
    }

    render() {
        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <Typography color={"primary"} style={{fontSize:'1.3em'}}>
                    Partners, agents and retailers near by you
                </Typography>
                <Divider style={{marginBottom:10,marginTop:10}}/>
                {
                    this.props.loading
                    ?
                        (<CardLoading/>)
                    :
                        (
                            <Grid container spacing={2}>
                                {
                                    this.props.response.data
                                    .map(nearby=>(
                                        <Grid item md={12} xs={12} sm={12}>
                                            <Card>
                                            <CardHeader
                                            avatar={<Avatar>{nearby.user[0].first_name.charAt(0)}</Avatar>}
                                            subheader={
                                                `${nearby.region_name} > ${nearby.city_name}`
                                            }
                                            action={
                                               nearby.user[0].verification!==null
                                               ?
                                                    (
                                                        <IconButton color={'primary'}>
                                                             <VerifiedUser/>
                                                        </IconButton>
                                                    )
                                               :
                                                    (null)
                                            }
                                            title={`${nearby.user[0].first_name} ${nearby.user[0].last_name}`}/>
                                        </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )
                }
            </div>
        )
    }
}

const mapStateToProps = state=>({
    response:state.authReducer.commonReducer.nearByReducer.response,
    loading:state.authReducer.commonReducer.nearByReducer.loading
})

export default connect(mapStateToProps,{indexNearBy})(NearByPartnersAgentAndRetailers)