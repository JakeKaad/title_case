describe('titleCase', function() {
  it( "capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("fails when argument isn't a string", function() {
    expect(titleCase(1)).to.equal("Please enter a word.");
  });

  it("returns both words capitalize when two words are entered", function() {
    expect(titleCase("happy birthday")).to.equal("Happy Birthday");
  });

  it("capitalizes 'the' at the beginning of a title", function(){
    expect(titleCase("the blob")).to.equal("The Blob");
  });

  it("doesn't capitalize 'the', 'and', 'or' or 'of'", function(){
    expect(titleCase("rough and tumble: the story of fact or fiction")).to.equal("Rough and Tumble: the Story of Fact or Fiction");
  });

  it("titleizes words that are entered in all caps", function() {
    expect(titleCase("HELLO DOLLY")).to.equal("Hello Dolly");
  });

  it("titleizes words that are entered with a mix of capitalization", function(){
    expect(titleCase("hEy DudE")).to.equal("Hey Dude");
  });
});
