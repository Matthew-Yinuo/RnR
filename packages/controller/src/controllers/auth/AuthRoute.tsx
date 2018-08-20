import * as React from 'react'
import {RouteProps} from 'react-router';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

 class RC extends React.PureComponent<RouteProps>{
    render(){
        return ();
}}

const meQuery = gql `
query MeQuery{   
    me{
        email
    }
}
`;

export const AuthRoute = graphql(meQuery)(RC);