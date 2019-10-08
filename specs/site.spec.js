describe('homepage', () => {
  beforeEach(async () => {
    await page.goto('http://127.0.0.1:5000/')
  })

  it('display', async () => {
    await expect(page).toMatchElement('#site-title')
  })

  it('language switch works', async () => {
    await page.hover('.language-switch .bp3-popover-target')
    await page.waitFor('.language-switch .bp3-popover-open')
    await page.waitFor(500) // possible animations

    await page.click('.language-switch-item[data-testid="ja"]')
  })
})

describe('post', () => {
  it('displays posts', async () => {
    await page.goto('http://127.0.0.1:5000/blog/2015-01-17-juzhen-fangsong/')
    await page.waitFor(300) // i18n may take some time
  })
})
