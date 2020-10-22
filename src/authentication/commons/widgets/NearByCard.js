import { Avatar, Button, Card, CardActions, CardHeader, IconButton } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import React from 'react'

class NearByCard extends React.Component{

    constructor(props) {
        super(props);
        
    }

    render() {
        const nearby = this.props.nearby
        return (
            <Card>
                <CardHeader
                    avatar={<Avatar>{nearby.user[0].first_name.charAt(0)}</Avatar>}
                    subheader={
                        `${nearby.region_name} > ${nearby.city_name} > ${nearby.user[0].role[0].name}`
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

                    <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                            <Button
                            variant={'outlined'}
                            color={'primary'}
                            style={{textTransform:'none'}}
                            >
                                Send friend request
                            </Button>
                    </CardActions>                        
            </Card>                                    
        )
    }
    
}

export default NearByCard