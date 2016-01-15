describe('parser', function() {
  var parser = window.JourneyConditionParser;

  it("should defined a global var for the module (browserify is setup correctly)", function() {
    expect(parser).toBeDefined();
    expect(typeof parser.parse).toBe("function");
  });

  it("should parse simple number comparation", function() {
    var result = parser.parse("length >= 5");
    expect(result.left).toEqual({ type: 'field', text: 'length' });
    expect(result.op).toEqual('>=');
    expect(result.right).toEqual({type: 'literal', text: '5' });
  });
});
