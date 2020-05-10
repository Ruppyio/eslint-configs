'use strict';

/**
 * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 */
module.exports = {
  rules: {
    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': 'off',

    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 'off',

    // Enforce all defaultProps are defined and not "required" in propTypes.
    'react/default-props-match-prop-types': 'off',

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': 'off',

    // Prevent missing displayName in a React component definition
    'react/display-name': 'error',

    // Forbid certain props on components
    'react/forbid-component-props': 'off',

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 'off',

    // Forbid certain elements
    'react/forbid-elements': 'off',

    // Forbid using another component's propTypes
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Forbid certain propTypes
    'react/forbid-prop-types': 'off',

    // Standardize the way function component get defined (fixable)
    'react/function-component-definition': 'off',

    // Reports when this.state is accessed within setState
    'react/no-access-state-in-setstate': 'off',

    // Prevent adjacent inline elements not separated by whitespace.
    'react/no-adjacent-inline-elements': 'off',

    // Prevent usage of Array index in keys
    'react/no-array-index-key': 'off',

    // Prevent passing of children as props.
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX props
    'react/no-danger': 'warn',

    // Report when a DOM element is using both children and dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'off',

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': 'off',

    // Flag shouldComponentUpdate when extending PureComponent
    'react/no-redundant-should-component-update': 'off',

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'off',

    // Prevent string definitions for references and prevent referencing this.refs
    'react/no-string-refs': 'error',

    // Report "this" being used in stateless components
    'react/no-this-in-sfc': 'off',

    // Prevent common typos
    'react/no-typos': 'error',

    // Detect unescaped HTML entities, which might represent malformed tags
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': 'error',

    // Prevent usage of unsafe lifecycle methods
    'react/no-unsafe': 'off',

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'off',

    // Prevent definition of unused state fields
    'react/no-unused-state': 'off',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'off',

    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'off',

    // Require read-only props. (fixable)
    'react/prefer-read-only-props': 'off',

    // Enforce stateless components to be written as a pure function
    'react/prefer-stateless-function': 'off',

    // Prevent missing props validation in a React component definition
    'react/prop-types': 'error',

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop.
    'react/require-default-props': 'off',

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children (fixable)
    'react/self-closing-comp': 'off',

    // Enforce component methods order
    'react/sort-comp': 'off',

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'off',

    // State initialization in an ES6 class component should be in a constructor
    'react/state-in-constructor': 'off',

    // Defines where React component static properties should be positioned.
    'react/static-property-placement': 'off',

    // Enforce style prop value is an object
    'react/style-prop-object': 'warn',

    // Prevent passing of children to void DOM elements (e.g. <br />).
    'react/void-dom-elements-no-children': 'off',
  },
};
