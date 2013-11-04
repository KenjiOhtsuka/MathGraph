/*
    Default template driver for JS/CC generated parsers running as
    browser-based JavaScript/ECMAScript applications.
    
    WARNING:     This parser template will not run as console and has lesser
                features for debugging than the console derivates for the
                various JavaScript platforms.
    
    Features:
    - Parser trace messages
    - Integrated panic-mode error recovery
    
    Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    
    This is in the public domain.
*/

var _dbg_withtrace        = false;
var _dbg_string            = new String();

function __dbg_print( text )
{
    _dbg_string += text + "\n";
}

function __lex( info )
{
    var state        = 0;
    var match        = -1;
    var match_pos    = 0;
    var start        = 0;
    var pos            = info.offset + 1;

    do
    {
        pos--;
        state = 0;
        match = -2;
        start = pos;

        if( info.src.length <= start )
            return 30;

        do
        {

switch( state )
{
    case 0:
        if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
        else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
        else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
        else if( info.src.charCodeAt( pos ) == 42 ) state = 4;
        else if( info.src.charCodeAt( pos ) == 43 ) state = 5;
        else if( info.src.charCodeAt( pos ) == 45 ) state = 6;
        else if( info.src.charCodeAt( pos ) == 47 ) state = 7;
        else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 91 ) state = 9;
        else if( info.src.charCodeAt( pos ) == 93 ) state = 10;
        else if( info.src.charCodeAt( pos ) == 94 ) state = 11;
        else if( info.src.charCodeAt( pos ) == 101 ) state = 12;
        else if( info.src.charCodeAt( pos ) == 120 ) state = 13;
        else if( info.src.charCodeAt( pos ) == 123 ) state = 14;
        else if( info.src.charCodeAt( pos ) == 124 ) state = 15;
        else if( info.src.charCodeAt( pos ) == 125 ) state = 16;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 28;
        else if( info.src.charCodeAt( pos ) == 97 ) state = 29;
        else if( info.src.charCodeAt( pos ) == 99 ) state = 30;
        else if( info.src.charCodeAt( pos ) == 112 ) state = 31;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 32;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 33;
        else if( info.src.charCodeAt( pos ) == 108 ) state = 47;
        else state = -1;
        break;

    case 1:
        state = -1;
        match = 1;
        match_pos = pos;
        break;

    case 2:
        state = -1;
        match = 2;
        match_pos = pos;
        break;

    case 3:
        state = -1;
        match = 3;
        match_pos = pos;
        break;

    case 4:
        if( info.src.charCodeAt( pos ) == 42 ) state = 17;
        else state = -1;
        match = 24;
        match_pos = pos;
        break;

    case 5:
        state = -1;
        match = 22;
        match_pos = pos;
        break;

    case 6:
        state = -1;
        match = 23;
        match_pos = pos;
        break;

    case 7:
        state = -1;
        match = 25;
        match_pos = pos;
        break;

    case 8:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
        else if( info.src.charCodeAt( pos ) == 46 ) state = 18;
        else state = -1;
        match = 10;
        match_pos = pos;
        break;

    case 9:
        state = -1;
        match = 6;
        match_pos = pos;
        break;

    case 10:
        state = -1;
        match = 7;
        match_pos = pos;
        break;

    case 11:
        state = -1;
        match = 26;
        match_pos = pos;
        break;

    case 12:
        if( info.src.charCodeAt( pos ) == 120 ) state = 36;
        else state = -1;
        match = 13;
        match_pos = pos;
        break;

    case 13:
        state = -1;
        match = 9;
        match_pos = pos;
        break;

    case 14:
        state = -1;
        match = 4;
        match_pos = pos;
        break;

    case 15:
        state = -1;
        match = 8;
        match_pos = pos;
        break;

    case 16:
        state = -1;
        match = 5;
        match_pos = pos;
        break;

    case 17:
        state = -1;
        match = 27;
        match_pos = pos;
        break;

    case 18:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
        else state = -1;
        match = 11;
        match_pos = pos;
        break;

    case 19:
        state = -1;
        match = 12;
        match_pos = pos;
        break;

    case 20:
        state = -1;
        match = 18;
        match_pos = pos;
        break;

    case 21:
        state = -1;
        match = 21;
        match_pos = pos;
        break;

    case 22:
        state = -1;
        match = 20;
        match_pos = pos;
        break;

    case 23:
        state = -1;
        match = 17;
        match_pos = pos;
        break;

    case 24:
        state = -1;
        match = 19;
        match_pos = pos;
        break;

    case 25:
        state = -1;
        match = 15;
        match_pos = pos;
        break;

    case 26:
        state = -1;
        match = 14;
        match_pos = pos;
        break;

    case 27:
        state = -1;
        match = 16;
        match_pos = pos;
        break;

    case 28:
        if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 18;
        else state = -1;
        break;

    case 29:
        if( info.src.charCodeAt( pos ) == 114 ) state = 34;
        else state = -1;
        break;

    case 30:
        if( info.src.charCodeAt( pos ) == 111 ) state = 35;
        else state = -1;
        break;

    case 31:
        if( info.src.charCodeAt( pos ) == 105 ) state = 19;
        else state = -1;
        break;

    case 32:
        if( info.src.charCodeAt( pos ) == 105 ) state = 38;
        else state = -1;
        break;

    case 33:
        if( info.src.charCodeAt( pos ) == 97 ) state = 39;
        else state = -1;
        break;

    case 34:
        if( info.src.charCodeAt( pos ) == 99 ) state = 40;
        else state = -1;
        break;

    case 35:
        if( info.src.charCodeAt( pos ) == 115 ) state = 20;
        else state = -1;
        break;

    case 36:
        if( info.src.charCodeAt( pos ) == 112 ) state = 21;
        else state = -1;
        break;

    case 37:
        if( info.src.charCodeAt( pos ) == 103 ) state = 22;
        else state = -1;
        break;

    case 38:
        if( info.src.charCodeAt( pos ) == 110 ) state = 23;
        else state = -1;
        break;

    case 39:
        if( info.src.charCodeAt( pos ) == 110 ) state = 24;
        else state = -1;
        break;

    case 40:
        if( info.src.charCodeAt( pos ) == 99 ) state = 41;
        else if( info.src.charCodeAt( pos ) == 115 ) state = 42;
        else if( info.src.charCodeAt( pos ) == 116 ) state = 43;
        else state = -1;
        break;

    case 41:
        if( info.src.charCodeAt( pos ) == 111 ) state = 44;
        else state = -1;
        break;

    case 42:
        if( info.src.charCodeAt( pos ) == 105 ) state = 45;
        else state = -1;
        break;

    case 43:
        if( info.src.charCodeAt( pos ) == 97 ) state = 46;
        else state = -1;
        break;

    case 44:
        if( info.src.charCodeAt( pos ) == 115 ) state = 25;
        else state = -1;
        break;

    case 45:
        if( info.src.charCodeAt( pos ) == 110 ) state = 26;
        else state = -1;
        break;

    case 46:
        if( info.src.charCodeAt( pos ) == 110 ) state = 27;
        else state = -1;
        break;

    case 47:
        if( info.src.charCodeAt( pos ) == 111 ) state = 37;
        else state = -1;
        break;

}


            pos++;

        }
        while( state > -1 );

    }
    while( 1 > -1 && match == 1 );

    if( match > -1 )
    {
        info.att = info.src.substr( start, match_pos - start );
        info.offset = match_pos;
        
switch( match )
{
    case 10:
        {
         info.att = parseInt( info.att ); 
        }
        break;

    case 11:
        {
         info.att = parseFloat( info.att ); 
        }
        break;

}


    }
    else
    {
        info.att = new String();
        match = -1;
    }

    return match;
}


