import { Container, Divider, Typography } from '@material-ui/core'
import React from 'react'

class Companies extends React.Component{
    render() {
        return (
            <Container maxWidth={'lg'}>
                <Typography color={"primary"}>
                    Companies
                </Typography>
                <Divider/>

            </Container>
        )
    }
}

export default Companies