import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import {showAgents} from '../state/action/agentsAction'
import {connect} from 'react-redux'
import UsersLoading from '../../commons/loading/UsersLoading'
import CardLoading from '../../commons/loading/cardLoading';
import { VerifiedUser } from '@material-ui/icons';
import {showMainDialog} from '../../admin/state/actions/dialogAction'
import SendCard from './SendCard';
class MyAgentsRetailers extends React.Component{
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.showAgents(1)
    }

    sendCard = (user)=>{
        this.props.showMainDialog({
            show:true,
            page:<SendCard form={{type:'',data:null}} user={user}/>,
            title:`Send card for ${user.first_name}`,
            actions:{
                on:false,
                path:'',
                id:''
            }
        })
    }
    

    render() {
        return (
            <div style={{display:'flex',flexDirection:'column',marginBottom:50}}>
                <Typography color={'primary'} style={{marginBottom:10}}>
                    My agents and retailers
                </Typography>
                <Divider style={{marginBottom:10}}/>
                {
                    this.props.loading
                    ?
                        (<CardLoading/>)
                    :
                        (
                           <div>
                                {
                                this.props.agents.length<=0
                                ?
                                    (<Typography color={'secondary'}>
                                    You haven't start working with other agents yet. Start finding near by you agents and retailers send them let's work together request
                                    </Typography>)
                                :
                                    (
                                        <Grid container spacing={2}>
                                            {
                                                this.props.agents
                                                .map(agent=>(
                                                    <Grid item md={6} xs={12} sm={12}>
                                                        <Card>
                                                            <CardHeader
                                                            title={`${agent.user[0].first_name}`}
                                                            avatar={<Avatar>{agent.user[0].first_name.charAt(0)}</Avatar>}
                                                            subheader={agent.user[0].role[0].name}
                                                            action={
                                                                agent.user[0].verification!==null
                                                                ?
                                                                    (
                                                                        <IconButton color={'primary'}>
                                                                            <VerifiedUser/>
                                                                        </IconButton>
                                                                    )
                                                                :
                                                                    (null)
                                                            }
                                                            />
                                                            <CardContent style={{paddingTop:0}}>
                                                            <Divider/>
                                                            
                                                            <Typography>
                                                                {`Phone: ${agent.user[0].phone}`}
                                                            </Typography>
                                                            </CardContent>
                                                            <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                                                            <Button 
                                                            onClick={()=>this.sendCard(agent.user[0])}
                                                            color={'primary'}
                                                            variant={'outlined'}
                                                            style={{textTransform:'none'}}>
                                                                Send card
                                                            </Button>
                                                            </CardActions>
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
            </div>
        )
    }
}

const mapStateToProps =state=>({
    agents:state.authReducer.partnerReducer.agentsReducer.agents,
    loading:state.authReducer.partnerReducer.agentsReducer.loading
})

export default connect(mapStateToProps,{showAgents,showMainDialog})(MyAgentsRetailers)