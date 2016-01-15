// Generated from ../journey-neo4j-plugin/src/main/antlr4/com/thoughtworks/studios/journey/jql/conditions/JourneyCondition.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JourneyConditionListener = require('./JourneyConditionListener').JourneyConditionListener;
var JourneyConditionVisitor = require('./JourneyConditionVisitor').JourneyConditionVisitor;

var grammarFileName = "JourneyCondition.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001b?\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004\u001d\n\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004*\n\u0004\f\u0004\u000e\u0004-\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b;\n\b\u0003\t\u0003",
    "\t\u0003\t\u0002\u0003\u0006\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002",
    "\u0006\u0004\u0002\u0003\f\u0016\u0016\u0003\u0002\u000e\u000f\u0003",
    "\u0002\u0010\u0012\u0003\u0002\u0018\u001a<\u0002\u0012\u0003\u0002",
    "\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002",
    "\u0002\u0002\b.\u0003\u0002\u0002\u0002\n0\u0003\u0002\u0002\u0002\f",
    "2\u0003\u0002\u0002\u0002\u000e:\u0003\u0002\u0002\u0002\u0010<\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\u0005",
    "\u0004\u0003\u0002\u0014\u0015\u0005\u0006\u0004\u0002\u0015\u0003\u0003",
    "\u0002\u0002\u0002\u0016\u0017\t\u0002\u0002\u0002\u0017\u0005\u0003",
    "\u0002\u0002\u0002\u0018\u0019\b\u0004\u0001\u0002\u0019 \u0005\u0010",
    "\t\u0002\u001a\u001b\u0007\u0015\u0002\u0002\u001b\u001d\u0007\r\u0002",
    "\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0005\f\u0007\u0002",
    "\u001f\u0018\u0003\u0002\u0002\u0002\u001f\u001c\u0003\u0002\u0002\u0002",
    " +\u0003\u0002\u0002\u0002!\"\f\u0004\u0002\u0002\"#\u0005\n\u0006\u0002",
    "#$\u0005\u0006\u0004\u0005$*\u0003\u0002\u0002\u0002%&\f\u0003\u0002",
    "\u0002&\'\u0005\b\u0005\u0002\'(\u0005\u0006\u0004\u0004(*\u0003\u0002",
    "\u0002\u0002)!\u0003\u0002\u0002\u0002)%\u0003\u0002\u0002\u0002*-\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",\u0007\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\t\u0003",
    "\u0002\u0002/\t\u0003\u0002\u0002\u000201\t\u0004\u0002\u00021\u000b",
    "\u0003\u0002\u0002\u000223\u0005\u000e\b\u00023\r\u0003\u0002\u0002",
    "\u00024;\u0007\u0017\u0002\u00025;\u0007\u0018\u0002\u000267\u0007\u0013",
    "\u0002\u000278\u0005\u000e\b\u000289\u0007\u0014\u0002\u00029;\u0003",
    "\u0002\u0002\u0002:4\u0003\u0002\u0002\u0002:5\u0003\u0002\u0002\u0002",
    ":6\u0003\u0002\u0002\u0002;\u000f\u0003\u0002\u0002\u0002<=\t\u0005",
    "\u0002\u0002=\u0011\u0003\u0002\u0002\u0002\u0007\u001c\u001f)+:"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'<'", "'<='", "'>'", "'>='", "'=~'", "'!~'", 
                     "'=='", "'!='", "'<>'", "'='", "'.'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'('", "')'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', "K_USER", 
                      "K_INCLUDES", "IDENTIFIER", "STRING_LITERAL", "INT_LITERAL", 
                      "FLOAT_LITERAL", "SPACES" ];

var ruleNames =  [ "condition", "rel_op", "expr", "arithmetic_op1", "arithmetic_op2", 
                   "field_name", "any_name", "literal_value" ];

function JourneyConditionParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JourneyConditionParser.prototype = Object.create(antlr4.Parser.prototype);
JourneyConditionParser.prototype.constructor = JourneyConditionParser;

