import {client} from '$lib/graphql-client'
import { gql } from 'graphql-request'


export const get = async () => {
    //const slug = req.params.slug

    try {

        const query = gql`
        query Posts{
        posts(where: {tags_contains_some: "GraphQL"}) {
           
         title
         slug
         
         
          }
            
              
          }
          
        `

          //const variables = { slug }
          //was const { tags } = await client.request(query, variables)
          
          const { posts } = await client.request(query)

          return {
              status: 200,
              body: { posts }
          }


    } catch (error) {

        return{
            status:500,
            body: {error: 'HELP ME There was a server error.'}
        }

    }


}
