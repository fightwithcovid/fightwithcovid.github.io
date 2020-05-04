function light()
{
	document.getElementById('main').style.backgroundColor = "#f0f5f5";
	document.getElementById('main').style.color = "#000";
	document.getElementById('chng').style.backgroundColor = "#f0f5f5";
	document.getElementById('chng').style.color = "#000";
	document.getElementById('chng1').style.backgroundColor = "#f0f5f5";
	document.getElementById('chng1').style.color = "#000";
	document.getElementById('chng2').style.backgroundColor = "#f0f5f5";
	document.getElementById('chng2').style.color = "#000";
}
function dark()
{
	document.getElementById('main').style.backgroundColor = "#000";
	document.getElementById('main').style.color = "#fff";
	document.getElementById('chng').style.backgroundColor = "#404040";
	document.getElementById('chng').style.color = "#fff";
	document.getElementById('chng1').style.backgroundColor = "#404040";
	document.getElementById('chng1').style.color = "#fff";
	document.getElementById('chng2').style.backgroundColor = "#404040";
	document.getElementById('chng2').style.color = "#fff";
}

function Hnos(){	
	var x = document.getElementById('state').value;
	var arr =
	[
		{
			no: 'Andhra Pradesh',
			ph: '0866-2410978'
		},
		{
			no: 'Arunachal Pradesh',
			ph: '9436055743'
		},
		{
			no: 'Assam',
			ph: '6913347770'
		},
		{
			no: 'Bihar',
			ph: '104'
		},
		{
			no: 'Chhattisgarh',
			ph: '104'
		},
		{
			no: 'Goa',
			ph: '104'
		},
		{
			no: 'Gujarat',
			ph: '104'
		},
		{
			no: 'Haryana',
			ph: '8558893911'
		},
		{
			no: 'Himachal Pradesh',
			ph: '104'
		},
		{
			no: 'Jharkhand',
			ph: '104'
		},
		{
			no: 'Karnataka',
			ph: '104'
		},
		{
			no: 'Kerala',
			ph: '0471-2552056'
		},
		{
			no: 'Madhya Pradesh',
			ph: '104'
		},
		{
			no: 'Maharashtra',
			ph: '020-26127394'
		},
		{
			no: 'Manipur',
			ph: '3852411668'
		},
		{
			no: 'Meghalaya',
			ph: '108'
		},
		{
			no: 'Mizoram',
			ph: '102'
		},
		{
			no: 'Nagaland',
			ph: '7005539653'
		},
		{
			no: 'Odisha',
			ph: '9439994859'
		},
		{
			no: 'Punjab',
			ph: '104'
		},
		{
			no: 'Rajasthan',
			ph: '0141-2225624'
		},
		{
			no: 'Sikkim',
			ph: '104'
		},
		{
			no: 'Tamil Nadu',
			ph: '044-29510500'
		},
		{
			no: 'Telangana',
			ph: '104'
		},
		{
			no: 'Tripura',
			ph: '0381-2315879'
		},
		{
			no: 'Uttarakhand',
			ph: '104'
		},
		{
			no: 'Uttar Pradesh',
			ph: '18001805145'
		},
		{
			no: 'West Bengal',
			ph: '1800313444222, 03323412600'
		},
		{
			no: 'Andaman and Nicobar Islands',
			ph: '03192-232102'
		},
		{
			no: 'Chandigarh',
			ph: '9779558282'
		},
		{
			no: 'Dadra and Nagar Haveli',
			ph: '104'
		},
		{
			no: 'Daman & Diu',
			ph: '104'
		},
		{
			no: 'Delhi',
			ph: '011-22307145'
		},
		{
			no: 'Jammu & Kashmir ',
			ph: '01912520982,0194-2440283'
		},
		{
			no: 'Ladakh',
			ph: '01982256462'
		},
		{
			no: 'Lakshadweep',
			ph: '104'
		},
		{
			no: 'Puducherry',
			ph: '104'
		}
	];

	if (x == 'Andhra Pradesh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[0].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[0].ph + '</h3>';
	}
	else if (x == 'Arunachal Pradesh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[1].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[1].ph + '</h3>';
	}
	else if (x == 'Assam') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[2].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[2].ph + '</h3>';
	}
	else if (x == 'Bihar') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[3].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[3].ph + '</h3>';;
	}
	else if (x == 'Chhattisgarh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[4].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[4].ph + '</h3>';;
	}
	else if (x == 'Goa') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[5].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[5].ph + '</h3>';;
	}
	else if (x == 'Gujarat') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[6].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[6].ph + '</h3>';;
	}
	else if (x == 'Haryana') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[7].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[7].ph + '</h3>';;
	}
	else if (x == 'Himachal Pradesh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[8].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[8].ph + '</h3>';;
	}
	else if (x == 'Jharkhand') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[9].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[9].ph + '</h3>';;
	}
	else if (x == 'Karnataka') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[10].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[10].ph + '</h3>';;
	}
	else if (x == 'Kerala') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[11].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[11].ph + '</h3>';;
	}
	else if (x == 'Madhya pradesh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[12].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[12].ph + '</h3>';;
	}
	else if (x == 'Maharashtra') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[13].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[13].ph + '</h3>';;
	}
	else if (x == 'Manipur') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[14].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[14].ph + '</h3>';;
	}
	else if (x == 'Meghalaya') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[15].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[15].ph + '</h3>';;
	}
	else if (x == 'Mizoram') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[16].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[16].ph + '</h3>';;
	}
	else if (x == 'Nagaland') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[17].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[17].ph + '</h3>';;
	}
	else if (x == 'Odisha') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[18].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[18].ph + '</h3>';;
	}
	else if (x == 'Punjab') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[19].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[19].ph + '</h3>';;
	}
	else if (x == 'Rajasthan') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[20].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[20].ph + '</h3>';;
	}
	else if (x == 'Sikkim') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[21].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[21].ph + '</h3>';;
	}
	else if (x == 'Tammil nadu') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[22].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[22].ph + '</h3>';;
	}
	else if (x == 'Telangana') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[23].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[23].ph + '</h3>';;
	}
	else if (x == 'Tripura') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[24].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[24].ph + '</h3>';;
	}
	else if (x == 'Uttarakhand') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[25].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[25].ph + '</h3>';;
	}
	else if (x == 'Uttar pradesh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[26].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[26].ph + '</h3>';;
	}
	else if (x == 'West bengal') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[27].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[27].ph + '</h3>';;
	}
	else if (x == 'Andaman And Nicobar Islands') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[28].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[28].ph + '</h3>';;
	}
	else if (x == 'Chandigarh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[29].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[29].ph + '</h3>';;
	}
	else if (x == 'Dadra And Nagar Haveli') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[30].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[30].ph + '</h3>';;
	}
	else if (x == 'Daman And Diu') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[31].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[31].ph + '</h3>';;
	}
	else if (x == 'Delhi') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[32].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[32].ph + '</h3>';;
	}
	else if (x == 'Jammu and Kashmir') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[33].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[33].ph + '</h3>';;
	}
	else if (x == 'Ladakh') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[34].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[34].ph + '</h3>';;
	}
	else if (x == 'Lakshadweep') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[35].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[35].ph + '</h3>';;
	}
	else if (x == 'Puducherry') {
		document.getElementById('new').innerHTML = '<h3> State:' + ' ' + arr[36].no + '.' + ' ' + 'Helpline Number:' + ' ' + arr[36].ph + '</h3>';;
	}
	else
	{
		document.getElementById('new').innerHTML = 'Invalid entry';
	}
}

