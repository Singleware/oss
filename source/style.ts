/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import * as Types from './types';

/**
 * Style class.
 */
@Class.Describe()
export class Style extends Class.Null {
  /**
   * Aligns the flexible container's items when the items do not use all available space on the cross-axis (vertically).
   */
  @Class.Public()
  @Class.Property()
  public alignContent?: Types.AlignContent | Types.Default;

  /**
   * Specifies the default alignment for items inside the flexible container.
   */
  @Class.Public()
  @Class.Property()
  public alignItems?: Types.AlignItems | Types.Default;

  /**
   * Specifies the alignment for the selected item inside the flexible container.
   */
  @Class.Public()
  @Class.Property()
  public alignSelf?: Types.AlignSelf | Types.Default;

  /**
   * Sets all of an element's properties (other than unicode-bidi and direction) to their initial or inherited values.
   */
  @Class.Public()
  @Class.Property()
  public all?: Types.All | Types.Default;

  /**
   * Sets or returns up to eight separate animation properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public animation?: Types.Default | string;

  /**
   * Defines when the animation will start.
   */
  @Class.Public()
  @Class.Property()
  public animationDelay?: Types.Default | string;

  /**
   * Sets or returns whether or not the animation should play in reverse on alternate cycles.
   */
  @Class.Public()
  @Class.Property()
  public animationDirection?: Types.AnimationDirection | Types.Default;

  /**
   * Defines how many seconds or milliseconds an animation takes to complete one cycle.
   */
  @Class.Public()
  @Class.Property()
  public animationDuration?: Types.Default | string;

  /**
   * Specifies what styles will apply for the element when the animation is not playing
   * (when it is finished, or when it has a "delay").
   */
  @Class.Public()
  @Class.Property()
  public animationFillMode?: Types.AnimationFillMode | Types.Default;

  /**
   * Sets or returns how many times an animation should be played.
   */
  @Class.Public()
  @Class.Property()
  public animationIterationCount?: Types.AnimationIterationCount | Types.Default | number;

  /**
   * Sets or returns a name for the @keyframes animation.
   */
  @Class.Public()
  @Class.Property()
  public animationName?: Types.AnimationName | Types.Default | string;

  /**
   * Specifies whether the animation is running or paused.
   */
  @Class.Public()
  @Class.Property()
  public animationPlayState?: Types.AnimationPlayState | Types.Default;

  /**
   * Specifies the speed curve of the animation.
   */
  @Class.Public()
  @Class.Property()
  public animationTimingFunction?: Types.AnimationTimingFunction | Types.Default | string;

  /**
   * Defines whether or not an element should be visible when not facing the screen.
   */
  @Class.Public()
  @Class.Property()
  public backfaceVisibility?: Types.BackfaceVisibility | Types.Default;

  /**
   * Sets or returns up to eight separate background properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public background?: Types.Default | string[] | string;

  /**
   * Sets or returns whether a background image should scroll with the content, or be fixed.
   */
  @Class.Public()
  @Class.Property()
  public backgroundAttachment?: Types.BackgroundAttachment[] | Types.BackgroundAttachment | Types.Default;

  /**
   * Sets how an element's background images should blend with each other and with the element's background color.
   */
  @Class.Public()
  @Class.Property()
  public backgroundBlendMode?: Types.BackgroundBlendMode[] | Types.BackgroundBlendMode | Types.Default;

  /**
   * Sets or returns the painting area of the background.
   */
  @Class.Public()
  @Class.Property()
  public backgroundClip?: Types.BackgroundClip | Types.Default;

  /**
   * Sets or returns the background color of an element.
   */
  @Class.Public()
  @Class.Property()
  public backgroundColor?: Types.BackgroundColor | Types.Default | string;

  /**
   * Sets or returns the background image of an element.
   */
  @Class.Public()
  @Class.Property()
  public backgroundImage?: Types.BackgroundImage | Types.Default | string[] | string;

  /**
   * Sets or returns what the background-position property is relative to.
   */
  @Class.Public()
  @Class.Property()
  public backgroundOrigin?: Types.BackgroundOrigin[] | Types.BackgroundOrigin | Types.Default;