Object.defineProperty(JourneyConditionParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JourneyConditionParser.EOF = antlr4.Token.EOF;
JourneyConditionParser.T__0 = 1;
JourneyConditionParser.T__1 = 2;
JourneyConditionParser.T__2 = 3;
JourneyConditionParser.T__3 = 4;
JourneyConditionParser.T__4 = 5;
JourneyConditionParser.T__5 = 6;
JourneyConditionParser.T__6 = 7;
JourneyConditionParser.T__7 = 8;
JourneyConditionParser.T__8 = 9;
JourneyConditionParser.T__9 = 10;
JourneyConditionParser.T__10 = 11;
JourneyConditionParser.T__11 = 12;
JourneyConditionParser.T__12 = 13;
JourneyConditionParser.T__13 = 14;
JourneyConditionParser.T__14 = 15;
JourneyConditionParser.T__15 = 16;
JourneyConditionParser.T__16 = 17;
JourneyConditionParser.T__17 = 18;
JourneyConditionParser.K_USER = 19;
JourneyConditionParser.K_INCLUDES = 20;
JourneyConditionParser.IDENTIFIER = 21;
JourneyConditionParser.STRING_LITERAL = 22;
JourneyConditionParser.INT_LITERAL = 23;
JourneyConditionParser.FLOAT_LITERAL = 24;
JourneyConditionParser.SPACES = 25;

JourneyConditionParser.RULE_condition = 0;
JourneyConditionParser.RULE_rel_op = 1;
JourneyConditionParser.RULE_expr = 2;
JourneyConditionParser.RULE_arithmetic_op1 = 3;
JourneyConditionParser.RULE_arithmetic_op2 = 4;
JourneyConditionParser.RULE_field_name = 5;
JourneyConditionParser.RULE_any_name = 6;
JourneyConditionParser.RULE_literal_value = 7;

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ConditionContext.prototype.rel_op = function() {
    return this.getTypedRuleContext(Rel_opContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.ConditionContext = ConditionContext;

JourneyConditionParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JourneyConditionParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.expr(0);
        this.state = 17;
        this.rel_op();
        this.state = 18;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Rel_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_rel_op;
    return this;
}

Rel_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rel_opContext.prototype.constructor = Rel_opContext;

Rel_opContext.prototype.K_INCLUDES = function() {
    return this.getToken(JourneyConditionParser.K_INCLUDES, 0);
};

Rel_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterRel_op(this);
	}
};

Rel_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitRel_op(this);
	}
};

Rel_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitRel_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Rel_opContext = Rel_opContext;

JourneyConditionParser.prototype.rel_op = function() {

    var localctx = new Rel_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JourneyConditionParser.RULE_rel_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JourneyConditionParser.T__0) | (1 << JourneyConditionParser.T__1) | (1 << JourneyConditionParser.T__2) | (1 << JourneyConditionParser.T__3) | (1 << JourneyConditionParser.T__4) | (1 << JourneyConditionParser.T__5) | (1 << JourneyConditionParser.T__6) | (1 << JourneyConditionParser.T__7) | (1 << JourneyConditionParser.T__8) | (1 << JourneyConditionParser.T__9) | (1 << JourneyConditionParser.K_INCLUDES))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.literal_value = function() {
    return this.getTypedRuleContext(Literal_valueContext,0);
};

ExprContext.prototype.field_name = function() {
    return this.getTypedRuleContext(Field_nameContext,0);
};

ExprContext.prototype.K_USER = function() {
    return this.getToken(JourneyConditionParser.K_USER, 0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.arithmetic_op2 = function() {
    return this.getTypedRuleContext(Arithmetic_op2Context,0);
};

ExprContext.prototype.arithmetic_op1 = function() {
    return this.getTypedRuleContext(Arithmetic_op1Context,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



JourneyConditionParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, JourneyConditionParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 23;
            this.literal_value();
            break;

        case 2:
            this.state = 26;
            _la = this._input.LA(1);
            if(_la===JourneyConditionParser.K_USER) {
                this.state = 24;
                this.match(JourneyConditionParser.K_USER);
                this.state = 25;
                this.match(JourneyConditionParser.T__10);
            }

            this.state = 28;
            this.field_name();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 41;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 39;
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JourneyConditionParser.RULE_expr);
                    this.state = 31;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 32;
                    this.arithmetic_op2();
                    this.state = 33;
                    this.expr(3);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, JourneyConditionParser.RULE_expr);
                    this.state = 35;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 36;
                    this.arithmetic_op1();
                    this.state = 37;
                    this.expr(2);
                    break;

                } 
            }
            this.state = 43;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Arithmetic_op1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_arithmetic_op1;
    return this;
}

Arithmetic_op1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmetic_op1Context.prototype.constructor = Arithmetic_op1Context;


