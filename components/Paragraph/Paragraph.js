import React from "react";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({textAlign = left, content, textColor}) => {
  const pTag = React.createElement(`p`, {
    dangerouslySetInnerHTML: { __html: relativeToAbsoluteUrls(content) },
    className: `max-w-5xl mx-auto ${getTextAlign(textAlign)}`,
    style: {color: textColor},
  });
  return pTag
}
