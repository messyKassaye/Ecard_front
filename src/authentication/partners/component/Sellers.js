import { Card, CardContent, CardHeader, Container, IconButton } from '@material-ui/core'
import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
class Sellers extends React.Component{

    render(){
        return <Container maxWidth={'lg'}>
                <Card>
                    <CardHeader
                     title={'Sellers'}
                     avatar={<PersonIcon/>}
                     action={<IconButton><AddIcon/></IconButton>}
                    />
                    <CardContent>

                    </CardContent>
                </Card>
        </Container>
    }
}

export default Sellers