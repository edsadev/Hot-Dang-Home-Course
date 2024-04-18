import { MainMenu } from "components/MainMenu";
import { BlockRenderer } from "components/BlockRenderer";

export const Page = (props) => {
  const {blocks, mainMenuItems, callToAction} = props

  return (
    <>
      <MainMenu items={mainMenuItems} callToAction={callToAction} />
      <BlockRenderer blocks={blocks} />
    </>
  )
}