function __parse( src, err_off, err_la )
{
    var result = {formula:'', err_cnt: 0};
    var        sstack            = new Array();
    var        vstack            = new Array();
    var     err_cnt            = 0;
    var        act;
    var        go;
    var        la;
    var        rval;
    var     parseinfo        = new Function( "", "var offset; var src; var att;" );
    var        info            = new parseinfo();
    
/* Pop-Table */
var pop_tab = new Array(
    new Array( 0/* p' */, 1 ),
    new Array( 29/* p */, 1 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 3 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 2 ),
    new Array( 28/* f */, 1 ),
    new Array( 28/* f */, 1 ),
    new Array( 28/* f */, 1 ),
    new Array( 28/* f */, 1 ),
    new Array( 28/* f */, 1 )
);

/* Action-Table */
var act_tab = new Array(
    /* State 0 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 1 */ new Array( 30/* "$" */,0 ),
    /* State 2 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 , 30/* "$" */,-1 ),
    /* State 3 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 4 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 5 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 6 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 7 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 8 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 9 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 10 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 11 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 12 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 13 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 14 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 15 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 16 */ new Array( 30/* "$" */,-22 , 22/* "+" */,-22 , 23/* "-" */,-22 , 24/* "*" */,-22 , 6/* "[" */,-22 , 4/* "{" */,-22 , 2/* "(" */,-22 , 8/* "|" */,-22 , 14/* "arcsin" */,-22 , 15/* "arccos" */,-22 , 16/* "arctan" */,-22 , 17/* "sin" */,-22 , 18/* "cos" */,-22 , 19/* "tan" */,-22 , 21/* "exp" */,-22 , 20/* "log" */,-22 , 10/* "INT" */,-22 , 11/* "FLOAT" */,-22 , 12/* "PI" */,-22 , 13/* "E" */,-22 , 9/* "X" */,-22 , 25/* "/" */,-22 , 26/* "^" */,-22 , 27/* "**" */,-22 , 7/* "]" */,-22 , 5/* "}" */,-22 , 3/* ")" */,-22 ),
    /* State 17 */ new Array( 30/* "$" */,-23 , 22/* "+" */,-23 , 23/* "-" */,-23 , 24/* "*" */,-23 , 6/* "[" */,-23 , 4/* "{" */,-23 , 2/* "(" */,-23 , 8/* "|" */,-23 , 14/* "arcsin" */,-23 , 15/* "arccos" */,-23 , 16/* "arctan" */,-23 , 17/* "sin" */,-23 , 18/* "cos" */,-23 , 19/* "tan" */,-23 , 21/* "exp" */,-23 , 20/* "log" */,-23 , 10/* "INT" */,-23 , 11/* "FLOAT" */,-23 , 12/* "PI" */,-23 , 13/* "E" */,-23 , 9/* "X" */,-23 , 25/* "/" */,-23 , 26/* "^" */,-23 , 27/* "**" */,-23 , 7/* "]" */,-23 , 5/* "}" */,-23 , 3/* ")" */,-23 ),
    /* State 18 */ new Array( 30/* "$" */,-24 , 22/* "+" */,-24 , 23/* "-" */,-24 , 24/* "*" */,-24 , 6/* "[" */,-24 , 4/* "{" */,-24 , 2/* "(" */,-24 , 8/* "|" */,-24 , 14/* "arcsin" */,-24 , 15/* "arccos" */,-24 , 16/* "arctan" */,-24 , 17/* "sin" */,-24 , 18/* "cos" */,-24 , 19/* "tan" */,-24 , 21/* "exp" */,-24 , 20/* "log" */,-24 , 10/* "INT" */,-24 , 11/* "FLOAT" */,-24 , 12/* "PI" */,-24 , 13/* "E" */,-24 , 9/* "X" */,-24 , 25/* "/" */,-24 , 26/* "^" */,-24 , 27/* "**" */,-24 , 7/* "]" */,-24 , 5/* "}" */,-24 , 3/* ")" */,-24 ),
    /* State 19 */ new Array( 30/* "$" */,-25 , 22/* "+" */,-25 , 23/* "-" */,-25 , 24/* "*" */,-25 , 6/* "[" */,-25 , 4/* "{" */,-25 , 2/* "(" */,-25 , 8/* "|" */,-25 , 14/* "arcsin" */,-25 , 15/* "arccos" */,-25 , 16/* "arctan" */,-25 , 17/* "sin" */,-25 , 18/* "cos" */,-25 , 19/* "tan" */,-25 , 21/* "exp" */,-25 , 20/* "log" */,-25 , 10/* "INT" */,-25 , 11/* "FLOAT" */,-25 , 12/* "PI" */,-25 , 13/* "E" */,-25 , 9/* "X" */,-25 , 25/* "/" */,-25 , 26/* "^" */,-25 , 27/* "**" */,-25 , 7/* "]" */,-25 , 5/* "}" */,-25 , 3/* ")" */,-25 ),
    /* State 20 */ new Array( 30/* "$" */,-26 , 22/* "+" */,-26 , 23/* "-" */,-26 , 24/* "*" */,-26 , 6/* "[" */,-26 , 4/* "{" */,-26 , 2/* "(" */,-26 , 8/* "|" */,-26 , 14/* "arcsin" */,-26 , 15/* "arccos" */,-26 , 16/* "arctan" */,-26 , 17/* "sin" */,-26 , 18/* "cos" */,-26 , 19/* "tan" */,-26 , 21/* "exp" */,-26 , 20/* "log" */,-26 , 10/* "INT" */,-26 , 11/* "FLOAT" */,-26 , 12/* "PI" */,-26 , 13/* "E" */,-26 , 9/* "X" */,-26 , 25/* "/" */,-26 , 26/* "^" */,-26 , 27/* "**" */,-26 , 7/* "]" */,-26 , 5/* "}" */,-26 , 3/* ")" */,-26 ),
    /* State 21 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 22 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 23 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 24 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 , 30/* "$" */,-5 , 7/* "]" */,-5 , 5/* "}" */,-5 , 3/* ")" */,-5 ),
    /* State 25 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 26 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 27 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 28 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-7 , 24/* "*" */,-7 , 23/* "-" */,-7 , 22/* "+" */,-7 , 6/* "[" */,-7 , 4/* "{" */,-7 , 2/* "(" */,-7 , 8/* "|" */,-7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,-7 , 11/* "FLOAT" */,-7 , 12/* "PI" */,-7 , 13/* "E" */,-7 , 9/* "X" */,-7 , 30/* "$" */,-7 , 7/* "]" */,-7 , 5/* "}" */,-7 , 3/* ")" */,-7 ),
    /* State 29 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 7/* "]" */,47 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 30 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 5/* "}" */,48 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 31 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 3/* ")" */,49 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 32 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,26 , 22/* "+" */,27 , 8/* "|" */,50 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 ),
    /* State 33 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-14 , 24/* "*" */,-14 , 23/* "-" */,-14 , 22/* "+" */,-14 , 6/* "[" */,-14 , 4/* "{" */,-14 , 2/* "(" */,-14 , 8/* "|" */,-14 , 14/* "arcsin" */,-14 , 15/* "arccos" */,-14 , 16/* "arctan" */,-14 , 17/* "sin" */,-14 , 18/* "cos" */,-14 , 19/* "tan" */,-14 , 21/* "exp" */,-14 , 20/* "log" */,-14 , 10/* "INT" */,-14 , 11/* "FLOAT" */,-14 , 12/* "PI" */,-14 , 13/* "E" */,-14 , 9/* "X" */,-14 , 30/* "$" */,-14 , 7/* "]" */,-14 , 5/* "}" */,-14 , 3/* ")" */,-14 ),
    /* State 34 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-15 , 24/* "*" */,-15 , 23/* "-" */,-15 , 22/* "+" */,-15 , 6/* "[" */,-15 , 4/* "{" */,-15 , 2/* "(" */,-15 , 8/* "|" */,-15 , 14/* "arcsin" */,-15 , 15/* "arccos" */,-15 , 16/* "arctan" */,-15 , 17/* "sin" */,-15 , 18/* "cos" */,-15 , 19/* "tan" */,-15 , 21/* "exp" */,-15 , 20/* "log" */,-15 , 10/* "INT" */,-15 , 11/* "FLOAT" */,-15 , 12/* "PI" */,-15 , 13/* "E" */,-15 , 9/* "X" */,-15 , 30/* "$" */,-15 , 7/* "]" */,-15 , 5/* "}" */,-15 , 3/* ")" */,-15 ),
    /* State 35 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-16 , 24/* "*" */,-16 , 23/* "-" */,-16 , 22/* "+" */,-16 , 6/* "[" */,-16 , 4/* "{" */,-16 , 2/* "(" */,-16 , 8/* "|" */,-16 , 14/* "arcsin" */,-16 , 15/* "arccos" */,-16 , 16/* "arctan" */,-16 , 17/* "sin" */,-16 , 18/* "cos" */,-16 , 19/* "tan" */,-16 , 21/* "exp" */,-16 , 20/* "log" */,-16 , 10/* "INT" */,-16 , 11/* "FLOAT" */,-16 , 12/* "PI" */,-16 , 13/* "E" */,-16 , 9/* "X" */,-16 , 30/* "$" */,-16 , 7/* "]" */,-16 , 5/* "}" */,-16 , 3/* ")" */,-16 ),
    /* State 36 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-17 , 24/* "*" */,-17 , 23/* "-" */,-17 , 22/* "+" */,-17 , 6/* "[" */,-17 , 4/* "{" */,-17 , 2/* "(" */,-17 , 8/* "|" */,-17 , 14/* "arcsin" */,-17 , 15/* "arccos" */,-17 , 16/* "arctan" */,-17 , 17/* "sin" */,-17 , 18/* "cos" */,-17 , 19/* "tan" */,-17 , 21/* "exp" */,-17 , 20/* "log" */,-17 , 10/* "INT" */,-17 , 11/* "FLOAT" */,-17 , 12/* "PI" */,-17 , 13/* "E" */,-17 , 9/* "X" */,-17 , 30/* "$" */,-17 , 7/* "]" */,-17 , 5/* "}" */,-17 , 3/* ")" */,-17 ),
    /* State 37 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-18 , 24/* "*" */,-18 , 23/* "-" */,-18 , 22/* "+" */,-18 , 6/* "[" */,-18 , 4/* "{" */,-18 , 2/* "(" */,-18 , 8/* "|" */,-18 , 14/* "arcsin" */,-18 , 15/* "arccos" */,-18 , 16/* "arctan" */,-18 , 17/* "sin" */,-18 , 18/* "cos" */,-18 , 19/* "tan" */,-18 , 21/* "exp" */,-18 , 20/* "log" */,-18 , 10/* "INT" */,-18 , 11/* "FLOAT" */,-18 , 12/* "PI" */,-18 , 13/* "E" */,-18 , 9/* "X" */,-18 , 30/* "$" */,-18 , 7/* "]" */,-18 , 5/* "}" */,-18 , 3/* ")" */,-18 ),
    /* State 38 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-19 , 24/* "*" */,-19 , 23/* "-" */,-19 , 22/* "+" */,-19 , 6/* "[" */,-19 , 4/* "{" */,-19 , 2/* "(" */,-19 , 8/* "|" */,-19 , 14/* "arcsin" */,-19 , 15/* "arccos" */,-19 , 16/* "arctan" */,-19 , 17/* "sin" */,-19 , 18/* "cos" */,-19 , 19/* "tan" */,-19 , 21/* "exp" */,-19 , 20/* "log" */,-19 , 10/* "INT" */,-19 , 11/* "FLOAT" */,-19 , 12/* "PI" */,-19 , 13/* "E" */,-19 , 9/* "X" */,-19 , 30/* "$" */,-19 , 7/* "]" */,-19 , 5/* "}" */,-19 , 3/* ")" */,-19 ),
    /* State 39 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-20 , 24/* "*" */,-20 , 23/* "-" */,-20 , 22/* "+" */,-20 , 6/* "[" */,-20 , 4/* "{" */,-20 , 2/* "(" */,-20 , 8/* "|" */,-20 , 14/* "arcsin" */,-20 , 15/* "arccos" */,-20 , 16/* "arctan" */,-20 , 17/* "sin" */,-20 , 18/* "cos" */,-20 , 19/* "tan" */,-20 , 21/* "exp" */,-20 , 20/* "log" */,-20 , 10/* "INT" */,-20 , 11/* "FLOAT" */,-20 , 12/* "PI" */,-20 , 13/* "E" */,-20 , 9/* "X" */,-20 , 30/* "$" */,-20 , 7/* "]" */,-20 , 5/* "}" */,-20 , 3/* ")" */,-20 ),
    /* State 40 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-21 , 24/* "*" */,-21 , 23/* "-" */,-21 , 22/* "+" */,-21 , 6/* "[" */,-21 , 4/* "{" */,-21 , 2/* "(" */,-21 , 8/* "|" */,-21 , 14/* "arcsin" */,-21 , 15/* "arccos" */,-21 , 16/* "arctan" */,-21 , 17/* "sin" */,-21 , 18/* "cos" */,-21 , 19/* "tan" */,-21 , 21/* "exp" */,-21 , 20/* "log" */,-21 , 10/* "INT" */,-21 , 11/* "FLOAT" */,-21 , 12/* "PI" */,-21 , 13/* "E" */,-21 , 9/* "X" */,-21 , 30/* "$" */,-21 , 7/* "]" */,-21 , 5/* "}" */,-21 , 3/* ")" */,-21 ),
    /* State 41 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-12 , 24/* "*" */,-12 , 23/* "-" */,-12 , 22/* "+" */,-12 , 6/* "[" */,-12 , 4/* "{" */,-12 , 2/* "(" */,-12 , 8/* "|" */,-12 , 14/* "arcsin" */,-12 , 15/* "arccos" */,-12 , 16/* "arctan" */,-12 , 17/* "sin" */,-12 , 18/* "cos" */,-12 , 19/* "tan" */,-12 , 21/* "exp" */,-12 , 20/* "log" */,-12 , 10/* "INT" */,-12 , 11/* "FLOAT" */,-12 , 12/* "PI" */,-12 , 13/* "E" */,-12 , 9/* "X" */,-12 , 30/* "$" */,-12 , 7/* "]" */,-12 , 5/* "}" */,-12 , 3/* ")" */,-12 ),
    /* State 42 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-11 , 24/* "*" */,-11 , 23/* "-" */,-11 , 22/* "+" */,-11 , 6/* "[" */,-11 , 4/* "{" */,-11 , 2/* "(" */,-11 , 8/* "|" */,-11 , 14/* "arcsin" */,-11 , 15/* "arccos" */,-11 , 16/* "arctan" */,-11 , 17/* "sin" */,-11 , 18/* "cos" */,-11 , 19/* "tan" */,-11 , 21/* "exp" */,-11 , 20/* "log" */,-11 , 10/* "INT" */,-11 , 11/* "FLOAT" */,-11 , 12/* "PI" */,-11 , 13/* "E" */,-11 , 9/* "X" */,-11 , 30/* "$" */,-11 , 7/* "]" */,-11 , 5/* "}" */,-11 , 3/* ")" */,-11 ),
    /* State 43 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-6 , 24/* "*" */,-6 , 23/* "-" */,-6 , 22/* "+" */,-6 , 6/* "[" */,-6 , 4/* "{" */,-6 , 2/* "(" */,-6 , 8/* "|" */,-6 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,-6 , 11/* "FLOAT" */,-6 , 12/* "PI" */,-6 , 13/* "E" */,-6 , 9/* "X" */,-6 , 30/* "$" */,-6 , 7/* "]" */,-6 , 5/* "}" */,-6 , 3/* ")" */,-6 ),
    /* State 44 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-4 , 24/* "*" */,-4 , 23/* "-" */,-4 , 22/* "+" */,-4 , 6/* "[" */,-4 , 4/* "{" */,-4 , 2/* "(" */,-4 , 8/* "|" */,-4 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,-4 , 11/* "FLOAT" */,-4 , 12/* "PI" */,-4 , 13/* "E" */,-4 , 9/* "X" */,-4 , 30/* "$" */,-4 , 7/* "]" */,-4 , 5/* "}" */,-4 , 3/* ")" */,-4 ),
    /* State 45 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,-3 , 24/* "*" */,-3 , 23/* "-" */,-3 , 22/* "+" */,-3 , 6/* "[" */,-3 , 4/* "{" */,-3 , 2/* "(" */,-3 , 8/* "|" */,-3 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,-3 , 11/* "FLOAT" */,-3 , 12/* "PI" */,-3 , 13/* "E" */,-3 , 9/* "X" */,-3 , 30/* "$" */,-3 , 7/* "]" */,-3 , 5/* "}" */,-3 , 3/* ")" */,-3 ),
    /* State 46 */ new Array( 27/* "**" */,21 , 26/* "^" */,22 , 25/* "/" */,23 , 24/* "*" */,25 , 23/* "-" */,-2 , 22/* "+" */,-2 , 6/* "[" */,-2 , 4/* "{" */,-2 , 2/* "(" */,-2 , 8/* "|" */,-2 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,-2 , 11/* "FLOAT" */,-2 , 12/* "PI" */,-2 , 13/* "E" */,-2 , 9/* "X" */,-2 , 30/* "$" */,-2 , 7/* "]" */,-2 , 5/* "}" */,-2 , 3/* ")" */,-2 ),
    /* State 47 */ new Array( 30/* "$" */,-8 , 22/* "+" */,-8 , 23/* "-" */,-8 , 24/* "*" */,-8 , 6/* "[" */,-8 , 4/* "{" */,-8 , 2/* "(" */,-8 , 8/* "|" */,-8 , 14/* "arcsin" */,-8 , 15/* "arccos" */,-8 , 16/* "arctan" */,-8 , 17/* "sin" */,-8 , 18/* "cos" */,-8 , 19/* "tan" */,-8 , 21/* "exp" */,-8 , 20/* "log" */,-8 , 10/* "INT" */,-8 , 11/* "FLOAT" */,-8 , 12/* "PI" */,-8 , 13/* "E" */,-8 , 9/* "X" */,-8 , 25/* "/" */,-8 , 26/* "^" */,-8 , 27/* "**" */,-8 , 7/* "]" */,-8 , 5/* "}" */,-8 , 3/* ")" */,-8 ),
    /* State 48 */ new Array( 30/* "$" */,-9 , 22/* "+" */,-9 , 23/* "-" */,-9 , 24/* "*" */,-9 , 6/* "[" */,-9 , 4/* "{" */,-9 , 2/* "(" */,-9 , 8/* "|" */,-9 , 14/* "arcsin" */,-9 , 15/* "arccos" */,-9 , 16/* "arctan" */,-9 , 17/* "sin" */,-9 , 18/* "cos" */,-9 , 19/* "tan" */,-9 , 21/* "exp" */,-9 , 20/* "log" */,-9 , 10/* "INT" */,-9 , 11/* "FLOAT" */,-9 , 12/* "PI" */,-9 , 13/* "E" */,-9 , 9/* "X" */,-9 , 25/* "/" */,-9 , 26/* "^" */,-9 , 27/* "**" */,-9 , 7/* "]" */,-9 , 5/* "}" */,-9 , 3/* ")" */,-9 ),
    /* State 49 */ new Array( 30/* "$" */,-10 , 22/* "+" */,-10 , 23/* "-" */,-10 , 24/* "*" */,-10 , 6/* "[" */,-10 , 4/* "{" */,-10 , 2/* "(" */,-10 , 8/* "|" */,-10 , 14/* "arcsin" */,-10 , 15/* "arccos" */,-10 , 16/* "arctan" */,-10 , 17/* "sin" */,-10 , 18/* "cos" */,-10 , 19/* "tan" */,-10 , 21/* "exp" */,-10 , 20/* "log" */,-10 , 10/* "INT" */,-10 , 11/* "FLOAT" */,-10 , 12/* "PI" */,-10 , 13/* "E" */,-10 , 9/* "X" */,-10 , 25/* "/" */,-10 , 26/* "^" */,-10 , 27/* "**" */,-10 , 7/* "]" */,-10 , 5/* "}" */,-10 , 3/* ")" */,-10 ),
    /* State 50 */ new Array( 23/* "-" */,3 , 6/* "[" */,4 , 4/* "{" */,5 , 2/* "(" */,6 , 8/* "|" */,7 , 14/* "arcsin" */,8 , 15/* "arccos" */,9 , 16/* "arctan" */,10 , 17/* "sin" */,11 , 18/* "cos" */,12 , 19/* "tan" */,13 , 21/* "exp" */,14 , 20/* "log" */,15 , 10/* "INT" */,16 , 11/* "FLOAT" */,17 , 12/* "PI" */,18 , 13/* "E" */,19 , 9/* "X" */,20 , 30/* "$" */,-13 , 22/* "+" */,-13 , 24/* "*" */,-13 , 25/* "/" */,-13 , 26/* "^" */,-13 , 27/* "**" */,-13 , 7/* "]" */,-13 , 5/* "}" */,-13 , 3/* ")" */,-13 )
);