  /**
   * Sets or returns the position of a background-image within an element.
   */
  @Class.Public()
  @Class.Property()
  public backgroundPosition?: Types.BackgroundPosition[] | Types.BackgroundPosition | Types.Default | string;

  /**
   * Sets or returns how to repeat (tile) a background-image.
   */
  @Class.Public()
  @Class.Property()
  public backgroundRepeat?: Types.BackgroundRepeat[] | Types.BackgroundRepeat | Types.Default;

  /**
   * Sets or returns the size of the background images.
   */
  @Class.Public()
  @Class.Property()
  public backgroundSize?: Types.BackgroundSize[] | Types.BackgroundSize | Types.Default | string;

  /**
   * Defines the horizontal or vertical size of an element's block, depending on its writing mode.
   */
  @Class.Public()
  @Class.Property()
  public blockSize?: Types.BlockSize | Types.Default | string;

  /**
   * Sets or returns up to three separate border properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public border?: Types.Default | string;

  /**
   * Sets or returns up to three separate border-bottom properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderBottom?: Types.Default | string;

  /**
   * Sets or returns the color of the bottom border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderBottomColor?: Types.BorderColor | Types.Default | string;

  /**
   * Sets or returns the shape of the border of the bottom-left corner.
   */
  @Class.Public()
  @Class.Property()
  public borderBottomLeftRadius?: Types.Default | string;

  /**
   * Sets or returns the shape of the border of the bottom-right corner.
   */
  @Class.Public()
  @Class.Property()
  public borderBottomRightRadius?: Types.Default | string;

  /**
   * Sets or returns the style of the bottom border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderBottomStyle?: Types.BorderStyle | Types.Default;

  /**
   * Sets or returns the width of the bottom border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderBottomWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns whether the table border should be collapsed into a single border or not.
   */
  @Class.Public()
  @Class.Property()
  public borderCollapse?: Types.BorderCollapse | Types.Default;

  /**
   * Sets or returns the color of an element's border.
   */
  @Class.Public()
  @Class.Property()
  public borderColor?: Types.BorderColor | Types.Default | string;

  /**
   * Sets or returns up to five separate border image properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderImage?: Types.Default | string;

  /**
   * Sets or returns the amount by which the border image area extends beyond the border box.
   */
  @Class.Public()
  @Class.Property()
  public borderImageOutset?: Types.Default | string;

  /**
   * Sets or returns whether the image-border should be repeated, rounded or stretched.
   */
  @Class.Public()
  @Class.Property()
  public borderImageRepeat?: Types.BorderImageRepeat | Types.Default | string;

  /**
   * Specifies the inward offsets of the image-border.
   */
  @Class.Public()
  @Class.Property()
  public borderImageSlice?: Types.BorderImageSlice | Types.Default | string;

  /**
   * Sets or returns the image to be used, instead of the border styles given by the border-style properties.
   */
  @Class.Public()
  @Class.Property()
  public borderImageSource?: Types.BorderImageSource | Types.Default | string;

  /**
   * Specifies the widths of the image-border.
   */
  @Class.Public()
  @Class.Property()
  public borderImageWidth?: Types.BorderImageWidth | Types.Default | string;

  /**
   * Sets or returns up to three separate border-left properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderLeft?: Types.Default | string;

  /**
   * Sets or returns the color of the left border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderLeftColor?: Types.BorderColor | Types.Default | string;

  /**
   * Sets or returns the style of the left border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderLeftStyle?: Types.BorderStyle | Types.Default;

  /**
   * Sets or returns the width of the left border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderLeftWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns up to four separate border radius properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderRadius?: Types.Default | string;

  /**
   * Sets or returns up to three separate border-right properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderRight?: Types.Default | string;

  /**
   * Sets or returns the color of the right border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderRightColor?: Types.BorderColor | Types.Default | string;

  /**
   * Sets or returns the style of the right border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderRightStyle?: Types.BorderStyle | Types.Default;
  /**
   * Sets or returns the width of the right border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderRightWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns the space between cells in a table.
   */
  @Class.Public()
  @Class.Property()
  public borderSpacing?: Types.Default | string;

  /**
   * Sets or returns the style of an element's border.
   */
  @Class.Public()
  @Class.Property()
  public borderStyle?: Types.BorderStyle | Types.Default;

