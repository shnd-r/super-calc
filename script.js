// Select the node that will be observed for mutations
// create an observer instance
// Select the node that will be observed for mutations
//var targetNode = document.querySelector('flash');

var node = document.createElement("div");                 // Create a <li> node
node.setAttribute("id", "overlay");
node.style.position="fixed";
node.style.display="none";
node.style.width="100%"
node.style.height="100%"
node.style.top="0";
node.style.left="0";
node.style.right="0";
node.style.bottom="0";
node.style.left="0";
node.style.background="rgba(255,255,0,0.8)";
node.style.zIndex="2";
node.style.cursor=" pointer";

document.body.appendChild(node);

//document.body.innerHTML+=divdis;
console.log (123);

// Select the node that will be observed for mutations
// create an observer instance
// Select the node that will be observed for mutations
//var targetNode = document.getElementById('flash');
var targetNode = document.querySelector('.flash');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
  let obj=document.getElementById("overlay");
  console.log (obj);
  obj.style.display="block";
  setTimeout(function(){   obj.style.display="none"; }, 2000);

};


// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
