// Generated from ../journey-neo4j-plugin/src/main/antlr4/com/thoughtworks/studios/journey/jql/conditions/JourneyCondition.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by JourneyConditionParser.
function JourneyConditionListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JourneyConditionListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JourneyConditionListener.prototype.constructor = JourneyConditionListener;

// Enter a parse tree produced by JourneyConditionParser#condition.
JourneyConditionListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#condition.
JourneyConditionListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#rel_op.
JourneyConditionListener.prototype.enterRel_op = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#rel_op.
JourneyConditionListener.prototype.exitRel_op = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#expr.
JourneyConditionListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#expr.
JourneyConditionListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#arithmetic_op1.
JourneyConditionListener.prototype.enterArithmetic_op1 = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#arithmetic_op1.
JourneyConditionListener.prototype.exitArithmetic_op1 = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#arithmetic_op2.
JourneyConditionListener.prototype.enterArithmetic_op2 = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#arithmetic_op2.
JourneyConditionListener.prototype.exitArithmetic_op2 = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#field_name.
JourneyConditionListener.prototype.enterField_name = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#field_name.
JourneyConditionListener.prototype.exitField_name = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#any_name.
JourneyConditionListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#any_name.
JourneyConditionListener.prototype.exitAny_name = function(ctx) {
};


// Enter a parse tree produced by JourneyConditionParser#literal_value.
JourneyConditionListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by JourneyConditionParser#literal_value.
JourneyConditionListener.prototype.exitLiteral_value = function(ctx) {
};



exports.JourneyConditionListener = JourneyConditionListener;