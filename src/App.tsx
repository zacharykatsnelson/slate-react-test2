import {
  createPlateUI,
  createPlugins,
  createParagraphPlugin,
  createBlockquotePlugin,
  createTodoListPlugin,
  createHeadingPlugin,
  createImagePlugin,
  createHorizontalRulePlugin,
  createLinkPlugin,
  createListPlugin,
  createTablePlugin,
  createMediaEmbedPlugin,
  createHighlightPlugin,
  createCodeBlockPlugin,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createFontBackgroundColorPlugin,
  createFontFamilyPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createKbdPlugin,
  createNodeIdPlugin,
  createComboboxPlugin,
  createMentionPlugin,
  createDeserializeMdPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createJuicePlugin,
  Plate,
  HeadingToolbar,
  ColorPickerToolbarDropdown,
  MARK_COLOR,
  MARK_BG_COLOR,
  LinkToolbarButton,
  ImageToolbarButton,
  MediaEmbedToolbarButton
} from "@udecode/plate";
import {
  BasicElementToolbarButtons,
  ListToolbarButtons,
  IndentToolbarButtons,
  BasicMarkToolbarButtons,
  AlignToolbarButtons,
  TableToolbarButtons
} from "./config/toolbars";
import { FormatColorText } from "@styled-icons/material/FormatColorText";
import { Check } from "@styled-icons/material/Check";
import { FontDownload } from "@styled-icons/material/FontDownload";
import { Link } from "@styled-icons/material/Link";
import { Image } from "@styled-icons/material/Image";
import { OndemandVideo } from "@styled-icons/material/OndemandVideo";

export default function App() {
  let components = createPlateUI();
  // components = withStyledPlaceHolders(components);

  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createHorizontalRulePlugin(),
      // createLineHeightPlugin(CONFIG.lineHeight),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      // createAlignPlugin(CONFIG.align),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontBackgroundColorPlugin(),
      createFontFamilyPlugin(),
      createFontColorPlugin(),
      createFontSizePlugin(),
      createFontWeightPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      // createIndentPlugin(CONFIG.indent),
      // createAutoformatPlugin(CONFIG.autoformat),
      // createResetNodePlugin(CONFIG.resetBlockType),
      // createSoftBreakPlugin(CONFIG.softBreak),
      // createExitBreakPlugin(CONFIG.exitBreak),
      // createNormalizeTypesPlugin(CONFIG.forceLayout),
      // createTrailingBlockPlugin(CONFIG.trailingBlock),
      // createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
      createComboboxPlugin(),
      createMentionPlugin(),
      createDeserializeMdPlugin(),
      createDeserializeCsvPlugin(),
      createDeserializeDocxPlugin(),
      createJuicePlugin()
    ],
    {
      components
    }
  );

  return (
    <Plate
      id="playground"
      // editableProps={CONFIG.editableProps}
      // initialValue={VALUES.playground}
      plugins={plugins}
    >
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <ListToolbarButtons />
        <IndentToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_COLOR}
          icon={<FormatColorText />}
          selectedIcon={<Check />}
          tooltip={{ content: "Text color" }}
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_BG_COLOR}
          icon={<FontDownload />}
          selectedIcon={<Check />}
          tooltip={{ content: "Highlight color" }}
        />
        <AlignToolbarButtons />
        <LinkToolbarButton icon={<Link />} />
        <ImageToolbarButton icon={<Image />} />
        <MediaEmbedToolbarButton icon={<OndemandVideo />} />
        <TableToolbarButtons />
      </HeadingToolbar>
    </Plate>
  );
}