  /**
   * Sets or returns up to three separate border-top properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public borderTop?: Types.Default | string;

  /**
   * Sets or returns the color of the top border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderTopColor?: Types.BorderColor | Types.Default | string;

  /**
   * Sets or returns the shape of the border of the top-left corner.
   */
  @Class.Public()
  @Class.Property()
  public borderTopLeftRadius?: Types.Default | string;

  /**
   * Sets or returns the shape of the border of the top-right corner.
   */
  @Class.Public()
  @Class.Property()
  public borderTopRightRadius?: Types.Default | string;

  /**
   * Sets or returns the style of the top border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderTopStyle?: Types.BorderStyle | Types.Default;

  /**
   * Sets or returns the width of the top border of an element.
   */
  @Class.Public()
  @Class.Property()
  public borderTopWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns the width of an element's border.
   */
  @Class.Public()
  @Class.Property()
  public borderWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns the bottom position of a positioned element.
   */
  @Class.Public()
  @Class.Property()
  public bottom?: Types.Size | Types.Default | string;

  /**
   * Specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an
   * element is applied when the box for the element is fragmented.
   */
  @Class.Public()
  @Class.Property()
  public boxDecorationBreak?: Types.BoxDecorationBreak | Types.Default | string;

  /**
   * Sets or returns the drop-shadows of a box element.
   */
  @Class.Public()
  @Class.Property()
  public boxShadow?: Types.BoxShadow | Types.Default | string;

  /**
   * Sets or returns the drop-shadows of a box element.
   */
  @Class.Public()
  @Class.Property()
  public boxSizing?: Types.BoxSizing | Types.Default | string;

  /**
   * Sets or returns the position of the table caption.
   */
  @Class.Public()
  @Class.Property()
  public captionSide?: Types.CaptionSide | Types.Default | string;

  /**
   * Sets or returns which part of a positioned element is visible.
   */
  @Class.Public()
  @Class.Property()
  public clip?: Types.Clip | Types.Default | string;

  /**
   * Sets or returns the color of the text.
   */
  @Class.Public()
  @Class.Property()
  public color?: Types.Color | Types.Default | string;

  /**
   * Specifies the number of columns an element should be divided into.
   */
  @Class.Public()
  @Class.Property()
  public columnCount?: Types.ColumnCount | Types.Default | number;

  /**
   * Specifies how to fill columns, balanced or not.
   */
  @Class.Public()
  @Class.Property()
  public columnFill?: Types.ColumnFill | Types.Default;

  /**
   * Specifies the gap between the columns.
   */
  @Class.Public()
  @Class.Property()
  public columnGap?: Types.ColumnGap | Types.Default | string;

  /**
   * Sets or returns up to three separate column-rule properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public columnRule?: Types.Default | string;

  /**
   * Specifies the color of the rule between columns.
   */
  @Class.Public()
  @Class.Property()
  public columnRuleColor?: Types.Default | string;

  /**
   * Specifies the style of the rule between columns.
   */
  @Class.Public()
  @Class.Property()
  public columnRuleStyle?: Types.BorderStyle | Types.Default | string;

  /**
   * Specifies the width of the rule between columns.
   */
  @Class.Public()
  @Class.Property()
  public columnRuleWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns up to two separate column-width and column-count property, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public columns?: Types.Columns | Types.Default | string;

  /**
   * Specifies how many columns an element should span across.
   */
  @Class.Public()
  @Class.Property()
  public columnSpan?: Types.ColumnSpan | Types.Default | number;

  /**
   * Specifies the width of the columns.
   */
  @Class.Public()
  @Class.Property()
  public columnWidth?: Types.ColumnWidth | Types.Default | number;

  /**
   * Is used with the ::before and ::after pseudo-elements, to insert generated content.
   */
  @Class.Public()
  @Class.Property()
  public content?: Types.Content | Types.Default | string;

  /**
   * Increments one or more counter values, is usually used together with the counterReset property and the content property.
   */
  @Class.Public()
  @Class.Property()
  public counterIncrement?: Types.CounterIncrement | Types.Default | string;

  /**
   * Creates or resets one or more counters, is usually used together with the counterIncrement property and the content property.
   */
  @Class.Public()
  @Class.Property()
  public counterReset?: Types.CounterReset | Types.Default | string;

