import {client} from '$lib/graphql-client'
import { gql } from 'graphql-request'


export const get = async () => {

    try {

        const query = gql`
        query Landingpgs {
          landingpgs {
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
          }
        
          `

  const { landingpgs } = await client.request(query)

  return {
      status: 200,
      body: { landingpgs }
  }


} catch (error) {

return{
    status:500,
    body: {error: 'This error is from the landingpgs JSON file woo hoo.'}
}

}


}