/* Goto-Table */
var goto_tab = new Array(
    /* State 0 */ new Array( 29/* p */,1 , 28/* f */,2 ),
    /* State 1 */ new Array( ),
    /* State 2 */ new Array( 28/* f */,24 ),
    /* State 3 */ new Array( 28/* f */,28 ),
    /* State 4 */ new Array( 28/* f */,29 ),
    /* State 5 */ new Array( 28/* f */,30 ),
    /* State 6 */ new Array( 28/* f */,31 ),
    /* State 7 */ new Array( 28/* f */,32 ),
    /* State 8 */ new Array( 28/* f */,33 ),
    /* State 9 */ new Array( 28/* f */,34 ),
    /* State 10 */ new Array( 28/* f */,35 ),
    /* State 11 */ new Array( 28/* f */,36 ),
    /* State 12 */ new Array( 28/* f */,37 ),
    /* State 13 */ new Array( 28/* f */,38 ),
    /* State 14 */ new Array( 28/* f */,39 ),
    /* State 15 */ new Array( 28/* f */,40 ),
    /* State 16 */ new Array( ),
    /* State 17 */ new Array( ),
    /* State 18 */ new Array( ),
    /* State 19 */ new Array( ),
    /* State 20 */ new Array( ),
    /* State 21 */ new Array( 28/* f */,41 ),
    /* State 22 */ new Array( 28/* f */,42 ),
    /* State 23 */ new Array( 28/* f */,43 ),
    /* State 24 */ new Array( 28/* f */,24 ),
    /* State 25 */ new Array( 28/* f */,44 ),
    /* State 26 */ new Array( 28/* f */,45 ),
    /* State 27 */ new Array( 28/* f */,46 ),
    /* State 28 */ new Array( 28/* f */,24 ),
    /* State 29 */ new Array( 28/* f */,24 ),
    /* State 30 */ new Array( 28/* f */,24 ),
    /* State 31 */ new Array( 28/* f */,24 ),
    /* State 32 */ new Array( 28/* f */,24 ),
    /* State 33 */ new Array( 28/* f */,24 ),
    /* State 34 */ new Array( 28/* f */,24 ),
    /* State 35 */ new Array( 28/* f */,24 ),
    /* State 36 */ new Array( 28/* f */,24 ),
    /* State 37 */ new Array( 28/* f */,24 ),
    /* State 38 */ new Array( 28/* f */,24 ),
    /* State 39 */ new Array( 28/* f */,24 ),
    /* State 40 */ new Array( 28/* f */,24 ),
    /* State 41 */ new Array( 28/* f */,24 ),
    /* State 42 */ new Array( 28/* f */,24 ),
    /* State 43 */ new Array( 28/* f */,24 ),
    /* State 44 */ new Array( 28/* f */,24 ),
    /* State 45 */ new Array( 28/* f */,24 ),
    /* State 46 */ new Array( 28/* f */,24 ),
    /* State 47 */ new Array( ),
    /* State 48 */ new Array( ),
    /* State 49 */ new Array( ),
    /* State 50 */ new Array( 28/* f */,32 )
);



