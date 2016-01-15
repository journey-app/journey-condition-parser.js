describe('parser', function() {
  var parser = window.JourneyConditionParser;

  it("should defined a global var for the module (browserify is setup correctly)", function() {
    expect(parser).toBeDefined();
    expect(typeof parser.parse).toBe("function");
  });

  it("parses simple number comparation", function() {
    var result = parser.parse("length >= 5");
    expect(result.left).toEqual({ type: 'field', text: 'length' });
    expect(result.op).toEqual('>=');
    expect(result.right).toEqual({type: 'literal_number', text: '5' });
  });

  it("parses composed field expression", function() {
    var result = parser.parse("start_at - user.start_active_at = 1000");
    expect(result.left).toEqual({
      type: 'expr',
      text: 'start_at-user.start_active_at',
      op: '-',
      left: {
        type: 'field',
        text: 'start_at'
      },

      right: {
        type: 'field',
        text: 'user.start_active_at'
      }
    });

    expect(result.op).toEqual('=');
    expect(result.right).toEqual({
      type: 'literal_number',
      text: '1000'
    })
  });
});
