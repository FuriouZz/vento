---
order: 3
---

# Editor Integrations

## Visual Studio Code

The
[Vento for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=oscarotero.vento-syntax)
extension enables syntax highlighting and provides some useful snippets.

[**Quick Install**](vscode:extension/oscarotero.vento-syntax){.button .is-secondary}

### Open VSX Registry

[Vento plugin is also available in Open VSX](https://open-vsx.org/extension/oscarotero/vento-syntax).

## Neovim

Vento syntax highlighting is available for Neovim through [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter).

To use it, add the "vento" filetype

```js
vim.filetype.add({
    extension = {
        vto = "vento",
    }
})
```

And install the "vento" parser with `TSInstall`, or add it to the `ensure_installed` list in the `setup` function.

It's also recommended to install "javascript" and "html" parsers to get better syntax highlighting inside vento files.

```js
require("nvim-treesitter.configs").setup({
    ensure_installed = { "vento", "html", "javascript", "..." },
})
```

## Zed

The
[Vento extension for Zed](https://github.com/dz4k/zed-vento)
provides syntax highlighting. It can be installed from the Zed
[extensions gallery](https://zed.dev/docs/extensions/installing-extensions).
