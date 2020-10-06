import { Button, CircularProgress, Typography } from '@material-ui/core';
import React from 'react'
import {connect} from 'react-redux'
import OrderCard from '../OrderCard';
import {approveCardRequest} from '../state/action/cardRequestApprovalAction'
import {showMainDialog} from '../../admin/state/actions/dialogAction'
class ApprovingCardRequestDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            formData:{
                request_id:''
            },
            sending:true
        }
    }
    
    componentDidMount(){
        const {formData} = this.state
        formData['request_id'] = this.props.cardRequest.id;
        this.setState(formData)
        this.props.approveCardRequest(formData)
        console.log(formData)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            sending:false,
        })
    }

    getCards =()=>{
        this.props.showMainDialog({'show':false,'page':null,'title':'',actions:{on:false,path:'',id:''}})
        setTimeout(()=>{
            this.props.showMainDialog({
                show:true,
                page:<OrderCard form={{type:'',data:null}}/>,
                title:'Order cards now',
                actions:{
                    on:false,
                    path:'',
                    id:''
                }
            })
        },1000)
    }
    render(){
        return <div>
            {
                this.state.sending
                ?
                    (
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <CircularProgress color={'primary'}/>
                        <Typography>
                            Sending cards...
                        </Typography>
                   </div>
                    )
                :
                    (
                       <div>
                           {
                               this.props.response.status
                               ?
                                 (<span>Sended</span>)
                               :
                                  (
                                      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                          <Typography color={'secondary'}>
                                              {this.props.response.message}
                                         </Typography>
                                         <Button
                                         onClick={this.getCards}
                                         variant={'outlined'}
                                         color={'primary'}
                                         size={'medium'}
                                         style={{textTransform:'none',marginTop:25}}
                                         >
                                             Get cards
                                         </Button>
                                      </div>
                                  )
                           }
                        </div> 
                    )
            }
        </div>
    }
}
const mapStateToProps = state=>({
    response:state.authReducer.commonReducer.cardRequestApproval.response
})

export default connect(mapStateToProps,{approveCardRequest,showMainDialog})(ApprovingCardRequestDialog)