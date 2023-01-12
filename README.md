[![npm][npm-badge]][npm-badge-url]

# Rindo Router

A simple router, inspired by React Router v4, for Rindo apps and vanilla Web Component apps.

```jsx
<rindo-router>
  <rindo-route-switch scrollTopOffset={0}>
    <rindo-route url="/" component="landing-page" exact={true} />
    <rindo-route url="/demos" component="demos-page" />
    <rindo-route url="/other" component="other-page" />
    <rindo-route component="page-not-found" />
  </rindo-route-switch>
</rindo-router>
```

[npm-badge]: https://img.shields.io/npm/v/@rindo-community/router.svg
[npm-badge-url]: https://www.npmjs.com/package/@rindo-community/router
