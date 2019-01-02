/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

/**
 * Common types for any property.
 */
type Default = 'initial' | 'inherit' | 'unset';

/**
 * Common types for size properties.
 */
type Size = 'auto';

/**
 * Common types for max size properties.
 */
type MaxSize = 'none';

/**
 * Common types for align content property.
 */
type AlignContent = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';

/**
 * Common types for align items property.
 */
type AlignItems = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';

/**
 * Common types for align self property.
 */
type AlignSelf = 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';

/**
 * Common types for all property.
 */
type All = 'revert';

/**
 * Common types for animation direction property.
 */
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

/**
 * Common types for animation fill mode property.
 */
type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';

/**
 * Common types for animation iteration count property.
 */
type AnimationIterationCount = 'infinite';

/**
 * Common types for animation fill mode property.
 */
type AnimationName = 'none';

/**
 * Common types for animation play state property.
 */
type AnimationPlayState = 'running' | 'paused';

/**
 * Common types for animation timing function property.
 */
type AnimationTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out';

/**
 * Common types for backface visibility property.
 */
type BackfaceVisibility = 'visible' | 'hidden';

/**
 * Common types for background attachment property.
 */
type BackgroundAttachment = 'scroll' | 'fixed' | 'local';

/**
 * Common types for background blend mode property.
 */
type BackgroundBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

/**
 * Common types for background clip property.
 */
type BackgroundClip = 'padding-box' | 'border-box' | 'content-box';

/**
 * Common types for background color property.
 */
type BackgroundColor = 'transparent';

/**
 * Common types for background image property.
 */
type BackgroundImage = 'none';

/**
 * Common types for background origin property.
 */
type BackgroundOrigin = 'padding-box' | 'border-box' | 'content-box';

/**
 * Common types for background position property.
 */
type BackgroundPosition =
  | 'top left'
  | 'top center'
  | 'top right'
  | 'center left'
  | 'center center'
  | 'center right'
  | 'bottom left'
  | 'bottom center'
  | 'bottom right';

/**
 * Common types for background repeat property.
 */
type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

/**
 * Common types for background size property.
 */
type BackgroundSize = 'auto' | 'cover' | 'contain';

/**
 * Common types for block size property.
 */
type BlockSize = 'auto' | 'max-content' | 'min-content' | 'available' | 'fit-content';

/**
 * Common types for border color properties.
 */
type BorderColor = 'transparent';

/**
 * Common types for border width properties.
 */
type BorderWidth = 'thin' | 'medium' | 'thick';

/**
 * Common types for border style properties.
 */
type BorderStyle = 'auto' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

/**
 * Common types for border collapse property.
 */
type BorderCollapse = 'separate' | 'collapse';

/**
 * Common types for border image repeat property.
 */
type BorderImageRepeat = 'stretch' | 'repeat' | 'round';

/**
 * Common types for border image slice property.
 */
type BorderImageSlice = 'fill';

/**
 * Common types for border image source property.
 */
type BorderImageSource = 'none';

/**
 * Common types for border image width property.
 */
type BorderImageWidth = 'auto';

/**
 * Common types for box decoration break property.
 */
type BoxDecorationBreak = 'slice' | 'clone';

/**
 * Common types for box shadow property.
 */
type BoxShadow = 'none';

/**
 * Common types for box sizing property.
 */
type BoxSizing = 'content-box' | 'border-box';

/**
 * Common types for caption side property.
 */
type CaptionSide = 'top' | 'bottom';

/**
 * Common types for clip property.
 */
type Clip = 'auto';

/**
 * Common types for color property.
 */
type Color = 'transparent';

/**
 * Common types for column count property.
 */
type ColumnCount = 'auto';

/**
 * Common types for column fill property.
 */
type ColumnFill = 'auto' | 'balanced';

/**
 * Common types for column gap property.
 */
type ColumnGap = 'normal';

/**
 * Common types for columns property.
 */
type Columns = 'auto';

/**
 * Common types for column span property.
 */
type ColumnSpan = 'all';

/**
 * Common types for column width property.
 */
type ColumnWidth = 'auto';

/**
 * Common types for content property.
 */
type Content = 'none' | 'normal' | 'open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote';

/**
 * Common types for counter increment property.
 */
type CounterIncrement = 'none';

/**
 * Common types for counter reset property.
 */
type CounterReset = 'none';

/**
 * Common types for cursor property.
 */
type Cursor =
  | 'alias'
  | 'all-scroll'
  | 'auto'
  | 'cell'
  | 'context-menu'
  | 'col-resize'
  | 'copy'
  | 'crosshair'
  | 'default'
  | 'e-resize'
  | 'ew-resize'
  | 'help'
  | 'move'
  | 'n-resize'
  | 'ne-resize'
  | 'nesw-resize'
  | 'ns-resize'
  | 'nw-resize'
  | 'nwse-resize'
  | 'no-drop'
  | 'none'
  | 'not-allowed'
  | 'pointer'
  | 'progress'
  | 'row-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'text'
  | 'vertical-text'
  | 'w-resize'
  | 'wait'
  | 'zoom-in'
  | 'zoom-out';

/**
 * Common types for direction property.
 */
type Direction = 'ltr' | 'rtl';

/**
 * Common types for display property.
 */
type Display =
  | 'block'
  | 'compact'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-table'
  | 'list-item'
  | 'marker'
  | 'none'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row'
  | 'table-row-group';

/**
 * Common types for empty cells property.
 */
type EmptyCells = 'show' | 'hide';

/**
 * Common types for filter property.
 */
type Filter = 'none';

/**
 * Common types for flex property.
 */
type Flex = 'none' | 'auto';

