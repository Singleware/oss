"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Style class.
 */
let Style = class Style extends Class.Null {
};
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "alignContent", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "alignItems", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "alignSelf", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "all", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animation", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationDelay", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationDirection", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationDuration", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationFillMode", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationIterationCount", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationName", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationPlayState", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "animationTimingFunction", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backfaceVisibility", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "background", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundAttachment", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundBlendMode", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundClip", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundImage", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundOrigin", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundPosition", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundRepeat", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "backgroundSize", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "blockSize", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "border", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottom", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottomColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottomLeftRadius", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottomRightRadius", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottomStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderBottomWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderCollapse", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImage", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImageOutset", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImageRepeat", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImageSlice", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImageSource", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderImageWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderLeft", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderLeftColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderLeftStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderLeftWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderRadius", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderRight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderRightColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderRightStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderRightWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderSpacing", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTop", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTopColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTopLeftRadius", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTopRightRadius", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTopStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderTopWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "borderWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "bottom", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "boxDecorationBreak", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "boxShadow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "boxSizing", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "captionSide", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "clip", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "color", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnCount", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnFill", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnGap", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnRule", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnRuleColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnRuleStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnRuleWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columns", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnSpan", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "columnWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "content", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "counterIncrement", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "counterReset", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "cursor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "direction", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "display", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "emptyCells", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "filter", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flex", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexBasis", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexDirection", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexFlow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexGrow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexShrink", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "flexWrap", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "float", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "font", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontFamily", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontSize", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontSizeAdjust", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontStretch", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontVariant", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "fontWeight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "hangingPunctuation", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "height", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "hyphens", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "isolation", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "justifyContent", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "left", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "letterSpacing", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "lineHeight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "listStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "listStyleImage", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "listStylePosition", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "listStyleType", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "margin", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "marginBottom", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "marginLeft", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "marginRight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "marginTop", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "maxHeight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "maxWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "minHeight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "minWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "objectFit", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "opacity", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "order", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "orphans", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "outline", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "outlineColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "outlineOffset", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "outlineStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "outlineWidth", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "overflow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "overflowX", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "overflowY", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "padding", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "paddingBottom", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "paddingLeft", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "paddingRight", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "paddingTop", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "pageBreakAfter", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "pageBreakBefore", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "pageBreakInside", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "perspective", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "position", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "quotes", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "resize", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "right", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "tableLayout", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "tabSize", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textAlign", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textAlignLast", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textDecoration", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textDecorationColor", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textDecorationLine", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textDecorationStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textIndent", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textJustify", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textOverflow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textShadow", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "textTransform", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "top", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transform", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transformOrigin", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transformStyle", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transition", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transitionDelay", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transitionDuration", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transitionProperty", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "transitionTimingFunction", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "unicodeBidi", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "userSelect", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "verticalAlign", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "visibility", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "whiteSpace", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "width", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "wordBreak", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "wordSpacing", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "wordWrap", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "windows", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "zIndex", void 0);
__decorate([
    Class.Public(),
    Class.Property()
], Style.prototype, "zoom", void 0);
Style = __decorate([
    Class.Describe()
], Style);
exports.Style = Style;
