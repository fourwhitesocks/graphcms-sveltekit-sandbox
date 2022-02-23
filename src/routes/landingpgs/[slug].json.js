import {client} from '$lib/graphql-client'
import { gql } from 'graphql-request'


export const get = async (req) => {
    const slug = req.params.slug

    try {

        const query = gql`
        query Landingpg($slug: String!) {
            landingpg(where:{slug:$slug}) {
                blocks {
                    __typename
                    ... on Button {
                      id
                      url
                    }
                    ... on Hero {
                      id
                      slug
                      title
                      
                      image {
                        fileName
                        handle
                      }
                    }
                   
                    }
             
              }
              
          
        `

          const variables = { slug }
          
          const { landingpg } = await client.request(query, variables)

          return {
              status: 200,
              body: { landingpg }
          }


    } catch (error) {

        return{
            status:500,
            body: {error: 'There was a HUGE server error.'}
        }

    }


}
