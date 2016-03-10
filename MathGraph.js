var doc = document;
var canvas;
var context;
var size;
var origin;

window.onload = function() {
  canvas = document.getElementById("MathGraph");
  context = canvas.getContext('2d');
  size = {
    'height': parseInt(canvas.height), 
    'width': parseInt(canvas.width)
  };
  origin = [size['width'] / 2, size['height'] / 2];
  drawAll();
  doc.getElementById('zoomIn').ontouchstart = function () {
    zoom(2);
  }
  doc.getElementById('zoomOut').ontouchstart = function () {
    zoom(0.5);
  }
  doc.getElementById('add').ontouchstart = function () {
    var newDiv = doc.createElement('div');
    newDiv.innerHTML = 'y = <input type=\'text\' name=\'explicit\' value=\'\' /><button type="button" ontouchstart=\'removeSet(this);\' name=\"remove\"><span class="fa fa-trash-o" name="remove"></span></button>';
    doc.getElementById('explicitFunctions').appendChild(newDiv);
  }
  addRemoveFunction(doc.getElementsByName('remove'));
  doc.getElementById('addParametric').ontouchstart = function () {
    var newDiv = doc.createElement('div');
    newDiv.innerHTML = 'x = <input type=\'text\' name=\'parametricX\' value=\'t\' /><br />y = <input type=\'text\' name=\'parametricY\' value=\'\' /><br />t = [ <input type=\'number\' name=\'parameterMax\' class=\'value\' value=\'\' />, <input type=\'number\' name=\'parameterMin\' class=\'value\' value=\'\' /> ]';
    doc.getElementById('parametricFunctions').appendChild(newDiv);
  }
  var doms = doc.getElementsByClassName("panelButton");
  for (var i = 0; i < doms.length; ++i) {
    doms[i].ontouchstart = function () {
      console.log(1);
      var button = this;
      if (button.classList.contains('active')) return;
      var buttons = doc.getElementsByClassName('panelButton');
      for (var i = 0; i < buttons.length; ++i) buttons[i].classList.remove('active');
      button.classList.add('active');
      var panelId = button.getAttribute('data-panel-id');
      var doms = doc.getElementsByClassName("panel");
      for (var i = 0; i < doms.length; ++i) doms[i].classList.remove('active');
      doc.getElementById(panelId).classList.add('active');
    }
  }
  

}
function addRemoveFunction(buttons) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].ontouchstart = function () {
      var targetNode = this.parentNode;
      targetNode.parentNode.removeChild(targetNode);
    };
  }
}
function removeSet(node) {
  var targetNode = node.parentNode;
  targetNode.parentNode.removeChild(targetNode);
}
var style = {
}
var lineInterval = [5, 5];
var subLineDistance = [10, 10];
var density = [1, 1];
var unit = [1, 1];
var Statuses = [
  'Success',
  'Nothing',
  'IllegalLetter',
  'ParenthesisEmpty',
  'ParenthesisOrder',
  'ParenthesisNumber',
  'ErrorBegin',
  'ErrorEnd',
  'TwoOperators',
  'TooMuch',
  'TwoDots'
];
var Messages = [
  "成功",
  "式がありません。",
  "式に不適切な文字が含まれています。",
  "括弧の中が空です。",
  "括弧の順序が間違っています。",
  "括弧の数が一致しません。",
  "最初の文字に問題があります。",
  "最後の文字に問題があります。",
  "演算子が連続しています。",
  "式が長すぎます。",
  "小数点が正しくありません。",
  "式を正しく入力してください。"
];
function zoom(rate) {
  subLineDistance[0] *= rate;
  subLineDistance[1] *= rate;
  drawAll();
}
function checkExpression(equation, pattern) {
  equation = equation.replace(/\(\)/g, '');
  if (equation == '') {
    return [Statuses.indexOf('Success'), ''];
    //return [Statuses.indexOf('Nothing'), ''];
  }
  /*
  switch (pattern) {
    case 'explicit':
      if (-1 === equation.search(/^([\(\)\^\dx\.\*\+\-\/]|pi|e|exp|)+$/)) {
        return [Statuses.indexOf('IllegalLetter'), ''];
      }
      break;
    case 'parametric':
      if (-1 === equation.search(/^([\(\)\^\dt\.\*\+\-\/]|pi|e)+$/)) {
        return [Statuses.indexOf('IllegalLetter'), ''];
      }
  }
  */
  if (-1 !== equation.search(/\.\d\./)) {
    return [Statuses.indexOf('TwoDots'), ''];
  }
  //if (-1 !== equation.search(/\(\)/)) {
  //  return [Statuses.indexOf('ParenthesisEmpty'), ''];
  //}
  if (-1 !== equation.search(/^[\*\/)]/)) {
    return [Statuses.indexOf('ErrorBegin'), ''];
  }
  if (-1 !== equation.search(/[\+\-\*/\(]$/)) {
    return [Statuses.indexOf('ErrorEnd'), ''];
  }
  if (-1 !== equation.search(/[\*\+\-\/\^]{2}/)) {
    return [Statuses.indexOf('TwoOperators'), ''];
  }
  var parenthesisDepth = 0;
  var cursor = 0;
  var resultChars = [];
  for (var i = 0; i < equation.length; i++) {
    resultChars[cursor++] = equation[i];
    switch(equation[i]) {
      case '(':
        if (-1 !== equation[i + 1].search(/[\*\/\^]/)) {
          return [Statuses.indexOf('ParenthesisOperator'), ''];
        }
        parenthesisDepth++;
        if (i > 0 &&  -1 !== equation[i - 1].search(/[\)\dtxei]/)) {
          resultChars[cursor - 1] = '*';
          resultChars[cursor++] = '(';
        }
        break;
      case ')':
        if (-1 !== equation[i - 1].search(/[\+\-\*\/\^]/)) {
          return [Statuses.indexOf('ParenthesisOperator'), ''];
        }
        parenthesisDepth--;
        if (i < equation.length - 1 &&  -1 !== equation[i + 1].search(/[\)\dtxep]/)) {
          resultChars[cursor++] = '*';
        }
    }
    if (parenthesisDepth < 0) {
      return [Statuses.indexOf('ParenthesisOrder'), ''];
    }
  }
  if (parenthesisDepth !== 0) {
    return [Statuses.indexOf('ParenthesDepth'), ''];
  }
  resultExpression = resultChars.join('');
  return [Statuses.indexOf('Success'), resultExpression];
}
/*
function makeExpressionAvailable(expression) {
  var resultExpression = expression.replace(/pi/g, 'Math.PI');
  resultExpression = resultExpression.replace(/e/g, 'Math.E');
  return resultExpression;
}
*/
function convertExpression(expression, pattern) {
  expression = minimizeExpression(expression);
  var checkedValue = checkExpression(expression, pattern);
  if (checkedValue[0] !== Statuses.indexOf('Success')) {
    throw new Error(Messages[checkedValue[0]]);
  }
  return checkedValue[1];
}
function drawAll() {
  try {
    // check explicit functions
    var explicits = doc.getElementsByName('explicit');
    var explicitFormulas = [];
    for (var i = 0; i < explicits.length; i++) {
      explicitFormulas[i] = convertExpression(explicits[i].value, 'explicit');
      if (explicitFormulas[i] == '') continue;
      explicitFormulas[i] = check(explicitFormulas[i]);
    }
    // check parametric functions
    var in_parametrics = doc.getElementsByName('parametric');
    var in_parametricXs = doc.getElementsByName('parametricX');
    var in_parametricYs = doc.getElementsByName('parametricY');
    var in_parameterMaxs = doc.getElementsByName('parameterMax');
    var in_parameterMins = doc.getElementsByName('parameterMin');
    var parametricXs = [], parametricYs = [];
    var parameterDomains = [];
    for (var i = 0; i < in_parametricXs.length; i++) {
      parametricXs[i] = convertExpression(in_parametricXs[i].value, 'parametric');
      parametricYs[i] = convertExpression(in_parametricYs[i].value, 'parametric');
      parameterDomains[i] = [
        minimizeExpression(in_parameterMins[i].value, 'parametric'),
        minimizeExpression(in_parameterMaxs[i].value, 'parametric')
      ];
      if (parameterDomains[i][0] > parameterDomains[i][0]) {
        throw new Error('');
      }
    }
  } catch (e) {
    alert(e.message);
    return;
  }
  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawSheet(1, origin, context);
  // draw explicit functions
  for (var i = 0; i < explicitFormulas.length; i++) {
    if (explicitFormulas[i] != '') {
      drawGraph(context, explicitFormulas[i]);
    }
  }
  // draw parametric functions
  for (var i = 0; i < parametricXs.length; i++) {
    if (parametricXs[i] != '' && parametricYs[i] != '' && parameterDomains[i][0] != '' && parameterDomains[i][1] != '') {
      drawParametricGraph(parametricXs[i], parametricYs[i], parameterDomains[i]);
    }
  }
}
function convertToCanvasPosition(position) {
  var canvasPosition = [0, 0];
  if (position[0] !== undefined && isFinite(position[0])) {
    canvasPosition[0] = origin[0] + position[0] * subLineDistance[0] / unit[0];
  } else {
    canvasPosition[0] = context.width;
  }
  if (position[1] !== undefined && isFinite(position[1])) {
    canvasPosition[1] = origin[1] - position[1] * subLineDistance[1] / unit[1];
  } else {
    canvasPosition[1] = context.height;
  }
  return canvasPosition;
}
/**
 * convert canvas position to math values
 */
