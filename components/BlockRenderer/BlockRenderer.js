import { Paragraph } from "components/Paragraph";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { theme } from "theme";


export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch(block.name){
      case "core/paragraph": {
        return <Paragraph
          key={block.id}
          content={block.attributes.content}
          textAlign={block.attributes.textAlign}
          textColor={
            theme[block.attributes.textColor] || block.attributes.style.color.text
          }
        />
      }
      case 'core/heading': {
        return <Heading 
          key={block.id} 
          textAlign={block.attributes.textAlign}
          level={block.attributes.level}
          content={block.attributes.content}
        />
      }
      case 'core/cover': {
        console.log("BLOCK:", block)
        return <Cover key={block.id} bgURL={block.attributes.url}>
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
      }
      default:
        return null;
    }
  })
}
