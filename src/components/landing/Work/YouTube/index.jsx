// import { Project } from 'components/common'
// import { graphql, useStaticQuery } from 'gatsby'
// import React from 'react'

// export default () => {
//   const { videos } = useStaticQuery(graphql`
//     query {
//       videos: allYoutubeYaml {
//         edges {
//           node {
//             id
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 630) {
//                   ...GatsbyImageSharpFluid_tracedSVG
//                 }
//               }
//             }
//             link
//           }
//         }
//       }
//     }
//   `)
//   return <Project title="YouTube" projects={videos} />
// }
