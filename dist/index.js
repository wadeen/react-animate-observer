'use strict';

var React = require('react');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var useIntersectionObserver = function useIntersectionObserver(_a) {
  var _b = _a === void 0 ? {} : _a,
    mediaQueryWidth = _b.mediaQueryWidth,
    _largeScreenRootMargin = _b.largeScreenRootMargin,
    _smallScreenRootMargin = _b.smallScreenRootMargin,
    once = _b.once;
  // State
  var _c = React.useState(false),
    inView = _c[0],
    setInView = _c[1]; // Check if DOM is in view
  var _d = React.useState(null),
    node = _d[0],
    setNode = _d[1]; // Check and get if DOM exists
  // Ref: observer
  var observer = React.useRef(null);
  // Initial values
  var mediaQueryString = "(min-width: ".concat(mediaQueryWidth !== null && mediaQueryWidth !== void 0 ? mediaQueryWidth : 768, "px)");
  var largeScreenRootMargin = _largeScreenRootMargin !== null && _largeScreenRootMargin !== void 0 ? _largeScreenRootMargin : '-25% 0px'; // PC
  var smallScreenRootMargin = _smallScreenRootMargin !== null && _smallScreenRootMargin !== void 0 ? _smallScreenRootMargin : '-25% 0px'; // Mobile
  var onceAnimation = once !== null && once !== void 0 ? once : true;
  // Instantiate observer and set initial value
  var createObserver = function createObserver() {
    return new IntersectionObserver(function (_a) {
      var entry = _a[0];
      if (onceAnimation) {
        entry.isIntersecting && setInView(entry.isIntersecting);
      } else {
        setInView(entry.isIntersecting);
      }
    }, {
      rootMargin: window.matchMedia(mediaQueryString).matches ? largeScreenRootMargin : smallScreenRootMargin,
      threshold: 0
    });
  };
  // Set observer
  React.useEffect(function () {
    if (observer.current) observer.current.disconnect();
    observer.current = createObserver(); // add IntersectionObserver
    if (node) observer.current.observe(node);
    return function () {
      var _a;
      return (_a = observer === null || observer === void 0 ? void 0 : observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
    };
  }, [node]);
  // Update root margin on screen resize
  React.useEffect(function () {
    var updateRootMargin = function updateRootMargin() {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = createObserver(); // add IntersectionObserver
        if (node) observer.current.observe(node);
      }
    };
    updateRootMargin(); // Initialization
    // Relative to device width specified in `mediaQueryString`
    var mediaQueryList = window.matchMedia(mediaQueryString);
    mediaQueryList.addEventListener('change', updateRootMargin);
    return function () {
      return mediaQueryList.removeEventListener('change', updateRootMargin);
    };
  }, []);
  return [setNode, inView];
};

var useTransformPropsToCSS = function useTransformPropsToCSS(transition, animation) {
  var transitionProps = {};
  var transformProps = {};
  var animationProps = '';
  // Converting styles for transition
  Object.keys(transition).forEach(function (key) {
    var _a;
    var value = transition[key];
    switch (key) {
      case 'transitionDelay':
        transitionProps = __assign(__assign({}, transitionProps), {
          transitionDelay: "".concat(value, "s")
        });
        break;
      case 'transitionDuration':
        transitionProps = __assign(__assign({}, transitionProps), {
          transitionDuration: "".concat(value, "s")
        });
        break;
      default:
        transitionProps = __assign(__assign({}, transitionProps), (_a = {}, _a[key] = "".concat(value), _a));
        return;
    }
  });
  // Converting styles for animation
  Object.keys(animation).forEach(function (key) {
    var _a;
    var value = animation[key];
    switch (key) {
      // Transform props: `Self-made` because it is not in CSSProperties
      case 'translateX':
        animationProps += "translateX(".concat(value, "px) ");
        break;
      case 'translateY':
        animationProps += "translateY(".concat(value, "px) ");
        break;
      case 'translateZ':
        animationProps += "translateZ(".concat(value, "px) ");
        break;
      case 'rotateX':
        animationProps += "rotateX(".concat(value, "deg) ");
        break;
      case 'rotateY':
        animationProps += "rotateY(".concat(value, "deg) ");
        break;
      case 'rotateZ':
        animationProps += "rotateZ(".concat(value, "deg) ");
        break;
      case 'skewX':
        animationProps += "skewX(".concat(value, "deg) ");
        break;
      case 'skewY':
        animationProps += "skewY(".concat(value, "deg) ");
        break;
      case 'scaleX':
        animationProps += "scaleX(".concat(value, ") ");
        break;
      case 'scaleY':
        animationProps += "scaleY(".concat(value, ") ");
        break;
      case 'scaleZ':
        animationProps += "scaleZ(".concat(value, ") ");
        break;
      // Default style props
      default:
        transformProps = __assign(__assign({}, transformProps), (_a = {}, _a[key] = "".concat(value), _a));
        return;
    }
  });
  transformProps = __assign(__assign({}, transformProps), {
    transform: animationProps.trim()
  });
  return __assign(__assign({}, transitionProps), transformProps);
};

/**
 * ScrollAnimator component. This component is used to animate its children on scroll.
 * It observes whether its root element is in the viewport and applies the appropriate
 * CSS transformation based on its `start` and `end` properties.
 *
 * @param {ScrollAnimatorProps} props The properties of the ScrollAnimator.
 * @returns {React.ReactElement} The rendered ScrollAnimator component.
 */
var ScrollAnimator = function ScrollAnimator(_a) {
  var children = _a.children,
    _b = _a.start,
    start = _b === void 0 ? {
      opacity: 0,
      translateY: 30
    } : _b,
    _c = _a.end,
    end = _c === void 0 ? {
      opacity: 1,
      translateY: 0
    } : _c,
    _d = _a.transition,
    transition = _d === void 0 ? {
      transitionDelay: 0.1,
      transitionDuration: 0.4,
      transitionTimingFunction: 'ease-in'
    } : _d,
    _e = _a.as,
    as = _e === void 0 ? 'div' : _e,
    _f = _a.customStyle,
    customStyle = _f === void 0 ? false : _f,
    props = __rest(_a, ["children", "start", "end", "transition", "as", "customStyle"]);
  /**
   * Options passed to the `IntersectionObserver`
   */
  var _g = useIntersectionObserver({
      mediaQueryWidth: 768,
      largeScreenRootMargin: '-35% 0px',
      smallScreenRootMargin: '-25% 0px',
      once: true
    }),
    ref = _g[0],
    inView = _g[1]; // ref = setNode
  var Tag = as;
  var _h = React.useState(useTransformPropsToCSS(transition, start)),
    inlineStyle = _h[0],
    setInlineStyle = _h[1];
  // Monitor `inView` and convert styles
  React.useEffect(function () {
    var animation = inView ? end : start;
    var transformProps = useTransformPropsToCSS(transition, animation);
    setInlineStyle(transformProps);
  }, [inView]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, customStyle ? /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    "data-is-active": inView
  }, props), children) : /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: inlineStyle,
    "data-is-active": inView
  }, props), children));
};

exports.ScrollAnimator = ScrollAnimator;
