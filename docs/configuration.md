---
order: 2
---

# Configuration

## Options

Pass an options object to the `vento()` function to customize Vento.

```js
// Example with the default options:
const env = vento({
  dataVarname: "it",
  autoDataVarname: true,
  includes: Deno.cwd(),
  autoescape: false,
});
```

### dataVarname

Vento provides the `it` variable with all data available in the template. For
example:

```vento
{{ it.title }}
```

The `dataVarname` option allows changing the name of this variable.

```js
const env = vento({
  dataVarname: "global",
});
```

Now you can use the `global` variable:

```vento
{{ global.title }}
```

### autoDataVarname

Vento can append automatically the `dataVarname` prefix (which by default is `.it`) to any variable that need it. For example, instead of
`{{ it.title }}` you can simply write `{{ title }}` and vento automatically convert it to `{{ it.title }}`.

You can disable this behavior by setting the `autoDataVarname` option to `false`:

```js
const env = vento({
  autoDataVarname: false,
});
```

> [!warning]
>
> The `useWith` option is an alias for backward compatibility ([when `with` was used](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)) but it will be removed in the future.

### autoescape

Set `true` to automatically escape printed variables:

```js
const env = vento({
  autoescape: true,
});

const result = env.runString("{{ title }}", {
  title: "<h1>Hello, world!</h1>",
});
// &lt;h1&gt;Hello, world!&lt;/h1&gt;

// Like in Nunjucks, you can use the `safe` filter for trusted content:
const result = env.runString("{{ title |> safe }}", {
  title: "<h1>Hello world</h1>",
});
// <h1>Hello world</h1>
```

### includes

The path of the directory that Vento will use to look for includes templates.

## Filters

Filters are custom functions to transform the content.

For example, let's create a function to make text italic:

```js
function italic(text: string) {
  return `<em>${text}</em>`;
}
```

And we can register that with Vento:

```js
env.filters.italic = italic;
```

Now you can use this filter anywhere:

```vento
<p>Welcome to {{ title |> italic }}</p>
```
