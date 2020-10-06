import { Avatar, Card, CardContent, CardHeader, Container } from '@material-ui/core'
import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
class SellAndBuy extends React.Component{

    render(){
        return <Container maxWidth={'lg'}>
            <Card>
                <CardHeader
                title={'Sell and buy'}
                avatar={<Avatar><AttachMoneyIcon/></Avatar>}
                />
                <CardContent>

                </CardContent>
            </Card>
        </Container>
    }
}

export default SellAndBuy