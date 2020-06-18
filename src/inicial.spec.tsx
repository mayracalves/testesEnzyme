describe("1 teste inicial", () => {
  /*
  let meuObj;
	beforeEach( () => {
		meuObj = {
				mayra: 'mayra',
		}
	}) */

	/* beforeAll(() => {
		console.log("2 beforeall");
	}) */


  beforeEach(() => {
    console.log("3 teste inicial each");
  });

  /* fit("4 primeiro teste", () => {
    expect(true).toEqual(true);
  }); */

  xit("5 segundo teste", () => {
    expect(true).toEqual(true);
  });

  fdescribe("6 teste secundario", () => {
    beforeEach(() => {
      console.log("7 teste seculdario each");
    });

    it("8 terceiro teste", () => {
      expect(true).toEqual(true);
    });
  });
});
