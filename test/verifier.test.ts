import Verifier from '../src';


describe("Verifier Empty Test", () => {
  it('works', async () => {
    const verify = new Verifier({appShared: ''});
    await expect(verify.verifiy("test")).rejects.toThrow(Error)
  })
})