Arithmetic_op1Context.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterArithmetic_op1(this);
	}
};

Arithmetic_op1Context.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitArithmetic_op1(this);
	}
};

Arithmetic_op1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitArithmetic_op1(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Arithmetic_op1Context = Arithmetic_op1Context;

JourneyConditionParser.prototype.arithmetic_op1 = function() {

    var localctx = new Arithmetic_op1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JourneyConditionParser.RULE_arithmetic_op1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!(_la===JourneyConditionParser.T__11 || _la===JourneyConditionParser.T__12)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Arithmetic_op2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_arithmetic_op2;
    return this;
}

Arithmetic_op2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmetic_op2Context.prototype.constructor = Arithmetic_op2Context;


Arithmetic_op2Context.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterArithmetic_op2(this);
	}
};

Arithmetic_op2Context.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitArithmetic_op2(this);
	}
};

Arithmetic_op2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitArithmetic_op2(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Arithmetic_op2Context = Arithmetic_op2Context;

JourneyConditionParser.prototype.arithmetic_op2 = function() {

    var localctx = new Arithmetic_op2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JourneyConditionParser.RULE_arithmetic_op2);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JourneyConditionParser.T__13) | (1 << JourneyConditionParser.T__14) | (1 << JourneyConditionParser.T__15))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Field_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_field_name;
    return this;
}

Field_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Field_nameContext.prototype.constructor = Field_nameContext;

Field_nameContext.prototype.any_name = function() {
    return this.getTypedRuleContext(Any_nameContext,0);
};

Field_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterField_name(this);
	}
};

Field_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitField_name(this);
	}
};

Field_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitField_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Field_nameContext = Field_nameContext;

JourneyConditionParser.prototype.field_name = function() {

    var localctx = new Field_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JourneyConditionParser.RULE_field_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.any_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Any_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_any_name;
    return this;
}

Any_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Any_nameContext.prototype.constructor = Any_nameContext;

Any_nameContext.prototype.IDENTIFIER = function() {
    return this.getToken(JourneyConditionParser.IDENTIFIER, 0);
};

Any_nameContext.prototype.STRING_LITERAL = function() {
    return this.getToken(JourneyConditionParser.STRING_LITERAL, 0);
};

Any_nameContext.prototype.any_name = function() {
    return this.getTypedRuleContext(Any_nameContext,0);
};

Any_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterAny_name(this);
	}
};

Any_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitAny_name(this);
	}
};

Any_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitAny_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Any_nameContext = Any_nameContext;

JourneyConditionParser.prototype.any_name = function() {

    var localctx = new Any_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, JourneyConditionParser.RULE_any_name);
    try {
        this.state = 56;
        switch(this._input.LA(1)) {
        case JourneyConditionParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(JourneyConditionParser.IDENTIFIER);
            break;
        case JourneyConditionParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(JourneyConditionParser.STRING_LITERAL);
            break;
        case JourneyConditionParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.match(JourneyConditionParser.T__16);
            this.state = 53;
            this.any_name();
            this.state = 54;
            this.match(JourneyConditionParser.T__17);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Literal_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JourneyConditionParser.RULE_literal_value;
    return this;
}

Literal_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Literal_valueContext.prototype.constructor = Literal_valueContext;

Literal_valueContext.prototype.INT_LITERAL = function() {
    return this.getToken(JourneyConditionParser.INT_LITERAL, 0);
};

Literal_valueContext.prototype.FLOAT_LITERAL = function() {
    return this.getToken(JourneyConditionParser.FLOAT_LITERAL, 0);
};

Literal_valueContext.prototype.STRING_LITERAL = function() {
    return this.getToken(JourneyConditionParser.STRING_LITERAL, 0);
};

Literal_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.enterLiteral_value(this);
	}
};

Literal_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JourneyConditionListener ) {
        listener.exitLiteral_value(this);
	}
};

Literal_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JourneyConditionVisitor ) {
        return visitor.visitLiteral_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JourneyConditionParser.Literal_valueContext = Literal_valueContext;

JourneyConditionParser.prototype.literal_value = function() {

    var localctx = new Literal_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, JourneyConditionParser.RULE_literal_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JourneyConditionParser.STRING_LITERAL) | (1 << JourneyConditionParser.INT_LITERAL) | (1 << JourneyConditionParser.FLOAT_LITERAL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


JourneyConditionParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

JourneyConditionParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.JourneyConditionParser = JourneyConditionParser;
