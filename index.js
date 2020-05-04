function predictCases()
{
  var nOC = document.getElementById("noOfCases").value;
  var nOW = document.getElementById('weekNo').value;
  var predictedCases = nOC*(nOW - 1)*8.5;
  document.getElementById('showOP').innerHTML = '<h3>The total number of cases in India are predicted to be around' + " " + predictedCases + " " + 'for the week you expect.</h3>';
}

function dark()
{
	document.getElementById('div1').style.backgroundColor = "#ffb84d";
	document.getElementById('para').style.backgroundColor = "#262626";	
	document.getElementById('para').style.color = "#fff";
	document.getElementById('main').style.backgroundColor = "#000";
	document.getElementById('main').style.color = "#fff";
	document.getElementById('div2').style.backgroundColor = "#ff9900";
	document.getElementById('div3').style.backgroundColor = "#cc7a00";
	//document.getElementById('divx').style.backgroundColor = "#ff3300";
	//document.getElementById('div4').style.backgroundColor = "#ffa31a";
	//document.getElementById('div5').style.backgroundColor = "#e68a00";
	document.getElementById('jumbo').style.backgroundColor = "#404040";
	document.getElementById('jumbo2').style.backgroundColor = "#000";
	document.getElementById('divch').style.backgroundColor = "#cc0000";
	document.getElementById('cardb').style.backgroundColor = "#000";
	document.getElementById('cardb').style.color = "#fff";
}

function light()
{
	document.getElementById('div1').style.backgroundColor = "#ccccff";
	document.getElementById('para').style.backgroundColor = "#f0f5f5";	
	document.getElementById('para').style.color = "#000";
	document.getElementById('main').style.backgroundColor = "#fff";
	document.getElementById('main').style.color = "#000";
	document.getElementById('div2').style.backgroundColor = "#9999ff";
	document.getElementById('div3').style.backgroundColor = "#6666ff";
	document.getElementById('divx').style.backgroundColor = "#ff0000";
	document.getElementById('div4').style.backgroundColor = "#3333ff";
	document.getElementById('div5').style.backgroundColor = "#0000e6";
	document.getElementById('jumbo').style.backgroundColor = "#f0f5f5";
	document.getElementById('jumbo2').style.backgroundColor = "#f0f5f5";
	document.getElementById('divch').style.backgroundColor = "#2929a3";
	document.getElementById('cardb').style.backgroundColor = "#f0f5f5";
	document.getElementById('cardb').style.color = "#000";
}