  /**
   * Sets or returns the type of cursor to display for the mouse pointer.
   */
  @Class.Public()
  @Class.Property()
  public cursor?: Types.Cursor | Types.Default | string;

  /**
   * Sets or returns the text direction (reading order) of an element's content.
   */
  @Class.Public()
  @Class.Property()
  public direction?: Types.Direction | Types.Default;

  /**
   * Sets or returns the element's display type.
   */
  @Class.Public()
  @Class.Property()
  public display?: Types.Display | Types.Default;

  /**
   * Sets or returns whether to show the border and background of empty cells, or not.
   */
  @Class.Public()
  @Class.Property()
  public emptyCells?: Types.EmptyCells | Types.Default;

  /**
   * Adds visual effects (like blur and saturation) to images.
   */
  @Class.Public()
  @Class.Property()
  public filter?: Types.Filter | string;

  /**
   * Sets or returns the length of the item, relative to the rest of the flexible items inside the same container.
   */
  @Class.Public()
  @Class.Property()
  public flex?: Types.Flex | Types.Default | string;

  /**
   * Specifies the initial length of a flexible item.
   */
  @Class.Public()
  @Class.Property()
  public flexBasis?: Types.FlexBasis | Types.Default | string;

  /**
   * Specifies the initial length of a flexible item.
   */
  @Class.Public()
  @Class.Property()
  public flexDirection?: Types.FlexDirection | Types.Default;

  /**
   * Is a shorthand property for the flexDirection and the flexWrap properties.
   */
  @Class.Public()
  @Class.Property()
  public flexFlow?: Types.Default | string;

  /**
   * Specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   */
  @Class.Public()
  @Class.Property()
  public flexGrow?: Types.FlexGrow | Types.Default | number;

  /**
   * Specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   */
  @Class.Public()
  @Class.Property()
  public flexShrink?: Types.FlexShrink | Types.Default | number;

  /**
   * Specifies whether the flexible items should wrap or not.
   */
  @Class.Public()
  @Class.Property()
  public flexWrap?: Types.FlexWrap | Types.Default;

  /**
   * Sets or returns the horizontal alignment of an element.
   */
  @Class.Public()
  @Class.Property()
  public float?: Types.Float | Types.Default;

  /**
   * Sets or returns up to six separate font properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public font?: Types.Font | Types.Default | string;

  /**
   * Sets or returns a list of font-family names and/or generic-family names for text in an element.
   */
  @Class.Public()
  @Class.Property()
  public fontFamily?: Types.Default | string;

  /**
   * Sets or returns the font size of the text.
   */
  @Class.Public()
  @Class.Property()
  public fontSize?: Types.FontSize | Types.Default | string;

  /**
   * Sets or returns the font aspect value of a text.
   */
  @Class.Public()
  @Class.Property()
  public fontSizeAdjust?: Types.FontSizeAdjust | Types.Default | number;

  /**
   * Allows you to make text wider or narrower.
   */
  @Class.Public()
  @Class.Property()
  public fontStretch?: Types.FontStretch | Types.Default;

  /**
   * Sets or returns whether the style of the font is normal, italic or oblique.
   */
  @Class.Public()
  @Class.Property()
  public fontStyle?: Types.FontStyle | Types.Default;

  /**
   * Sets or returns whether the font should be displayed in small capital letters.
   */
  @Class.Public()
  @Class.Property()
  public fontVariant?: Types.FontVariant | Types.Default;

  /**
   * Sets or returns how thick or thin characters in a text should be displayed.
   */
  @Class.Public()
  @Class.Property()
  public fontWeight?: Types.FontWeight | Types.Default;

  /**
   * Specifies whether a punctuation character may be placed outside the line box.
   */
  @Class.Public()
  @Class.Property()
  public hangingPunctuation?: Types.HangingPunctuation | Types.Default;

  /**
   * Sets or returns the height of an element.
   */
  @Class.Public()
  @Class.Property()
  public height?: Types.Size | Types.Default | string;

  /**
   * Defines whether hyphenation is allowed to create more soft wrap opportunities within a line of text.
   */
  @Class.Public()
  @Class.Property()
  public hyphens?: Types.Hyphens | Types.Default;

