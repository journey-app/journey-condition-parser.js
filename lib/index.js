var antlr4 = require('antlr4');
var Parser = require('./gen/JourneyConditionParser').JourneyConditionParser;
var Lexer = require('./gen/JourneyConditionLexer').JourneyConditionLexer;

// given expression context return expression
function visit(ctx) {
  if(ctx.field_name() != null) {
    return { type: 'field', text:ctx.getText() };
  }

  if (ctx.literal_value() != null) {
    if (ctx.literal_value().INT_LITERAL() || ctx.literal_value().FLOAT_LITERAL()) {
      return { type: 'literal_number', text: ctx.getText() };
    } else {
      return { type: 'literal_string', text: ctx.getText() };
    }
  }

  if (ctx.expr(0) != null) {
    if (ctx.arithmetic_op1()) {
      return {
        type: 'expr',
        left: visit(ctx.expr(0)),
        op: ctx.arithmetic_op1().getText(),
        right: visit(ctx.expr(1)),
        text: ctx.getText()
      };
    } else {
      return {
        type: 'expr',
        left: visit(ctx.expr(0)),
        op: ctx.arithmetic_op2().getText(),
        right: visit(ctx.expr(1)),
        text: ctx.getText()
      };
    }
  }
}



module.exports = exports = {
  parse: function(str) {
    var chars = new antlr4.InputStream(str);
    var lexer = new Lexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new Parser(tokens);
    var ctx = parser.condition();
    return {
      left: visit(ctx.expr(0)),
      op: ctx.rel_op().getText(),
      right: visit(ctx.expr(1))
    };
  }
};
