'use strict';

/**
 * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
 */
module.exports = {
  rules: {
    // [Deprecated] Enforce emojis are wrapped in `<span>` and provide screenreader access.
    // 'jsx-a11y/accessible-emoji': 'error',

    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
    'jsx-a11y/alt-text': 'error',

    // Enforce all anchors to contain accessible content.
    'jsx-a11y/anchor-has-content': 'error',

    // Enforce all anchors are valid, navigable elements.
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Enforce elements with aria-activedescendant are tabbable.
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    // Enforce all `aria-*` props are valid.
    'jsx-a11y/aria-props': 'error',

    // Enforce ARIA state and property values are valid.
    'jsx-a11y/aria-proptypes': 'error',

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],

    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    'jsx-a11y/aria-unsupported-elements': 'error',

    // Enforce that autocomplete attributes are used correctly.
    'jsx-a11y/autocomplete-valid': 'off',

    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    'jsx-a11y/click-events-have-key-events': 'error',

    // Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
    'jsx-a11y/heading-has-content': 'error',

    // Enforce `<html>` element has `lang` prop.
    'jsx-a11y/html-has-lang': 'error',

    // Enforce iframe elements have a title attribute.
    'jsx-a11y/iframe-has-title': 'error',

    // Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
    'jsx-a11y/img-redundant-alt': 'error',

    // Enforce that elements with interactive handlers like `onClick` must be focusable.
    'jsx-a11y/interactive-supports-focus': 'error',

    // Enforce that a `label` tag has a text label and an associated control.
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],

    // Enforce lang attribute has a valid value.
    'jsx-a11y/lang': 'error',

    // Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
    'jsx-a11y/media-has-caption': 'error',

    // Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
    'jsx-a11y/no-access-key': 'error',

    // Enforce autoFocus prop is not used.
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    // Enforce distracting elements are not used.
    'jsx-a11y/no-distracting-elements': 'error',

    // Interactive elements should not be assigned non-interactive roles.
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],

    // Non-interactive elements should not be assigned mouse or keyboard event listeners.
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    // Non-interactive elements should not be assigned interactive roles.
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // `tabIndex` should only be declared on interactive elements.
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],

    // Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
    'jsx-a11y/no-onchange': 'off',

    // Enforce explicit role property is not the same as implicit/default role property on element.
    'jsx-a11y/no-redundant-roles': 'error',

    // Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    // Enforce that elements with ARIA roles must have all required attributes for that `role`.
    'jsx-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that role.
    'jsx-a11y/role-supports-aria-props': 'error',

    // Enforce `scope` prop is only used on `<th>` elements.
    'jsx-a11y/scope': 'error',

    // Enforce `tabIndex` value is not greater than zero.
    'jsx-a11y/tabindex-no-positive': 'off',

    // Enforce that a control (an interactive element) has a text label.
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: ['label'],
        controlComponents: [],
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],
  },
};
