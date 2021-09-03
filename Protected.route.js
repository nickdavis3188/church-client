import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import auth from './src/auth'
export const ProtectedRoute = ({component:Component, ...rest})=>{
    return(
        <Route  
        {...rest}
        render={(props)=>{
            if(auth.isAuthenticated()){
                return <Component {...props}/>
            }else{
                <Redirect to={
                    {
                        pathname:'/',
                        state:{
                            from:props.location
                        }
                    }
                }
                />
            }
        }}
        />
    )
}