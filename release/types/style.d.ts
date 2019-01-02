/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Types from './types';
/**
 * Style class.
 */
export declare class Style extends Class.Null {
    /**
     * Aligns the flexible container's items when the items do not use all available space on the cross-axis (vertically).
     */
    alignContent?: Types.AlignContent | Types.Default;
    /**
     * Specifies the default alignment for items inside the flexible container.
     */
    alignItems?: Types.AlignItems | Types.Default;
    /**
     * Specifies the alignment for the selected item inside the flexible container.
     */
    alignSelf?: Types.AlignSelf | Types.Default;
    /**
     * Sets all of an element's properties (other than unicode-bidi and direction) to their initial or inherited values.
     */
    all?: Types.All | Types.Default;
    /**
     * Sets or returns up to eight separate animation properties, in a shorthand form.
     */
    animation?: Types.Default | string;
    /**
     * Defines when the animation will start.
     */
    animationDelay?: Types.Default | string;
    /**
     * Sets or returns whether or not the animation should play in reverse on alternate cycles.
     */
    animationDirection?: Types.AnimationDirection | Types.Default;
    /**
     * Defines how many seconds or milliseconds an animation takes to complete one cycle.
     */
    animationDuration?: Types.Default | string;
    /**
     * Specifies what styles will apply for the element when the animation is not playing
     * (when it is finished, or when it has a "delay").
     */
    animationFillMode?: Types.AnimationFillMode | Types.Default;
    /**
     * Sets or returns how many times an animation should be played.
     */
    animationIterationCount?: Types.AnimationIterationCount | Types.Default | number;
    /**
     * Sets or returns a name for the @keyframes animation.
     */
    animationName?: Types.AnimationName | Types.Default | string;
    /**
     * Specifies whether the animation is running or paused.
     */
    animationPlayState?: Types.AnimationPlayState | Types.Default;
    /**
     * Specifies the speed curve of the animation.
     */
    animationTimingFunction?: Types.AnimationTimingFunction | Types.Default | string;
    /**
     * Defines whether or not an element should be visible when not facing the screen.
     */
    backfaceVisibility?: Types.BackfaceVisibility | Types.Default;
    /**
     * Sets or returns up to eight separate background properties, in a shorthand form.
     */
    background?: Types.Default | string[] | string;
    /**
     * Sets or returns whether a background image should scroll with the content, or be fixed.
     */
    backgroundAttachment?: Types.BackgroundAttachment[] | Types.BackgroundAttachment | Types.Default;
    /**
     * Sets how an element's background images should blend with each other and with the element's background color.
     */
    backgroundBlendMode?: Types.BackgroundBlendMode[] | Types.BackgroundBlendMode | Types.Default;
    /**
     * Sets or returns the painting area of the background.
     */
    backgroundClip?: Types.BackgroundClip | Types.Default;
    /**
     * Sets or returns the background color of an element.
     */
    backgroundColor?: Types.BackgroundColor | Types.Default | string;
    /**
     * Sets or returns the background image of an element.
     */
    backgroundImage?: Types.BackgroundImage | Types.Default | string[] | string;
    /**
     * Sets or returns what the background-position property is relative to.
     */
    backgroundOrigin?: Types.BackgroundOrigin[] | Types.BackgroundOrigin | Types.Default;
    /**
     * Sets or returns the position of a background-image within an element.
     */
    backgroundPosition?: Types.BackgroundPosition[] | Types.BackgroundPosition | Types.Default | string;
    /**
     * Sets or returns how to repeat (tile) a background-image.
     */
    backgroundRepeat?: Types.BackgroundRepeat[] | Types.BackgroundRepeat | Types.Default;
    /**
     * Sets or returns the size of the background images.
     */
    backgroundSize?: Types.BackgroundSize[] | Types.BackgroundSize | Types.Default | string;
    /**
     * Defines the horizontal or vertical size of an element's block, depending on its writing mode.
     */
    blockSize?: Types.BlockSize | Types.Default | string;
    /**
     * Sets or returns up to three separate border properties, in a shorthand form.
     */
    border?: Types.Default | string;
    /**
     * Sets or returns up to three separate border-bottom properties, in a shorthand form.
     */
    borderBottom?: Types.Default | string;
    /**
     * Sets or returns the color of the bottom border of an element.
     */
    borderBottomColor?: Types.BorderColor | Types.Default | string;
    /**
     * Sets or returns the shape of the border of the bottom-left corner.
     */
    borderBottomLeftRadius?: Types.Default | string;
    /**
     * Sets or returns the shape of the border of the bottom-right corner.
     */
    borderBottomRightRadius?: Types.Default | string;
    /**
     * Sets or returns the style of the bottom border of an element.
     */
    borderBottomStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns the width of the bottom border of an element.
     */
    borderBottomWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns whether the table border should be collapsed into a single border or not.
     */
    borderCollapse?: Types.BorderCollapse | Types.Default;
    /**
     * Sets or returns the color of an element's border.
     */
    borderColor?: Types.BorderColor | Types.Default | string;
    /**
     * Sets or returns up to five separate border image properties, in a shorthand form.
     */
    borderImage?: Types.Default | string;
    /**
     * Sets or returns the amount by which the border image area extends beyond the border box.
     */
    borderImageOutset?: Types.Default | string;
    /**
     * Sets or returns whether the image-border should be repeated, rounded or stretched.
     */
    borderImageRepeat?: Types.BorderImageRepeat | Types.Default | string;
    /**
     * Specifies the inward offsets of the image-border.
     */
    borderImageSlice?: Types.BorderImageSlice | Types.Default | string;
    /**
     * Sets or returns the image to be used, instead of the border styles given by the border-style properties.
     */
    borderImageSource?: Types.BorderImageSource | Types.Default | string;
    /**
     * Specifies the widths of the image-border.
     */
    borderImageWidth?: Types.BorderImageWidth | Types.Default | string;
    /**
     * Sets or returns up to three separate border-left properties, in a shorthand form.
     */
    borderLeft?: Types.Default | string;
    /**
     * Sets or returns the color of the left border of an element.
     */
    borderLeftColor?: Types.BorderColor | Types.Default | string;
    /**
     * Sets or returns the style of the left border of an element.
     */
    borderLeftStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns the width of the left border of an element.
     */
    borderLeftWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns up to four separate border radius properties, in a shorthand form.
     */
    borderRadius?: Types.Default | string;
    /**
     * Sets or returns up to three separate border-right properties, in a shorthand form.
     */
    borderRight?: Types.Default | string;
    /**
     * Sets or returns the color of the right border of an element.
     */
    borderRightColor?: Types.BorderColor | Types.Default | string;
    /**
     * Sets or returns the style of the right border of an element.
     */
    borderRightStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns the width of the right border of an element.
     */
    borderRightWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns the space between cells in a table.
     */
    borderSpacing?: Types.Default | string;
    /**
     * Sets or returns the style of an element's border.
     */
    borderStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns up to three separate border-top properties, in a shorthand form.
     */
    borderTop?: Types.Default | string;
    /**
     * Sets or returns the color of the top border of an element.
     */
    borderTopColor?: Types.BorderColor | Types.Default | string;
    /**
     * Sets or returns the shape of the border of the top-left corner.
     */
    borderTopLeftRadius?: Types.Default | string;
    /**
     * Sets or returns the shape of the border of the top-right corner.
     */
    borderTopRightRadius?: Types.Default | string;
    /**
     * Sets or returns the style of the top border of an element.
     */
    borderTopStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns the width of the top border of an element.
     */
    borderTopWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns the width of an element's border.
     */
    borderWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns the bottom position of a positioned element.
     */
    bottom?: Types.Size | Types.Default | string;
    /**
     * Specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an
     * element is applied when the box for the element is fragmented.
     */
    boxDecorationBreak?: Types.BoxDecorationBreak | Types.Default | string;
    /**
     * Sets or returns the drop-shadows of a box element.
     */
    boxShadow?: Types.BoxShadow | Types.Default | string;
    /**
     * Sets or returns the drop-shadows of a box element.
     */
    boxSizing?: Types.BoxSizing | Types.Default | string;
    /**
     * Sets or returns the position of the table caption.
     */
    captionSide?: Types.CaptionSide | Types.Default | string;
    /**
     * Sets or returns which part of a positioned element is visible.
     */
    clip?: Types.Clip | Types.Default | string;
    /**
     * Sets or returns the color of the text.
     */
    color?: Types.Color | Types.Default | string;
    /**
     * Specifies the number of columns an element should be divided into.
     */
    columnCount?: Types.ColumnCount | Types.Default | number;
    /**
     * Specifies how to fill columns, balanced or not.
     */
    columnFill?: Types.ColumnFill | Types.Default;
    /**
     * Specifies the gap between the columns.
     */
    columnGap?: Types.ColumnGap | Types.Default | string;
    /**
     * Sets or returns up to three separate column-rule properties, in a shorthand form.
     */
    columnRule?: Types.Default | string;
    /**
     * Specifies the color of the rule between columns.
     */
    columnRuleColor?: Types.Default | string;
    /**
     * Specifies the style of the rule between columns.
     */
    columnRuleStyle?: Types.BorderStyle | Types.Default | string;
    /**
     * Specifies the width of the rule between columns.
     */
    columnRuleWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns up to two separate column-width and column-count property, in a shorthand form.
     */
    columns?: Types.Columns | Types.Default | string;
    /**
     * Specifies how many columns an element should span across.
     */
    columnSpan?: Types.ColumnSpan | Types.Default | number;
    /**
     * Specifies the width of the columns.
     */
    columnWidth?: Types.ColumnWidth | Types.Default | number;
    /**
     * Is used with the ::before and ::after pseudo-elements, to insert generated content.
     */
    content?: Types.Content | Types.Default | string;
    /**
     * Increments one or more counter values, is usually used together with the counterReset property and the content property.
     */
    counterIncrement?: Types.CounterIncrement | Types.Default | string;
    /**
     * Creates or resets one or more counters, is usually used together with the counterIncrement property and the content property.
     */
    counterReset?: Types.CounterReset | Types.Default | string;
    /**
     * Sets or returns the type of cursor to display for the mouse pointer.
     */
    cursor?: Types.Cursor | Types.Default | string;
    /**
     * Sets or returns the text direction (reading order) of an element's content.
     */
    direction?: Types.Direction | Types.Default;
    /**
     * Sets or returns the element's display type.
     */
    display?: Types.Display | Types.Default;
    /**
     * Sets or returns whether to show the border and background of empty cells, or not.
     */
    emptyCells?: Types.EmptyCells | Types.Default;
    /**
     * Adds visual effects (like blur and saturation) to images.
     */
    filter?: Types.Filter | string;
    /**
     * Sets or returns the length of the item, relative to the rest of the flexible items inside the same container.
     */
    flex?: Types.Flex | Types.Default | string;
    /**
     * Specifies the initial length of a flexible item.
     */
    flexBasis?: Types.FlexBasis | Types.Default | string;
    /**
     * Specifies the initial length of a flexible item.
     */
    flexDirection?: Types.FlexDirection | Types.Default;
    /**
     * Is a shorthand property for the flexDirection and the flexWrap properties.
     */
    flexFlow?: Types.Default | string;
    /**
     * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
     */
    flexGrow?: Types.FlexGrow | Types.Default | number;
    /**
     * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
     */
    flexShrink?: Types.FlexShrink | Types.Default | number;
    /**
     * Specifies whether the flexible items should wrap or not.
     */
    flexWrap?: Types.FlexWrap | Types.Default;
    /**
     * Sets or returns the horizontal alignment of an element.
     */
    float?: Types.Float | Types.Default;
    /**
     * Sets or returns up to six separate font properties, in a shorthand form.
     */
    font?: Types.Font | Types.Default | string;
    /**
     * Sets or returns a list of font-family names and/or generic-family names for text in an element.
     */
    fontFamily?: Types.Default | string;
    /**
     * Sets or returns the font size of the text.
     */
    fontSize?: Types.FontSize | Types.Default | string;
    /**
     * Sets or returns the font aspect value of a text.
     */
    fontSizeAdjust?: Types.FontSizeAdjust | Types.Default | number;
    /**
     * Allows you to make text wider or narrower.
     */
    fontStretch?: Types.FontStretch | Types.Default;
    /**
     * Sets or returns whether the style of the font is normal, italic or oblique.
     */
    fontStyle?: Types.FontStyle | Types.Default;
    /**
     * Sets or returns whether the font should be displayed in small capital letters.
     */
    fontVariant?: Types.FontVariant | Types.Default;
    /**
     * Sets or returns how thick or thin characters in a text should be displayed.
     */
    fontWeight?: Types.FontWeight | Types.Default;
    /**
     * Specifies whether a punctuation character may be placed outside the line box.
     */
    hangingPunctuation?: Types.HangingPunctuation | Types.Default;
    /**
     * Sets or returns the height of an element.
     */
    height?: Types.Size | Types.Default | string;
    /**
     * Defines whether hyphenation is allowed to create more soft wrap opportunities within a line of text.
     */
    hyphens?: Types.Hyphens | Types.Default;
    /**
     * Defines whether an element must create a new stacking content.
     */
    isolation?: Types.Isolation | Types.Default;
    /**
     * Aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).
     */
    justifyContent?: Types.JustifyContent | Types.Default;
    /**
     * Sets or returns the left position of a positioned element.
     */
    left?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the space between characters in a text.
     */
    letterSpacing?: Types.LetterSpacing | Types.Default | string;
    /**
     * Sets or returns the distance between lines in a text.
     */
    lineHeight?: Types.LineHeight | Types.Default | string | number;
    /**
     * Sets or returns up to three separate list properties, in a shorthand form.
     */
    listStyle?: Types.Default | string;
    /**
     * Sets or returns an image as the list-item marker.
     */
    listStyleImage?: Types.ListStyleImage | Types.Default | string;
    /**
     * Sets or returns the position of the list-item marker.
     */
    listStylePosition?: Types.ListStylePosition | Types.Default;
    /**
     * Sets or returns the list-item marker type.
     */
    listStyleType?: Types.ListStyleType | Types.Default;
    /**
     * Sets or returns the margins of an element.
     */
    margin?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the bottom margin of an element.
     */
    marginBottom?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the left margin of an element.
     */
    marginLeft?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the right margin of an element.
     */
    marginRight?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the top margin of an element.
     */
    marginTop?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the maximum height of an element.
     */
    maxHeight?: Types.MaxSize | Types.Default | string;
    /**
     * Sets or returns the maximum width of an element.
     */
    maxWidth?: Types.MaxSize | Types.Default | string;
    /**
     * Sets or returns the minimum height of an element.
     */
    minHeight?: Types.Default | string;
    /**
     * Sets or returns the minimum width of an element.
     */
    minWidth?: Types.Default | string;
    /**
     * Specifies how an <img> or <video> should be resized to fit its container.
     */
    objectFit?: Types.ObjectFit | Types.Default;
    /**
     * Sets or returns the opacity level of an element.
     */
    opacity?: Types.Default | number;
    /**
     * Specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
     */
    order?: Types.Default | number;
    /**
     * Sets or returns the minimum number of lines for an element that must be visible at the bottom of a page
     * (for printing or print preview)
     */
    orphans?: Types.Default | number;
    /**
     * Sets or returns all the outline properties, in a shorthand form.
     */
    outline?: Types.Default | string;
    /**
     * Sets or returns the color of the outline around an element.
     */
    outlineColor?: Types.OutlineColor | Types.Default | string;
    /**
     * Offsets an outline, and draws it beyond the border edge.
     */
    outlineOffset?: Types.Default | string;
    /**
     * Sets or returns the style of the outline around an element.
     */
    outlineStyle?: Types.BorderStyle | Types.Default;
    /**
     * Sets or returns the width of the outline around an element.
     */
    outlineWidth?: Types.BorderWidth | Types.Default | string;
    /**
     * Sets or returns what to do with content that renders outside the element box.
     */
    overflow?: Types.Overflow | Types.Default;
    /**
     * Specifies what to do with the left/right edges of the content, if it overflows the element's content area
     */
    overflowX?: Types.Overflow | Types.Default;
    /**
     * Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area
     */
    overflowY?: Types.Overflow | Types.Default;
    /**
     * Sets or returns the padding of an element.
     */
    padding?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the bottom padding of an element.
     */
    paddingBottom?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the left padding of an element.
     */
    paddingLeft?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the right padding of an element.
     */
    paddingRight?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the top padding of an element.
     */
    paddingTop?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the page-break behavior after an element (for printing or print preview).
     */
    pageBreakAfter?: Types.PageBreak | Types.Default;
    /**
     * Sets or returns the page-break behavior before an element (for printing or print preview).
     */
    pageBreakBefore?: Types.PageBreak | Types.Default;
    /**
     * Sets or returns the page-break behavior inside an element (for printing or print preview).
     */
    pageBreakInside?: Types.PageBreakInside | Types.Default;
    /**
     * Defines how many pixels a 3D element is placed from the view.
     */
    perspective?: Types.Perspective | Types.Default | string;
    /**
     * Sets how an element is positioned in a document.
     */
    position?: Types.Position | Types.Default;
    /**
     * Sets or returns the type of quotation marks for embedded quotations.
     */
    quotes?: Types.Quotes | Types.Default | string;
    /**
     * Specifies whether or not an element is resizable by the user.
     */
    resize?: Types.Resize | Types.Default;
    /**
     * Sets or returns the right position of a positioned element.
     */
    right?: Types.Size | Types.Default | string;
    /**
     * Sets or returns the way to lay out table cells, rows, and columns.
     */
    tableLayout?: Types.TableLayout | Types.Default;
    /**
     * Specifies the length of the space used for the tab character.
     */
    tabSize?: Types.Default | string;
    /**
     * Sets or returns the horizontal alignment of text in a block level element.
     */
    textAlign?: Types.TextAlign | Types.Default;
    /**
     * Specifies how to align the last line of a text.
     */
    textAlignLast?: Types.TextAlignLast | Types.Default;
    /**
     * Sets or returns one ore more decorations for a text.
     */
    textDecoration?: Types.TextDecoration | Types.Default;
    /**
     * Specifies the color of the text-decoration (underlines, overlines, linethroughs)
     */
    textDecorationColor?: Types.Default | string;
    /**
     * Sets or returns what type of line, if any, the decoration will have.
     */
    textDecorationLine?: Types.TextDecorationLine | Types.Default;
    /**
     * Sets or returns how the line, if any, will display.
     */
    textDecorationStyle?: Types.TextDecorationStyle | Types.Default;
    /**
     * Sets or returns the indentation of the first line of text.
     */
    textIndent?: Types.Default | string;
    /**
     * Sets or returns the justification method used when text-align is "justify".
     */
    textJustify?: Types.TextJustify | Types.Default;
    /**
     * Specifies what should happen when text overflows the containing element.
     */
    textOverflow?: Types.TextOverflow | Types.Default | string;
    /**
     * Sets or returns one ore more shadow effects for a text.
     */
    textShadow?: Types.TextShadow | Types.Default | string;
    /**
     * Sets or returns the capitalization of a text.
     */
    textTransform?: Types.TextTransform | Types.Default;
    /**
     * Sets or returns the top position of a positioned element.
     */
    top?: Types.Size | Types.Default | string;
    /**
     * Applies a 2D or 3D transformation to an element.
     */
    transform?: Types.Transform | Types.Default | string;
    /**
     * Allows you to change the position on transformed elements.
     */
    transformOrigin?: Types.Default | string;
    /**
     * Sets or returned how nested elements are rendered in 3D space.
     */
    transformStyle?: Types.TransformStyle | Types.Default;
    /**
     * Is a shorthand property for the four transition properties.
     */
    transition?: Types.Default | string;
    /**
     * Specifies when the transition effect will start.
     */
    transitionDelay?: Types.Default | string;
    /**
     * Sets or returns how many seconds (s) or milliseconds (ms) a transition effect takes to complete.
     */
    transitionDuration?: Types.Default | string;
    /**
     * Specifies the name of the CSS property the transition effect is for
     * (the transition effect will start when the specified CSS property changes).
     */
    transitionProperty?: Types.TransitionProperty | Types.Default | string;
    /**
     * Specifies the speed curve of the transition effect.
     */
    transitionTimingFunction?: Types.TransitionTimingFunction | Types.Default | string;
    /**
     * Is used with the direction property to set or return whether the text should be overridden to support
     * multiple languages in the same document.
     */
    unicodeBidi?: Types.UnicodeBidi | Types.Default;
    /**
     * Sets or returns whether the text of an element can be selected or not.
     */
    userSelect?: Types.UserSelect | Types.Default;
    /**
     * Sets or returns the vertical alignment of the content in an element.
     */
    verticalAlign?: Types.VerticalAlign | Types.Default | string;
    /**
     * Sets or returns whether an element should be visible.
     */
    visibility?: Types.Visibility | Types.Default;
    /**
     * Sets or returns how to handle tabs, line breaks and whitespace in a text.
     */
    whiteSpace?: Types.WhiteSpace | Types.Default;
    /**
     * Sets or returns the width an element.
     */
    width?: Types.Size | Types.Default | string;
    /**
     * Specifies line breaking rules for non-CJK scripts.
     */
    wordBreak?: Types.WordBreak | Types.Default;
    /**
     * Sets or returns the spacing between words in a text.
     */
    wordSpacing?: Types.WordSpacing | Types.Default | string;
    /**
     * Allows long words to be able to be broken and wrap onto the next line.
     */
    wordWrap?: Types.WordWrap | Types.Default;
    /**
     * Sets or returns the minimum number of lines for an element that must be visible at the top of a page
     * (for printing or print preview).
     */
    windows?: Types.Default | number;
    /**
     * Sets or returns the stack order of a positioned element.
     */
    zIndex?: Types.ZIndex | Types.Default | number;
}
