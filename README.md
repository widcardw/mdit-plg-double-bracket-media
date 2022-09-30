# mdit-plg-double-bracket-media

[![NPM version](https://img.shields.io/npm/v/mdit-plg-double-bracket-media?color=a1b858&label=)](https://www.npmjs.com/package/mdit-plg-double-bracket-media)

Parse `![[path/to/media]]` into html in markdown-it!

Inspired by the combination usage between [vite](https://vitejs.dev) and [Obsidian](https://obsidian.md). 

## Usage

```sh
pnpm i mdit-plg-double-bracket-media -D
```

```ts
// use this plugin in markdown-it
import DoubleBracketMedia from 'mdit-plg-double-bracket-media'

md.use(DoubleBracketMedia, {
  /**
   * (Optional) remove the prefix in the double brackets.
   * It will parse ![[public/path/to/img.jpg|img]] into
   * <img src="/path/to/img.jpg" alt="img" ... >
   */
  removePrefix: 'public/',
  /**
   * (Optional) after removing the provided prefix,
   * param `addPrefix` will be added to the front of url
   */
  addPrefix: ''
})
```


## License

[MIT](./LICENSE) License © 2022 widcardw
