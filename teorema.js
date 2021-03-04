function do_things() {
  var a = parseFloat(document.getElementById("hipotenusa").value);
  var b = parseFloat(document.getElementById("cateto_oposto").value);
  var c = parseFloat(document.getElementById("cateto_adjacente").value);
  var output = document.getElementById("output");

  if (a=0, b>0){
    var c = Math.sqrt(c*c - b*b)
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(c);              // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("output").appendChild(node);
  } else if (c=0, b>0){
    var c = Math.sqrt(a*a + b*b)
    console.log(0)
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(c);              // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("output").appendChild(node);
  }
}