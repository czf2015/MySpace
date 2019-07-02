/**
 * 特点：
 *
 * 1、首先利用XPathEvaluator，创造一个实例，然后调用该实例的evaluate方法，该方法可以根据参数返回节点情况或节点信息。
 * 2、为该方法传递5个参数，（XPath表达式，上下文节点，命名空间求解器（一般null），返回的结果类型，保存结果的XPathResult对象（null））
 * 3、返回的结果类型有很多种，最常用的一个是：返回匹配的节点集合，另一个是：返回只包含一个节点的节点集合。
 * 单一节点：XPathResult.FIRST_ORDERED_NODE_TYPE
 * 节点集合：XPathResult.ORDERED_NODE_ITERATOR_TYPE
 * 4、.singleNodeValue可以通过结果的这个属性来返回匹配节点
 */
//获取单一节点
var eva = new XPathEvaluator();
var result = eva.evaluate('root/user', xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

if (result != null) {
  alert(serializeXML(result.singleNodeValue));
}
//获取节点集合
var eva = new XPathEvaluator();
var result = eva.evaluate('root/user', xmlDom, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

if (result != null) {
  var nodes = [];
  var node = result.iterateNext();

  while (node != null) {
    nodes.push(node);
    node = result.iterateNext();
  }
}

alert(serializeXML(nodes[1]));

//跨浏览器单一节点
function selectSingleNode(xmlDom, xpath){
  var node = null;

  if (typeof xmlDom.evaluate != 'undefined') {//DOM3
    var pattern = /[(\d+)]/;
    var flag = xpath.match(pattern);
    var num = 0;

    if (flag != null) {
      num = parseInt(RegExp.$1)+1;
      xpath = xpath.replace(pattern,'['+num+']')
    }

    var result = xmlDom.evaluate(xpath, xmlDom, null, XPathResult.FIRST_ORDERED_NODE_TYPE, ull);
    
    if (result != null) {
      node = result.singleNodeValue;
    }
  }else if(typeof xmlDom.selectSingleNode != 'undefined'){//IE
    node = xmlDom.selectSingleNode(xpath);
  }

  return node;
}

//跨浏览器节点集合
function selectNodes(xmlDom,xpath) {
  var nodes = [];

  if (typeof xmlDom.evaluate != 'undefined') {//DOM3
    var pattern = /[(\d+)]/;
    var flag = xpath.match(pattern);
    var num = 0;

    if (flag != null) {
      num = parseInt(RegExp.$1) + 1;
      xpath = xpath.replace(pattern, '['+num+']')
    }

    var result = xmlDom.evaluate(xpath, xmlDom, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

    if (result != null) {
      var node = null;
      while ((node = result.iterateNext()) != null) {
        nodes.push(node);
      }
    }
  } else if (typeof xmlDom.selectSingleNode != 'undefined') {//IE
    nodes = xmlDom.selectNodes(xpath);
  }

  return nodes;
}

var node = selectSingleNode(xmlDom, 'root/user[0]');
var nodes = selectNodes(xmlDom, 'root/user');
alert(serializeXML(nodes[1]))