  /**
   * Defines whether an element must create a new stacking content.
   */
  @Class.Public()
  @Class.Property()
  public isolation?: Types.Isolation | Types.Default;

  /**
   * Aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).
   */
  @Class.Public()
  @Class.Property()
  public justifyContent?: Types.JustifyContent | Types.Default;

  /**
   * Sets or returns the left position of a positioned element.
   */
  @Class.Public()
  @Class.Property()
  public left?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the space between characters in a text.
   */
  @Class.Public()
  @Class.Property()
  public letterSpacing?: Types.LetterSpacing | Types.Default | string;

  /**
   * Sets or returns the distance between lines in a text.
   */
  @Class.Public()
  @Class.Property()
  public lineHeight?: Types.LineHeight | Types.Default | string | number;

  /**
   * Sets or returns up to three separate list properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public listStyle?: Types.Default | string;

  /**
   * Sets or returns an image as the list-item marker.
   */
  @Class.Public()
  @Class.Property()
  public listStyleImage?: Types.ListStyleImage | Types.Default | string;

  /**
   * Sets or returns the position of the list-item marker.
   */
  @Class.Public()
  @Class.Property()
  public listStylePosition?: Types.ListStylePosition | Types.Default;

  /**
   * Sets or returns the list-item marker type.
   */
  @Class.Public()
  @Class.Property()
  public listStyleType?: Types.ListStyleType | Types.Default;

  /**
   * Sets or returns the margins of an element.
   */
  @Class.Public()
  @Class.Property()
  public margin?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the bottom margin of an element.
   */
  @Class.Public()
  @Class.Property()
  public marginBottom?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the left margin of an element.
   */
  @Class.Public()
  @Class.Property()
  public marginLeft?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the right margin of an element.
   */
  @Class.Public()
  @Class.Property()
  public marginRight?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the top margin of an element.
   */
  @Class.Public()
  @Class.Property()
  public marginTop?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the maximum height of an element.
   */
  @Class.Public()
  @Class.Property()
  public maxHeight?: Types.MaxSize | Types.Default | string;

  /**
   * Sets or returns the maximum width of an element.
   */
  @Class.Public()
  @Class.Property()
  public maxWidth?: Types.MaxSize | Types.Default | string;

  /**
   * Sets or returns the minimum height of an element.
   */
  @Class.Public()
  @Class.Property()
  public minHeight?: Types.Default | string;

  /**
   * Sets or returns the minimum width of an element.
   */
  @Class.Public()
  @Class.Property()
  public minWidth?: Types.Default | string;

  /**
   * Specifies how an <img> or <video> should be resized to fit its container.
   */
  @Class.Public()
  @Class.Property()
  public objectFit?: Types.ObjectFit | Types.Default;

  /**
   * Sets or returns the opacity level of an element.
   */
  @Class.Public()
  @Class.Property()
  public opacity?: Types.Default | number;

  /**
   * Specifies the order of a flexible item relative to the rest of the flexible items inside the same container.
   */
  @Class.Public()
  @Class.Property()
  public order?: Types.Default | number;

  /**
   * Sets or returns the minimum number of lines for an element that must be visible at the bottom of a page
   * (for printing or print preview)
   */
  @Class.Public()
  @Class.Property()
  public orphans?: Types.Default | number;

  /**
   * Sets or returns all the outline properties, in a shorthand form.
   */
  @Class.Public()
  @Class.Property()
  public outline?: Types.Default | string;

  /**
   * Sets or returns the color of the outline around an element.
   */
  @Class.Public()
  @Class.Property()
  public outlineColor?: Types.OutlineColor | Types.Default | string;

  /**
   * Offsets an outline, and draws it beyond the border edge.
   */
  @Class.Public()
  @Class.Property()
  public outlineOffset?: Types.Default | string;

  /**
   * Sets or returns the style of the outline around an element.
   */
  @Class.Public()
  @Class.Property()
  public outlineStyle?: Types.BorderStyle | Types.Default;

  /**
   * Sets or returns the width of the outline around an element.
   */
  @Class.Public()
  @Class.Property()
  public outlineWidth?: Types.BorderWidth | Types.Default | string;

  /**
   * Sets or returns what to do with content that renders outside the element box.
   */
  @Class.Public()
  @Class.Property()
  public overflow?: Types.Overflow | Types.Default;

