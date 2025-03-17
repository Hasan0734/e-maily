import { htmlCodeBlock } from "@/components/blocks/code";
import {
  headerLogoWithCoverImage,
  headerLogoWithTextHorizontal,
  headerLogoWithTextVertical,
} from "@/components/blocks/headers";
import { text } from "@/components/blocks/typography";
import { FootprintsIcon, Heading1 } from "lucide-react";

export const DEFAULT_SLASH_COMMANDS = [
  {
    title: "Blocks",
    commands: [text],
  },
  {
    title: "Components",
    commands: [
      {
        id: "headers",
        title: "Headers",
        description: "Add pre-designed headers block.",
        searchTerms: ["header", "headers"],
        icon: <Heading1 className="size-4" />,
        preview: "https://cdn/usemaily.com/previews/header-preview-xyz.png",
        commands: [
          headerLogoWithTextVertical,
          headerLogoWithTextHorizontal,
          headerLogoWithCoverImage,
        ],
      },
      {
        id: "footers",
        title: "Footers",
        description: "Add pre-designed footers block.",
        searchTerms: ["header", "headers"],
        icon: <FootprintsIcon className="size-4" />,
        commands: [
          headerLogoWithTextVertical,
          headerLogoWithTextHorizontal,
          headerLogoWithCoverImage,
        ],
      },
      htmlCodeBlock
    ],
  },
];