/**
 * Common types for flex basis property.
 */
type FlexBasis = 'auto';

/**
 * Common types for flex direction property.
 */
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Common types for flex grow property.
 */
type FlexGrow = 'auto';

/**
 * Common types for flex shrink property.
 */
type FlexShrink = 'auto';

/**
 * Common types for flex wrap property.
 */
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * Common types for float property.
 */
type Float = 'left' | 'right' | 'none';

/**
 * Common types for font property.
 */
type Font = 'caption' | 'icon' | 'menu' | 'message-box' | 'small-caption' | 'status-bar';

/**
 * Common types for font size property.
 */
type FontSize = 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'smaller' | 'larger';

/**
 * Common types for font size adjust property.
 */
type FontSizeAdjust = 'none';

/**
 * Common types for font stretch property.
 */
type FontStretch =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded';

/**
 * Common types for font style property.
 */
type FontStyle = 'normal' | 'italic' | 'oblique';

/**
 * Common types for font variant property.
 */
type FontVariant = 'normal' | 'small-caps';

/**
 * Common types for font weight property.
 */
type FontWeight = 'normal' | 'lighter' | 'bold' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

/**
 * Common types for hanging punctuation property.
 */
type HangingPunctuation = 'none' | 'first' | 'last' | 'allow-end' | 'force-end';

/**
 * Common types for hyphens property.
 */
type Hyphens = 'none' | 'manual' | 'auto';

/**
 * Common types for isolation property.
 */
type Isolation = 'auto' | 'isolate';

/**
 * Common types for justify content property.
 */
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

/**
 * Common types for letter spacing property.
 */
type LetterSpacing = 'normal';

/**
 * Common types for line height property.
 */
type LineHeight = 'normal';

/**
 * Common types for list style image property.
 */
type ListStyleImage = 'none';

/**
 * Common types for list style position property.
 */
type ListStylePosition = 'outside' | 'inside';

/**
 * Common types for list style type property.
 */
type ListStyleType =
  | 'armenian'
  | 'circle'
  | 'cjk-ideographic'
  | 'decimal'
  | 'decimal-leading-zero'
  | 'disc'
  | 'georgian'
  | 'hebrew'
  | 'hiragana'
  | 'hiragana-iroha'
  | 'katakana'
  | 'katakana-iroha'
  | 'lower-alpha'
  | 'lower-greek'
  | 'lower-latin'
  | 'lower-roman'
  | 'none'
  | 'square'
  | 'upper-alpha'
  | 'upper-latin'
  | 'upper-roman';

/**
 * Common types for object fit property.
 */
type ObjectFit = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';

/**
 * Common types for outline color property.
 */
type OutlineColor = 'invert';

/**
 * Common types for overflow property.
 */
type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto';

/**
 * Common types for page break properties.
 */
type PageBreak = 'auto' | 'always' | 'avoid' | 'left' | 'right' | '';

/**
 * Common types for page break inside property.
 */
type PageBreakInside = 'auto' | 'avoid';

/**
 * Common types for perspective property.
 */
type Perspective = 'none';

/**
 * Common types for position property.
 */
type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

/**
 * Common types for quotes property.
 */
type Quotes = 'none';

/**
 * Common types for resize property.
 */
type Resize = 'none' | 'both' | 'horizontal' | 'vertical';

/**
 * Common types for table layout property.
 */
type TableLayout = 'auto' | 'fixed';

/**
 * Common types for text align property.
 */
type TextAlign = 'left' | 'right' | 'center' | 'justify';

/**
 * Common types for text align last property.
 */
type TextAlignLast = 'auto' | 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';

/**
 * Common types for text decoration property.
 */
type TextDecoration = 'none' | 'underline' | 'overline' | 'line-through' | 'blink';

/**
 * Common types for text decoration line property.
 */
type TextDecorationLine = 'none' | 'underline' | 'overline' | 'line-through';

/**
 * Common types for text decoration style property.
 */
type TextDecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';

/**
 * Common types for text justify property.
 */
type TextJustify = 'auto' | 'inter-word' | 'inter-character' | 'none';

/**
 * Common types for text overflow property.
 */
type TextOverflow = 'clip' | 'ellipsis';

/**
 * Common types for text shadow property.
 */
type TextShadow = 'none';

/**
 * Common types for text transform property.
 */
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

/**
 * Common types for transform property.
 */
type Transform = 'none';

/**
 * Common types for transform style property.
 */
type TransformStyle = 'flat' | 'preserve-3d';

/**
 * Common types for transition property.
 */
type TransitionProperty = 'none' | 'all';

/**
 * Common types for transition timing function property.
 */
type TransitionTimingFunction = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

/**
 * Common types for unicode bidi property.
 */
type UnicodeBidi = 'normal' | 'embed' | 'bidi-override';

/**
 * Common types for user select property.
 */
type UserSelect = 'auto' | 'none' | 'text' | 'all';

/**
 * Common types for vertical align property.
 */
type VerticalAlign = 'baseline' | 'sub' | 'super' | 'top' | 'text-top' | 'middle' | 'bottom' | 'text-bottom';

/**
 * Common types for visibility property.
 */
type Visibility = 'visible' | 'hidden' | 'collapse';

/**
 * Common types for white space property.
 */
type WhiteSpace = 'normal' | 'nowrap' | 'pre';

/**
 * Common types for word break property.
 */
type WordBreak = 'normal' | 'break-all' | 'keep-all';

/**
 * Common types for word spacing property.
 */
type WordSpacing = 'normal';

/**
 * Common types for word wrap property.
 */
type WordWrap = 'normal' | 'break-word';

/**
 * Common types for z index property.
 */
type ZIndex = 'auto';