  /**
   * Specifies what to do with the left/right edges of the content, if it overflows the element's content area
   */
  @Class.Public()
  @Class.Property()
  public overflowX?: Types.Overflow | Types.Default;

  /**
   * Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area
   */
  @Class.Public()
  @Class.Property()
  public overflowY?: Types.Overflow | Types.Default;

  /**
   * Sets or returns the padding of an element.
   */
  @Class.Public()
  @Class.Property()
  public padding?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the bottom padding of an element.
   */
  @Class.Public()
  @Class.Property()
  public paddingBottom?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the left padding of an element.
   */
  @Class.Public()
  @Class.Property()
  public paddingLeft?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the right padding of an element.
   */
  @Class.Public()
  @Class.Property()
  public paddingRight?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the top padding of an element.
   */
  @Class.Public()
  @Class.Property()
  public paddingTop?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the page-break behavior after an element (for printing or print preview).
   */
  @Class.Public()
  @Class.Property()
  public pageBreakAfter?: Types.PageBreak | Types.Default;

  /**
   * Sets or returns the page-break behavior before an element (for printing or print preview).
   */
  @Class.Public()
  @Class.Property()
  public pageBreakBefore?: Types.PageBreak | Types.Default;

  /**
   * Sets or returns the page-break behavior inside an element (for printing or print preview).
   */
  @Class.Public()
  @Class.Property()
  public pageBreakInside?: Types.PageBreakInside | Types.Default;

  /**
   * Defines how many pixels a 3D element is placed from the view.
   */
  @Class.Public()
  @Class.Property()
  public perspective?: Types.Perspective | Types.Default | string;

  /**
   * Sets how an element is positioned in a document.
   */
  @Class.Public()
  @Class.Property()
  public position?: Types.Position | Types.Default;

  /**
   * Sets or returns the type of quotation marks for embedded quotations.
   */
  @Class.Public()
  @Class.Property()
  public quotes?: Types.Quotes | Types.Default | string;

  /**
   * Specifies whether or not an element is resizable by the user.
   */
  @Class.Public()
  @Class.Property()
  public resize?: Types.Resize | Types.Default;

  /**
   * Sets or returns the right position of a positioned element.
   */
  @Class.Public()
  @Class.Property()
  public right?: Types.Size | Types.Default | string;

  /**
   * Sets or returns the way to lay out table cells, rows, and columns.
   */
  @Class.Public()
  @Class.Property()
  public tableLayout?: Types.TableLayout | Types.Default;

  /**
   * Specifies the length of the space used for the tab character.
   */
  @Class.Public()
  @Class.Property()
  public tabSize?: Types.Default | string;

  /**
   * Sets or returns the horizontal alignment of text in a block level element.
   */
  @Class.Public()
  @Class.Property()
  public textAlign?: Types.TextAlign | Types.Default;

  /**
   * Specifies how to align the last line of a text.
   */
  @Class.Public()
  @Class.Property()
  public textAlignLast?: Types.TextAlignLast | Types.Default;

  /**
   * Sets or returns one ore more decorations for a text.
   */
  @Class.Public()
  @Class.Property()
  public textDecoration?: Types.TextDecoration | Types.Default;

  /**
   * Specifies the color of the text-decoration (underlines, overlines, linethroughs)
   */
  @Class.Public()
  @Class.Property()
  public textDecorationColor?: Types.Default | string;

  /**
   * Sets or returns what type of line, if any, the decoration will have.
   */
  @Class.Public()
  @Class.Property()
  public textDecorationLine?: Types.TextDecorationLine | Types.Default;

  /**
   * Sets or returns how the line, if any, will display.
   */
  @Class.Public()
  @Class.Property()
  public textDecorationStyle?: Types.TextDecorationStyle | Types.Default;

  /**
   * Sets or returns the indentation of the first line of text.
   */
  @Class.Public()
  @Class.Property()
  public textIndent?: Types.Default | string;

  /**
   * Sets or returns the justification method used when text-align is "justify".
   */
  @Class.Public()
  @Class.Property()
  public textJustify?: Types.TextJustify | Types.Default;

  /**
   * Specifies what should happen when text overflows the containing element.
   */
  @Class.Public()
  @Class.Property()
  public textOverflow?: Types.TextOverflow | Types.Default | string;

