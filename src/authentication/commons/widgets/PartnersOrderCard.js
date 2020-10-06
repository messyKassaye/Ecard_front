import { Button, Typography } from '@material-ui/core';
import React from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import LoadingButton from '../LoadingButton';
import {storeCards} from '../../partners/state/action/cardsAction'
import {connect} from 'react-redux'
import {showMainDialog} from '../../admin/state/actions/dialogAction'
import { green } from '@material-ui/core/colors';
class PartnersOrderCard extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            apiFormData:{
                api_key:''
            },
            change:false,
            useApi:false
        }
        
    }

    useApi = ()=>{
        this.setState({
            change:true,
            useApi:true
        })
    }

    handleChange = event=>{
        const {apiFormData} = this.state
        apiFormData[event.target.name] = event.target.value
        this.setState(apiFormData)
    }
    
    handleSubmit =()=>{
        this.setState({
            submitted:true,
            loading:true
        })
        const {apiFormData} = this.state
        this.props.storeCards(apiFormData)
        
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.response.status){
            this.setState({
                loading: false,
                finished: false,
                submitted: false,
            })
            setTimeout(()=>{
                window.location.reload()
                this.props.showMainDialog({'show':false,'page':null,'title':'',actions:{on:false,path:'',id:''}})
            },2000)

        }
    }

    render(){
        const {apiFormData} = this.state
        const { loading } = this.state;
        const finished = false
        const setLoading = !finished && loading;
        const isEnabled = apiFormData.api_key.length>0
        return <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                {
                    this.state.change
                    ?
                        (
                            <div>
                                {
                                    this.state.change&&this.state.useApi
                                    ?
                                       
                                        <ValidatorForm onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <Typography style={{color:green[500]}}>
                                                {this.props.response.message}
                                            </Typography>
                                            <TextValidator
                                            onChange={this.handleChange}
                                            label={`Enter your API key`}
                                            name={'api_key'}
                                            type={'text'}
                                            value={this.state.apiFormData.api_key}
                                            validators={['required']}
                                            errorMessages={[`Please enter API key`]}
                                            style={{width:'70%'}}        
                                            />

                                            <LoadingButton
                                                style={{width:'70%',marginTop:15,textTransform:'none'}}
                                                color="primary"
                                                variant="contained"
                                                type="submit"
                                                loading={setLoading}
                                                done={finished}
                                                text={'Get cards'}
                                                disabled={!isEnabled ||this.state.submitted}
                                            >
                                                {
                                                    'Get cards'
                                                }
                                            </LoadingButton>
                                        </ValidatorForm>
                                    :(null)
                                }
                            </div>
                        )
                    :
                        (
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <Typography color={'secondary'}>Select your card accepting mechanism</Typography>
                                <Button
                                onClick={this.useApi}
                                variant={'outlined'}
                                color={'primary'}
                                size={'medium'}
                                style={{textTransform:'none',marginTop:16,marginBottom:15}}>
                                    Use my Ethio tele API key
                                </Button>

                                <Button
                                variant={'text'}
                                color={'primary'}
                                size={'medium'}
                                style={{textTransform:'none'}}>
                                    Use file importing
                                </Button>
                            </div>
                        )
                }
        </div>
    }
}

const mapStateToProps = state=>({
    response:state.authReducer.partnerReducer.cardReducer.response
})
export default connect(mapStateToProps,{storeCards,showMainDialog})(PartnersOrderCard)