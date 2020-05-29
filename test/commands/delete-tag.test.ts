import {expect, test} from '@oclif/test'

describe('delete-tag', () => {
  test
  .stdout()
  .command(['delete-tag'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete-tag', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