function probab() {
	var sum = 0;
	var age = document.getElementById('age').value;

	var troub_breath =document.getElementById('troub_breath').value;
	var diab = document.getElementById('diab').value;
	var bp = document.getElementById('b_pres').value;
	var fever =  document.getElementById('fever').value;
	var d_cough =  document.getElementById('d_cough').value;
	var tire =  document.getElementById('tire').value;
	var n_congest =  document.getElementById('n_congest').value;
	var diarr =  document.getElementById('diarr').value;
	var c_in_apt =  document.getElementById('c_in_apt').value;
	var pres_chest =  document.getElementById('pres_chest').value;
	var travel =  document.getElementById('travel').value;

	
	if (age >=1 && age <= 20) 
	{
		document.getElementById('new1').innerHTML = '<h3> 9 % Covid 19 patients belong to your age group </h3>'
	}
	else if (age >= 21 && age <= 40) 
	{
		document.getElementById('new1').innerHTML = '<h3> 42 % Covid 19 patients belong to your age group </h3>'
	}
	else if (age >= 41 && age <= 60) 
	{
		document.getElementById('new1').innerHTML = '<h3> 33 % Covid 19 patients belong to your age group </h3>'
	}
	else 
	{
		document.getElementById('new1').innerHTML = '<h3> 17 % Covid 19 patients belong to your age group </h3>'
	}

	if (troub_breath == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (diab == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (bp == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (fever == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (d_cough == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (tire == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (n_congest == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}	
	if (diarr == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (c_in_apt == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}	
	if (pres_chest == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}
	if (travel == 'Yes') 
	{
		sum += 1;
	}
	else
	{
		sum += 0;
	}

	var percent_risk = (sum * 100)/11;
	document.getElementById('new2').innerHTML = percent_risk;

	if (percent_risk >= 75) 
	{
		document.getElementById('new2').innerHTML = '<h3> Percentage Risk:' + ' ' + percent_risk + ' ' + '%.' +' ' + 'It is critical. </h3>' ;
	}
	else if (percent_risk >= 50) 
	{
		document.getElementById('new2').innerHTML = '<h3> Percentage Risk:' + ' ' + percent_risk + '%.' + ' ' +' ' + 'You are at high risk. </h3>' ;
	}
	else if (percent_risk >= 25) 
	{
		document.getElementById('new2').innerHTML = '<h3> Percentage Risk:' + ' ' + percent_risk + '%.' + ' ' +' ' + 'You are at medium risk. </h3>' ;
	}
	else if (percent_risk >= 1) 
	{
		document.getElementById('new2').innerHTML = '<h3> Percentage Risk:' + ' ' + percent_risk + '%.' +' ' + 'You are at low risk. </h3>';
	}
	else
	{
		document.getElementById('new2').innerHTML = '<h3> Percentage Risk:' + ' ' + percent_risk + '%.' + ' ' + 'You are safe. </h3>';
	}

	document.getElementById("new1").style.fontFamily = "Roboto Condensed";
	document.getElementById("new2").style.fontFamily = "Roboto Condensed";
	document.getElementById("new").style.fontFamily = "Roboto Condensed";
}