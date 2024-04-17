import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export default function Home(props) {
  console.log("PROPS: ", props);
  const {blocks, mainMenuItems} = props
  return <>
    <MainMenu items={mainMenuItems} />
    <BlockRenderer blocks={blocks} />
  </>
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `
  })

  return {
    props: {
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    }
  }
}