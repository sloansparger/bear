import {expect, test} from '@oclif/test'

describe('rename-tag', () => {
  test
  .stdout()
  .command(['rename-tag'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['rename-tag', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
