import {expect, test} from '@oclif/test'

describe('change-theme', () => {
  test
  .stdout()
  .command(['change-theme'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['change-theme', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