  /**
   * Sets or returns one ore more shadow effects for a text.
   */
  @Class.Public()
  @Class.Property()
  public textShadow?: Types.TextShadow | Types.Default | string;

  /**
   * Sets or returns the capitalization of a text.
   */
  @Class.Public()
  @Class.Property()
  public textTransform?: Types.TextTransform | Types.Default;

  /**
   * Sets or returns the top position of a positioned element.
   */
  @Class.Public()
  @Class.Property()
  public top?: Types.Size | Types.Default | string;

  /**
   * Applies a 2D or 3D transformation to an element.
   */
  @Class.Public()
  @Class.Property()
  public transform?: Types.Transform | Types.Default | string;

  /**
   * Allows you to change the position on transformed elements.
   */
  @Class.Public()
  @Class.Property()
  public transformOrigin?: Types.Default | string;

  /**
   * Sets or returned how nested elements are rendered in 3D space.
   */
  @Class.Public()
  @Class.Property()
  public transformStyle?: Types.TransformStyle | Types.Default;

  /**
   * Is a shorthand property for the four transition properties.
   */
  @Class.Public()
  @Class.Property()
  public transition?: Types.Default | string;

  /**
   * Specifies when the transition effect will start.
   */
  @Class.Public()
  @Class.Property()
  public transitionDelay?: Types.Default | string;

  /**
   * Sets or returns how many seconds (s) or milliseconds (ms) a transition effect takes to complete.
   */
  @Class.Public()
  @Class.Property()
  public transitionDuration?: Types.Default | string;

  /**
   * Specifies the name of the CSS property the transition effect is for
   * (the transition effect will start when the specified CSS property changes).
   */
  @Class.Public()
  @Class.Property()
  public transitionProperty?: Types.TransitionProperty | Types.Default | string;

  /**
   * Specifies the speed curve of the transition effect.
   */
  @Class.Public()
  @Class.Property()
  public transitionTimingFunction?: Types.TransitionTimingFunction | Types.Default | string;

  /**
   * Is used with the direction property to set or return whether the text should be overridden to support
   * multiple languages in the same document.
   */
  @Class.Public()
  @Class.Property()
  public unicodeBidi?: Types.UnicodeBidi | Types.Default;

  /**
   * Sets or returns whether the text of an element can be selected or not.
   */
  @Class.Public()
  @Class.Property()
  public userSelect?: Types.UserSelect | Types.Default;

  /**
   * Sets or returns the vertical alignment of the content in an element.
   */
  @Class.Public()
  @Class.Property()
  public verticalAlign?: Types.VerticalAlign | Types.Default | string;

  /**
   * Sets or returns whether an element should be visible.
   */
  @Class.Public()
  @Class.Property()
  public visibility?: Types.Visibility | Types.Default;

  /**
   * Sets or returns how to handle tabs, line breaks and whitespace in a text.
   */
  @Class.Public()
  @Class.Property()
  public whiteSpace?: Types.WhiteSpace | Types.Default;

  /**
   * Sets or returns the width an element.
   */
  @Class.Public()
  @Class.Property()
  public width?: Types.Size | Types.Default | string;

  /**
   * Specifies line breaking rules for non-CJK scripts.
   */
  @Class.Public()
  @Class.Property()
  public wordBreak?: Types.WordBreak | Types.Default;

  /**
   * Sets or returns the spacing between words in a text.
   */
  @Class.Public()
  @Class.Property()
  public wordSpacing?: Types.WordSpacing | Types.Default | string;

  /**
   * Allows long words to be able to be broken and wrap onto the next line.
   */
  @Class.Public()
  @Class.Property()
  public wordWrap?: Types.WordWrap | Types.Default;

  /**
   * Sets or returns the minimum number of lines for an element that must be visible at the top of a page
   * (for printing or print preview).
   */
  @Class.Public()
  @Class.Property()
  public windows?: Types.Default | number;

  /**
   * Sets or returns the stack order of a positioned element.
   */
  @Class.Public()
  @Class.Property()
  public zIndex?: Types.ZIndex | Types.Default | number;

  /**
   * Sets or returns the element size.
   */
  @Class.Public()
  @Class.Property()
  public zoom?: Types.Default | number | string;
}