function convertToMathPosition(position) {
  var mathPosition = [0, 0];
  mathPosition[0] = (position[0] - origin[0]) * unit[0] / subLineDistance[0];
  mathPosition[1] = - (position[1] - origin[1]) * unit[1] / subLineDistance[1];
  return mathPosition;
}
/**
 * calculate canvas y
 * from canvas x and expression
 */
function cy(cx, expression) {
  var x = convertToMathPosition([cx, 0])[0];
  var my = eval(expression);
  return convertToCanvasPosition([0, my])[1];
}
function parametricExpressionValue(expression, t) {
  return eval(expression);
}
function my(x, expression) {
  return eval(expression);
}
function minimizeExpression(targetExpression) {
  return targetExpression.toString().replace(/[\s　]/g, '');
}
function drawGraph(ctx, explicit) {
  ctx.beginPath();
  applyGraphStyle(ctx);
  var beginPoint = [0, 0], endPoint = [0, 0];
  var middlePoint = [0, 0];
  var minX = convertToMathPosition([0, 0])[0];
  var maxX = convertToMathPosition([canvas.width, 0])[0];

  var first = true;
  var flg = true;
  //for (beginPoint[0] = minX; beginPoint[0] < maxX; beginPoint[0] += density[0]) {
  //  beginPoint[1] = my(beginPoint[0], explicit);
  //  middlePoint = convertToCanvasPosition(beginPoint);
  //  if (!first) {
  //    drawLine(ctx, middlePoint, endPoint);
  //  } else {
  //    first = false;
  //  }
  //  endPoint[0] = middlePoint[0];
  //  endPoint[1] = middlePoint[1];
  //}
  for (beginPoint[0] = 0; beginPoint[0] < size['width']; beginPoint[0] += density[0]) {
    beginPoint[1] = cy(beginPoint[0], explicit);
    if (!first) {
      drawLine(ctx, beginPoint, endPoint);
    } else {
      first = false;
    }
    endPoint[0] = beginPoint[0];
    endPoint[1] = beginPoint[1];
  }
  ctx.stroke();
}
function drawParametricGraph(expressionX, expressionY, parameterDomain) {
  context.beginPath();
  applyGraphStyle(context);
  var beginPoint = [0, 0], endPoint = [0, 0];
  var t = 0;
  var first = true;
  var i = 0;
  for (t = parseFloat(parameterDomain[0]); t <= parseFloat(parameterDomain[1]); t += 0.1) {
    // console.log(t)
    beginPoint[0] = parametricExpressionValue(expressionX, t);
    beginPoint[1] = parametricExpressionValue(expressionY, t);
    // console.log('m ' + beginPoint[0] + ' / ' + beginPoint[1]);
    beginPoint = convertToCanvasPosition(beginPoint);
    // console.log('c ' + beginPoint[0] + ' / ' + beginPoint[1]);
    if (!first) {
      drawLine(context, beginPoint, endPoint);
    } else {
      first = false;
    }
    endPoint[0] = beginPoint[0];
    endPoint[1] = beginPoint[1];
  }
  context.stroke();
}
function drawSheet(zoom, origin, ctx) {
  // Draw Sub Line
  ctx.beginPath();
  applySubLineStyle(ctx);
  for (var i = 1; i * subLineDistance[1] + origin[1] <= size['height']; i++) {
    drawLine(ctx, [0, i * subLineDistance[1] + origin[1]], [size['width'], i * subLineDistance[1] + origin[1]]);
  }
  for (var i = 1; - i * subLineDistance[1] + origin[1] >= 0; i++) {
    drawLine(ctx, [0, - i * subLineDistance[1] + origin[1]], [size['width'], - i * subLineDistance[1] + origin[1]]);
  }
  for (var i = 1; i * subLineDistance[0] + origin[0] <= size['width']; i++) {
    drawLine(ctx, [i * subLineDistance[0] + origin[0], 0], [i * subLineDistance[0] + origin[0], size['height']]);
  }
  for (var i = 1; - i * subLineDistance[0] + origin[0] >=  0; i ++) {
    drawLine(ctx, [- i * subLineDistance[0] + origin[0], 0], [- i * subLineDistance[0] + origin[0], size['height']]);
  }
  ctx.stroke();
  // Draw Line
  ctx.beginPath();
  applyLineStyle(ctx);
  for (var i = 0; i * subLineDistance[1] + origin[1] <= size['width']; i += lineInterval[1]) {
    drawLine(ctx, [0, i * subLineDistance[1] + origin[1]], [size['width'], i * subLineDistance[1] + origin[1]]);
  }
  for (var i = 0; - i * subLineDistance[1] + origin[1] >= 0; i += lineInterval[1]) {
    drawLine(ctx, [0, - i * subLineDistance[1] + origin[1]], [size['width'], - i * subLineDistance[1] + origin[1]]);
  }
  for (var i = 0; i * subLineDistance[0] + origin[0] <= size['height']; i += lineInterval[0]) {
    drawLine(ctx, [i * subLineDistance[0] + origin[0], 0], [i * subLineDistance[0] + origin[0], size['height']]);
  }
  for (var i = 0; - i * subLineDistance[0] + origin[0] >= 0; i += lineInterval[0]) {
    drawLine(ctx, [- i * subLineDistance[0] + origin[0], 0], [- i * subLineDistance[0] + origin[0], size['height']]);
  }
  drawLine
  ctx.stroke();
  // Draw Axis
  ctx.beginPath();
  applyAxisStyle(ctx);
  drawLine(ctx, [origin[0], 0], [origin[0], size['width']]);
  drawLine(ctx, [0, origin[1]], [size['height'], origin[1]]);
  ctx.stroke();
} 
function drawLine(ctx, startPosition, endPosition) {
  ctx.moveTo(startPosition[0], startPosition[1]);
  ctx.lineTo(endPosition[0], endPosition[1]);
}
function applyAxisStyle (ctx) {
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 1;
}
function applyGraphStyle (ctx) {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
}
function applySubLineStyle(ctx) {
  ctx.strokeStyle = 'lightblue';
  ctx.lineWidth = 0.5;
}
function applyLineStyle(ctx) {
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 0.8;
}