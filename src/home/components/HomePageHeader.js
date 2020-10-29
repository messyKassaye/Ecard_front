import React from 'react'
import homeStyle from '../styles/homeStyle'
import withStyles from '@material-ui/core/styles/withStyles'
import { Button, Container,IconButton,ListItem,ListItemIcon,ListItemSecondaryAction,ListItemText,Typography } from '@material-ui/core'
import {Link} from "react-router-dom";
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import lists from '../data/Lists'
import { CheckBox, Comment } from '@material-ui/icons';
class HomePageHeader extends React.Component{

    render(){
        const {classes} = this.props
        return (
            <Container maxWidth={'lg'} style={{dispplay:'flex',flexDirection:'column',alignItems:'space-between'}}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerContainerTwo}>
                        <Typography variant={'h4'} style={{fontWeight:'bold'}}>Ecard is a card distribution partner of Ethio telecoms</Typography>
                        <Button
                        component={Link}
                        to={'/signup'}
                        color={'primary'}
                        variant={'contained'}
                        style={{marginTop:25}}
                        size={'big'}>Sign up</Button>
                    </div>

                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <img width={'58%'} height={500} src={slider1}/>
                    </div>
                </div>
                

                <div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-bewteen'}}>
                        <img width={'auto'} height={250} src={slider2}/>
                        <div style={{display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        marginLeft:150}}>
                        {
                            lists.map(list=>(
                                <ListItem key={list.id} role={undefined} dense button style={{marginBottom:20,marginLeft:100}}>
                                <ListItemIcon>
                                <CheckBox
                                    color={'primary'}
                                    edge="start"
                                    checked={true}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': 1 }}
                                />
                                </ListItemIcon>
                                <ListItemText id={1} primary={list.title}/>
                                </ListItem>
                            ))
                        }
                        </div>
                    </div>
                </div>

            </Container>
        )
    }
}

export default withStyles(homeStyle)(HomePageHeader)