<h1 align="center">🕸 Web Window</h1>
<p align="center">Open a website as a standalone window with Deno


<p align="center">
  <img src="https://img.shields.io/badge/Made%20With-Deno-black?style=flat-square&" alt="Made with Deno" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="Make a PR" />
  <img src="https://img.shields.io/github/license/ninest/web-window?style=flat-square" alt="MIT" />

  <a href="https://www.buymeacoffee.com/ninest">
    <img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?style=flat-square" alt="Buy Me A Coffee">
  </a>
</p>

<p align="center"><img alt="Demo" width="500" src="./readme-assets/demo-new.png" /><p>

This app uses [deno_webview](https://github.com/eliassjogreen/deno_webview) and [denomander](https://github.com/siokas/denomander).

## 🚀 Features
- [x] Open a website (and specify title, resizable, and fullscreen)
- [ ] Set toolbar color
- [ ] Install "executable", so website can be opened as an app without using command-line

## 🌏 Options
To open a website as a window, run 

```
deno run -A --unstable https://cdn.jsdelivr.net/gh/ninest/web-window/src/mod.ts open https://github.com/ninest
```

Note: jsdelivr is used over raw.githubusercontent.com because it is shorter and faster.

There are a few more options:

- `--fullscreen`: Open the window in fullscreen
- `--title <string>`: Set the window's title, to show in the toolbar
- `--resizable <bool>`: Whether the window should be resizable (defaults to true)

`-f`, `-t <string>`, and `-r <bool>` can also be used.

### Examples
```
# Open my github profile in a window with a title "Ninest"
deno run -A --unstable https://cdn.jsdelivr.net/gh/ninest/web-window/src/mod.ts open https://github.com/ninest --title "Ninest" 

# Open youtube in fullscreen with no title
deno run -A --unstable https://cdn.jsdelivr.net/gh/ninest/web-window/src/mod.ts open http://youtube.com/ --fullscreen
```
(no need to download anything to run these examples)

To see a list of all options/commands, run 
```
deno run -A --unstable https://cdn.jsdelivr.net/gh/ninest/drink-if-exists/src/mod.ts --help
```

## 👟 Running as an app
### Mac
Create a file `app.command` with the following:

```
#!/bin/sh

deno run -A --unstable https://cdn.jsdelivr.net/gh/ninest/web-window/src/mod.ts open https://github.com/ninest
```
(see the file `example-app.command`)

If you don't have priviledges to open the file, open Terminal and enter the command

```
chmod u+x app.command 
```

Now open `app.command` (double-click it in Finder)

## 🛠 Build setup
Clone or fork the repository, then run 
```
deno run -A --unstable index.ts open https://github.com/ninest
```

## 😱 Issues and limitations
- Non-resiable windows cannot be put into fullscreen
- `WebView.setColor` doesn't seem to work on Mac OS. When this is fixed, `--color` can be added

## 📜 License
MIT