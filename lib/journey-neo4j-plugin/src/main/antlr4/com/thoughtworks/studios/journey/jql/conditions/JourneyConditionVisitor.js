// Generated from ../journey-neo4j-plugin/src/main/antlr4/com/thoughtworks/studios/journey/jql/conditions/JourneyCondition.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JourneyConditionParser.

function JourneyConditionVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JourneyConditionVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JourneyConditionVisitor.prototype.constructor = JourneyConditionVisitor;

// Visit a parse tree produced by JourneyConditionParser#condition.
JourneyConditionVisitor.prototype.visitCondition = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#rel_op.
JourneyConditionVisitor.prototype.visitRel_op = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#expr.
JourneyConditionVisitor.prototype.visitExpr = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#arithmetic_op1.
JourneyConditionVisitor.prototype.visitArithmetic_op1 = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#arithmetic_op2.
JourneyConditionVisitor.prototype.visitArithmetic_op2 = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#field_name.
JourneyConditionVisitor.prototype.visitField_name = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#any_name.
JourneyConditionVisitor.prototype.visitAny_name = function(ctx) {
};


// Visit a parse tree produced by JourneyConditionParser#literal_value.
JourneyConditionVisitor.prototype.visitLiteral_value = function(ctx) {
};



exports.JourneyConditionVisitor = JourneyConditionVisitor;