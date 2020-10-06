import { green, orange, red } from "@material-ui/core/colors"

const  homeStyle = theme=>({

    root:{
        display:'flex',
        flexDirection:'column',
        minHeight:'100vh'
    },
    appBar:{
        backgroundColor:'transparent'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:100,
        flex:1
    },
    card:{
        width:500,
        margin:10,
        [theme.breakpoints.down('xs')]:{
            width:'90%'
        }
    },
    grow:{
        display:'flex',
        flexGrow:'1'
    },
    button:{
        textTransform:'none',
        marginRight:250,
        [theme.breakpoints.down('xs')]:{
            marginRight:10
        }
    },
    footer:{
        backgroundColor:'#3C4252',
        color:'white',
        padding:10
    },
    accidentPageContainer:{
        paddingLeft:150,
        paddingRight:150,
        [theme.breakpoints.down('xs')]:{
            paddingLeft:10,
            paddingRight:10,  
        }
    },
    span:{
        marginRight:10,
        marginLeft:10,
        color:orange[500]
    },
    start_using:{
        color:green[500],
        marginTop:15,
        marginBottom:15
    },
    text_input:{
        width:'100%',
        marginBottom:30
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:250,
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',
           
        }
    },
    headerContainerTwo:{
        width:650,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    form:{
        marginTop:-80,
        zIndex:12,
        paddingLeft: 150,
        paddingRight: 150,
        [theme.breakpoints.down('xs')]:{
            marginTop: -40,
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    text_input:{
        width:'100%',
        marginBottom:20
    },
    register_me_as:{
        display: "flex",
        flexDirection:'row',
        justifyContent: 'start',
        fontSize:17,
        color:'#031b4e',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
    },
    submit_division:{
        display:'flex',
        flexDirection: 'column',
       
    },
    signup_button:{
        textTransform:'none',
        marginBottom:10,
        width:'100%',
        marginRight:20
    },
    registered:{
        display:"flex",
        alignItems:"center",
        color:'#031b4e',
        paddingLeft:50,
        fontSize: 16,
        direction:'row',
    },
    

})

export default homeStyle