/* Symbol labels */
var labels = new Array(
    "p'" /* Non-terminal symbol */,
    "WHITESPACE" /* Terminal symbol */,
    "(" /* Terminal symbol */,
    ")" /* Terminal symbol */,
    "{" /* Terminal symbol */,
    "}" /* Terminal symbol */,
    "[" /* Terminal symbol */,
    "]" /* Terminal symbol */,
    "|" /* Terminal symbol */,
    "X" /* Terminal symbol */,
    "INT" /* Terminal symbol */,
    "FLOAT" /* Terminal symbol */,
    "PI" /* Terminal symbol */,
    "E" /* Terminal symbol */,
    "arcsin" /* Terminal symbol */,
    "arccos" /* Terminal symbol */,
    "arctan" /* Terminal symbol */,
    "sin" /* Terminal symbol */,
    "cos" /* Terminal symbol */,
    "tan" /* Terminal symbol */,
    "log" /* Terminal symbol */,
    "exp" /* Terminal symbol */,
    "+" /* Terminal symbol */,
    "-" /* Terminal symbol */,
    "*" /* Terminal symbol */,
    "/" /* Terminal symbol */,
    "^" /* Terminal symbol */,
    "**" /* Terminal symbol */,
    "f" /* Non-terminal symbol */,
    "p" /* Non-terminal symbol */,
    "$" /* Terminal symbol */
);


    
    info.offset = 0;
    info.src = src;
    info.att = new String();
    
    if( !err_off )
        err_off    = new Array();
    if( !err_la )
    err_la = new Array();
    
    sstack.push( 0 );
    vstack.push( 0 );
    
    la = __lex( info );

    while( true )
    {
        act = 52;
        for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
        {
            if( act_tab[sstack[sstack.length-1]][i] == la )
            {
                act = act_tab[sstack[sstack.length-1]][i+1];
                break;
            }
        }

        if( _dbg_withtrace && sstack.length > 0 )
        {
            __dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
                            "\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
                            "\tAction: " + act + "\n" + 
                            "\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
                                    "..." : "" ) + "\"\n" +
                            "\tStack: " + sstack.join() + "\n" +
                            "\tValue stack: " + vstack.join() + "\n" );
        }
        
            
        //Panic-mode: Try recovery when parse-error occurs!
        if( act == 52 )
        {
            if( _dbg_withtrace )
                __dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
            
            err_cnt++;
            err_off.push( info.offset - info.att.length );            
            err_la.push( new Array() );
            for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
            
            //Remember the original stack!
            var rsstack = new Array();
            var rvstack = new Array();
            for( var i = 0; i < sstack.length; i++ )
            {
                rsstack[i] = sstack[i];
                rvstack[i] = vstack[i];
            }
            
            while( act == 52 && la != 30 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery\n" +
                                    "Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
                                    "Action: " + act + "\n\n" );
                if( la == -1 )
                    info.offset++;
                    
                while( act == 52 && sstack.length > 0 )
                {
                    sstack.pop();
                    vstack.pop();
                    
                    if( sstack.length == 0 )
                        break;
                        
                    act = 52;
                    for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
                    {
                        if( act_tab[sstack[sstack.length-1]][i] == la )
                        {
                            act = act_tab[sstack[sstack.length-1]][i+1];
                            break;
                        }
                    }
                }
                
                if( act != 52 )
                    break;
                
                for( var i = 0; i < rsstack.length; i++ )
                {
                    sstack.push( rsstack[i] );
                    vstack.push( rvstack[i] );
                }
                
                la = __lex( info );
            }
            
            if( act == 52 )
            {
                if( _dbg_withtrace )
                    __dbg_print( "\tError recovery failed, terminating parse process..." );
                break;
            }


            if( _dbg_withtrace )
                __dbg_print( "\tError recovery succeeded, continuing" );
        }
        
        /*
        if( act == 52 )
            break;
        */
        
        
        //Shift
        if( act > 0 )
        {            
            if( _dbg_withtrace )
                __dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
        
            sstack.push( act );
            vstack.push( info.att );
            
            la = __lex( info );
            
            if( _dbg_withtrace )
                __dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
        }
        //Reduce
        else
        {        
            act *= -1;
            
            if( _dbg_withtrace )
                __dbg_print( "Reducing by producution: " + act );
            
            rval = void(0);
            
            if( _dbg_withtrace )
                __dbg_print( "\tPerforming semantic action..." );
            
switch( act )
{
    case 0:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 1:
    {
         result['formula'] = vstack[ vstack.length - 1 ]; 
    }
    break;
    case 2:
    {
         rval = vstack[ vstack.length - 3 ].toString() + '+' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 3:
    {
         rval = vstack[ vstack.length - 3 ].toString() + '-' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 4:
    {
         rval = vstack[ vstack.length - 3 ].toString() + '*' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 5:
    {
         rval = vstack[ vstack.length - 2 ].toString() + '*' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 6:
    {
         rval = vstack[ vstack.length - 3 ].toString() + '/' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 7:
    {
         rval = '(-1)*' + vstack[ vstack.length - 1 ].toString(); 
    }
    break;
    case 8:
    {
         rval = 'Math.floor(' + vstack[ vstack.length - 2 ].toString() + ')'; 
    }
    break;
    case 9:
    {
         rval = '(' + vstack[ vstack.length - 2 ].toString() + ')'; 
    }
    break;
    case 10:
    {
         rval = '(' + vstack[ vstack.length - 2 ].toString() + ')'; 
    }
    break;
    case 11:
    {
         rval = 'Math.pow(' + vstack[ vstack.length - 3 ].toString() + ',' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 12:
    {
         rval = 'Math.pow(' + vstack[ vstack.length - 3 ].toString() + ',' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 13:
    {
         rval = 'Math.abs(' + vstack[ vstack.length - 2 ].toString() + ')'; 
    }
    break;
    case 14:
    {
         rval = 'Math.asin(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 15:
    {
         rval = 'Math.acos(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 16:
    {
         rval = 'Math.atan(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 17:
    {
         rval = 'Math.sin(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 18:
    {
         rval = 'Math.cos(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 19:
    {
         rval = 'Math.tan(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 20:
    {
         rval = 'Math.exp(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 21:
    {
         rval = 'Math.log(' + vstack[ vstack.length - 1 ].toString() + ')'; 
    }
    break;
    case 22:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 23:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
    case 24:
    {
         rval = 'Math.PI'; 
    }
    break;
    case 25:
    {
         rval = 'Math.E'; 
    }
    break;
    case 26:
    {
        rval = vstack[ vstack.length - 1 ];
    }
    break;
}



            if( _dbg_withtrace )
                __dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
                
            for( var i = 0; i < pop_tab[act][1]; i++ )
            {
                sstack.pop();
                vstack.pop();
            }
                                    
            go = -1;
            for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
            {
                if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
                {
                    go = goto_tab[sstack[sstack.length-1]][i+1];
                    break;
                }
            }
            
            if( act == 0 )
                break;
                
            if( _dbg_withtrace )
                __dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
                
            sstack.push( go );
            vstack.push( rval );            
        }
        
        if( _dbg_withtrace )
        {        
            alert( _dbg_string );
            _dbg_string = new String();
        }
    }

    if( _dbg_withtrace )
    {
        __dbg_print( "\nParse complete." );
        alert( _dbg_string );
    }
    
    result['err_cnt'] = err_cnt;
    return result;
}

function check(formula) {
    var error_offsets = new Array();
    var error_lookaheads = new Array();
    var result = __parse( formula, error_offsets, error_lookaheads );
    var str = formula['formula'];
    var error_count = result['err_cnt'];
    if( error_count > 0 ) {
        var errstr = new String();
        for( var i = 0; i < error_count; i++ )
            errstr += "Parse error in line " + 
                ( str.substr( 0, error_offsets[i] ).match( /\n/g ) ? 
                 str.substr( 0, error_offsets[i] ).match( /\n/g ).length :
                 1 ) +
                    " near \"" + str.substr( error_offsets[i] ) + 
                        "\", expecting \"" + error_lookaheads[i].join() + 
                            "\"\n" ;
        alert( errstr );
    }
    return result['formula'];
}