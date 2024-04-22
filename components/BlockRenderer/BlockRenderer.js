import { Paragraph } from "components/Paragraph";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { theme } from "theme";
import { CallToActionButton } from "components/CallToActionButton";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import Image from "next/image";
import { PropertySearch } from "components/PropertySearch";


export const BlockRenderer = ({blocks}) => {
  return blocks.map(block => {
    switch(block.name){
      case "acf/ctabutton": {
        return <CallToActionButton 
          key={block.id}
          label={block.attributes.data.label}
          destination={block.attributes.data.destination || '/'}
          align={block.attributes.data.align}
        />
      }
      case "acf/propertysearch": {
        return <PropertySearch 
          key={block.id}
        />
      }
      case "core/paragraph": {
        return <Paragraph
          key={block.id}
          content={block.attributes.content}
          textAlign={block.attributes.textAlign}
          textColor={
            theme[block.attributes.textColor] || block.attributes.style?.color.text
          }
        />
      }
      case "core/post-title":
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
        return <Cover 
          key={block.id} 
          bgURL={block.attributes.url}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Cover>
      }
      case 'core/columns': {
        return <Columns 
          key={block.id} 
          isStackedOnMobile={block.attributes.isStackedOnMobile}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Columns>
      }
      case 'core/column': {
        return <Column 
          key={block.id}
          width={block.attributes?.width}
        >
          <BlockRenderer blocks={block.innerBlocks} />
        </Column>
      }
      case 'core/image': {
        return <Image
          key={block.id}
          width={block.attributes.width}
          height={block.attributes.height}
          src={block.attributes.url}
          alt={block.attributes.alt || ""}
        />
      }
      case 'core/block':
      case 'core/group': {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />
      }
      default: {
        console.log("UNKNOW: ", block)
        return null;
      }
    }
  })
}
