import {expect, test} from '@oclif/test'

describe('grab-url', () => {
  test
  .stdout()
  .command(['grab-url'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['grab-url', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
