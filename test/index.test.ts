import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import DoubleBracketMedia from '../src/index'

describe('media', () => {
  it('should parse pictures', () => {
    const md = new MarkdownIt()
    md.use(DoubleBracketMedia)
    expect(md.render('![[path/to/image.jpg]]')).toMatchInlineSnapshot(`
      "<p><img src=\\"/path/to/image.jpg\\" alt=\\"path/to/image.jpg\\"></p>
      "
    `)
  })

  it('should remove given prefix and add provided certain prefix', () => {
    const md = new MarkdownIt()
    md.use(DoubleBracketMedia, {
      removePrefix: 'public/',
      addPrefix: 'src/',
    })
    expect(md.render('![[public/avatar.png|This is avatar]]')).toMatchInlineSnapshot(`
      "<p><img src=\\"/src/avatar.png\\" alt=\\"This is avatar\\"></p>
      "
    `)
  })

  it('should parse videos and audios', () => {
    const md = new MarkdownIt()
    md.use(DoubleBracketMedia, {
      removePrefix: 'public/',
    })
    expect(md.render('![[public/src/example.mp4]]')).toMatchInlineSnapshot(`
      "<p>&lt;video controls=&quot;controls&quot; src=&quot;/src/example.mp4&quot; alt=&quot;src/example.mp4&quot; style=&quot;width: 100%; height: 100%;&quot;&gt;&lt;/video&gt;</p>
      "
    `)

    expect(md.render('![[public/src/audio.mp3]]')).toMatchInlineSnapshot(`
      "<p>&lt;audio controls=&quot;controls&quot; src=&quot;/src/audio.mp3&quot; alt=&quot;src/audio.mp3&quot;&gt;&lt;/audio&gt;</p>
      "
    `)
  })
})
