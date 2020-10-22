import { Avatar, Button, Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import React from 'react'
import {connect} from 'react-redux'
import { ADMIN_API_URL } from '../../../../constants/constants';
import {verifyUser} from '../../../commons/state/action/verificationAction'
class UserCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formData:{
                user_id:''
            },
            verifying:false,
            verified:false
        }
        
    }

    verify = (user)=>{
        const {formData} = this.state
        formData['user_id'] = user.attribute.id
        this.setState({
            verifying:true,
            formData
        })
        this.props.verifyUser(ADMIN_API_URL,formData)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.response.status){
            this.setState({
                verified: true,
            })

        }
    }
    
    render(){
        const {user} = this.props
        return <Card>
        <CardHeader
        title={`${user.attribute.first_name} ${user.attribute.last_name}`}
        subheader={
            user.relations.company===null
            ?
                'no company'
            :
                 user.relations.company.name
        }
        action={
            <Typography variant={'h5'} color={'primary'} style={{marginTop:15}}>
                {user.relations.role[0].name}
            </Typography>
        }
        avatar={<Avatar>{user.attribute.first_name.charAt(0)}</Avatar>}/>
        <CardContent style={{paddingTop:0}}>
            <Divider/>
                {
                    user.relations.verification===null
                    ?
                        (
                            <div >
                                {
                                    this.state.verified
                                    ?
                                        (<Typography variant={'h5'} style={{color:green[500]}}>
                                            Verified
                                            </Typography>)
                                    :
                                        (
                                            <div>
                                                {
                                    this.state.verifying
                                    ?
                                        (
                                            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        
                                                <Typography color={'secondary'} variant={'h5'}>Verifying...</Typography>
                                            </div>
                                        )
                                    :
                                        (
                                            <div
                                            style={{display:'flex',
                                            flexDirection:'row',
                                            alignItems:'center',
                                            justifyContent:'flex-end'}}>
                                                <Typography color={"primary"} style={{marginTop:15,marginRight:20}}>
                                                    This user is not verified by Ecard
                                                </Typography>
                                                <Button
                                                    onClick={()=>this.verify(user)}
                                                    variant={'outlined'}
                                                    color={'primary'}
                                                    style={{textTransform:'none',marginTop:15}}>
                                                        Verify now
                                                </Button>
                                            </div>
                                        )
                                }
                                            </div>
                                        )
                                }
                                
                            </div>
                        )
                    :
                        (
                            <div style={{padding:10,display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                                <Typography style={{color:grey[600]}}>
                                    {`Verified by: ${user.relations.verification.user.first_name} ${user.relations.verification.user.last_name}`}
                                </Typography>
                            </div>
                        )
                }
        
        </CardContent>
    </Card>
    }
}

const mapStateToProps = state=>({
    response:state.authReducer.commonReducer.verificationReducer.response
})

export default connect(mapStateToProps,{verifyUser})(UserCard);