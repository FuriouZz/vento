---
order: 5
---

# Layout

The `{{ layout }}` tag allows to capture some content in a template and render
it into another template under the variable `content`.

For example, let's say you have the following `container.vto` template:

```vento
<div class="container">
  {{ content }}
</div>
```

You can pass content to this template easily with the `layout` tag:

```vento
{{ layout "container.vto" }}
<h1>Hello, world!</h1>
{{ /layout }}
```

Technically, the `layout` tag works a lot like the following:

```vento
{{ set content }}
<h1>Hello, world!</h1>
{{ /set }}

{{ include "container.vto" { content } }}
```

## Data

In addition to the `content` variable, the layout inherits the same data as the
main file. You can pass additional data creating an object after the layout file
name.

```vento
{{ layout "container.vto" { size: "big" } }}
<h1>Hello, world!</h1>
{{ /layout }}
```

Now, the layout content has the `size` variable:

```vento
<div class="container size-{{ size }}">
  {{ content }}
</div>
```

## Pipes

You can use [pipes](./pipes.md) to transform **the content** passed to the
layout. For example:

```vento
{{ layout "container.vto" |> toUpperCase }}
<h1>Hello, world!</h1>
{{ /layout }}
```

This code outputs:

```html
<div class="container">
	<h1>HELLO, WORLD!</h1>
</div>
```
