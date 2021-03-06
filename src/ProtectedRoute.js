import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import auth from './auth'
export const ProtectedRoute = ({component:Component, ...rest})=>{
    return(
        <Route  
        {...rest}
            render={(props)=>{
                if(auth.isAuthenticated()){
                    return <Component {...props}/>
                }else{
                    <Redirect from={
                        {
                            pathname:'/login',
                            state:{
                                from:props.location
                            }
                        }
                    }/>
                }
            }}
        />
        
    )
}