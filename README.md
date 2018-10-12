# nvim-jq - use jq within Neovim 


## Install 

### Install using [vim-plug](https://github.com/junegunn/vim-plug)

In `~/.config/nvim/init.vim`, add:

    call plug#begin('~/.config/nvim/plugged')

    function! NvimNodeUpdate(args)
        !npm install 
            " npm could also be yarn or pnpm
        UpdateRemotePlugins
    endfunction

    Plug 'yanick/nvim-jq', { 'do': function('NvimNodeUpdate') }

    call plug#end()

Then, still within neovim, unleash `plugged`:

    :PlugInstall 

That (hopefully) is it. Enjoy!

## Usage

The plugin offers two functions: `JQquery` and `JQfilter`, as well as 
some mappings for `*.jq` files.

### JQquery 

    :call JQquery( '.[] | .foo' )

Meant to be called from within a `json` file, it'll replace
the content of the buffer with the result of a call to `jq` with the 
provided filter.

If no argument is provided to `JQquery`, the plugin will interactiverely ask 
for it. 

If many arguments are provided, they will be joined with `|`s.

    :call JQquery( '.[]', '.foo' )
    " equivalent to
    :call JQquery( '.[] | .foo' )

### JQfilter 

    :call JQfilter()

When called, `JQfilter` expects to find a buffer with a `*.jq` filename, as
well as a json file. It'll take the content of the `.jq` file (stripping the
carriage returns) as the jq query, filter the json document with it and output
the result in a third buffer. If the name of the json document is `foo.json`, 
the name of the filtered output buffer will be `foo.filtered.json`.

### Mappings for `*.jq` files
 
 `*.jq` files are assigned the `jq` filetype.

In the `jq` files, leaving `insert` mode automatically calls `JQfilter`.
