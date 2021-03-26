
	async function getState() {
	const jsonData = await fetch('https://api.covid19india.org/data.json');

	const jsdatas = await jsonData.json();
	console.log(jsdatas.statewise[8]);
	 document.getElementById("cnf").textContent = jsdatas.statewise[8].confirmed;
	 document.getElementById("act").textContent = jsdatas.statewise[8].active;
	 document.getElementById("rec").textContent = jsdatas.statewise[8].recovered;
	 document.getElementById("det").textContent = jsdatas.statewise[8].deaths;
	  document.getElementById("update").textContent = jsdatas.statewise[8].lastupdatedtime;
	 
	};
	getState()


	
async function getApi() {
	const jsonData = await fetch('https://api.covid19india.org/v2/state_district_wise.json');

	const jsdata = await jsonData.json();
	
	 document.getElementById("bankuraC").textContent = jsdata[36].districtData[1].confirmed;
	  document.getElementById("bankura").textContent = jsdata[36].districtData[1].district;
	  document.getElementById("bankuraA").textContent = jsdata[36].districtData[1].active;
	  document.getElementById("bankuraR").textContent = jsdata[36].districtData[1].recovered;
	  document.getElementById("bankuraD").textContent = jsdata[36].districtData[1].deceased;


       document.getElementById("birbhumC").textContent = jsdata[36].districtData[2].confirmed;
	  document.getElementById("birbhum").textContent = jsdata[36].districtData[2].district;
	  document.getElementById("birbhumA").textContent = jsdata[36].districtData[2].active;
	  document.getElementById("birbhumR").textContent = jsdata[36].districtData[2].recovered;
	  document.getElementById("birbhumD").textContent = jsdata[36].districtData[2].deceased;


       document.getElementById("chbiharC").textContent = jsdata[36].districtData[3].confirmed;
	  document.getElementById("chbihar").textContent = jsdata[36].districtData[3].district;
	  document.getElementById("chbiharA").textContent = jsdata[36].districtData[3].active;
	  document.getElementById("chbiharR").textContent = jsdata[36].districtData[3].recovered;
	  document.getElementById("chbiharD").textContent = jsdata[36].districtData[3].deceased;


       document.getElementById("ddpurC").textContent = jsdata[36].districtData[4].confirmed;
	  document.getElementById("ddpur").textContent = jsdata[36].districtData[4].district;
	  document.getElementById("ddpurA").textContent = jsdata[36].districtData[4].active;
	  document.getElementById("ddpurR").textContent = jsdata[36].districtData[4].recovered;
	  document.getElementById("ddpurD").textContent = jsdata[36].districtData[4].deceased;


       document.getElementById("darjeelingC").textContent = jsdata[36].districtData[5].confirmed;
	  document.getElementById("darjeeling").textContent = jsdata[36].districtData[5].district;
	  document.getElementById("darjeelingA").textContent = jsdata[36].districtData[5].active;
	  document.getElementById("darjeelingR").textContent = jsdata[36].districtData[5].recovered;
	  document.getElementById("darjeelingD").textContent = jsdata[36].districtData[5].deceased;

	  document.getElementById("hooglyC").textContent = jsdata[36].districtData[6].confirmed;
	  document.getElementById("hoogly").textContent = jsdata[36].districtData[6].district;
	  document.getElementById("hooglyA").textContent = jsdata[36].districtData[6].active;
	  document.getElementById("hooglyR").textContent = jsdata[36].districtData[6].recovered;
	  document.getElementById("hooglyD").textContent = jsdata[36].districtData[6].deceased;

	    document.getElementById("howrahC").textContent = jsdata[36].districtData[7].confirmed;
	  document.getElementById("howrah").textContent = jsdata[36].districtData[7].district;
	  document.getElementById("howrahA").textContent = jsdata[36].districtData[7].active;
	  document.getElementById("howrahR").textContent = jsdata[36].districtData[7].recovered;
	  document.getElementById("howrahD").textContent = jsdata[36].districtData[7].deceased;

       document.getElementById("jalpaiguriC").textContent = jsdata[36].districtData[8].confirmed;
	  document.getElementById("jalpaiguri").textContent = jsdata[36].districtData[8].district;
	  document.getElementById("jalpaiguriA").textContent = jsdata[36].districtData[8].active;
	  document.getElementById("jalpaiguriR").textContent = jsdata[36].districtData[8].recovered;
	  document.getElementById("jalpaiguriD").textContent = jsdata[36].districtData[8].deceased;


	  document.getElementById("jhargramC").textContent = jsdata[36].districtData[9].confirmed;
	  document.getElementById("jhargram").textContent = jsdata[36].districtData[9].district;
	  document.getElementById("jhargramA").textContent = jsdata[36].districtData[9].active;
	  document.getElementById("jhargramR").textContent = jsdata[36].districtData[9].recovered;
	  document.getElementById("jhargramD").textContent = jsdata[36].districtData[9].deceased;

      document.getElementById("st10C").textContent = jsdata[36].districtData[10].confirmed;
	  document.getElementById("st10").textContent = jsdata[36].districtData[10].district;
	  document.getElementById("st10A").textContent = jsdata[36].districtData[10].active;
	  document.getElementById("st10R").textContent = jsdata[36].districtData[10].recovered;
	  document.getElementById("st10D").textContent = jsdata[36].districtData[10].deceased;


      document.getElementById("st11C").textContent = jsdata[36].districtData[11].confirmed;
	  document.getElementById("st11").textContent = jsdata[36].districtData[11].district;
	  document.getElementById("st11A").textContent = jsdata[36].districtData[11].active;
	  document.getElementById("st11R").textContent = jsdata[36].districtData[11].recovered;
	  document.getElementById("st11D").textContent = jsdata[36].districtData[11].deceased;

      
      document.getElementById("st12C").textContent = jsdata[36].districtData[12].confirmed;
	  document.getElementById("st12").textContent = jsdata[36].districtData[12].district;
	  document.getElementById("st12A").textContent = jsdata[36].districtData[12].active;
	  document.getElementById("st12R").textContent = jsdata[36].districtData[12].recovered;
	  document.getElementById("st12D").textContent = jsdata[36].districtData[12].deceased;


      document.getElementById("st13C").textContent = jsdata[36].districtData[13].confirmed;
	  document.getElementById("st13").textContent = jsdata[36].districtData[13].district;
	  document.getElementById("st13A").textContent = jsdata[36].districtData[13].active;
	  document.getElementById("st13R").textContent = jsdata[36].districtData[13].recovered;
	  document.getElementById("st13D").textContent = jsdata[36].districtData[13].deceased;

	  document.getElementById("st14C").textContent = jsdata[36].districtData[14].confirmed;
	  document.getElementById("st14").textContent = jsdata[36].districtData[14].district;
	  document.getElementById("st14A").textContent = jsdata[36].districtData[14].active;
	  document.getElementById("st14R").textContent = jsdata[36].districtData[14].recovered;
	  document.getElementById("st14D").textContent = jsdata[36].districtData[14].deceased;

	   document.getElementById("st15C").textContent = jsdata[36].districtData[15].confirmed;
	  document.getElementById("st15").textContent = jsdata[36].districtData[15].district;
	  document.getElementById("st15A").textContent = jsdata[36].districtData[15].active;
	  document.getElementById("st15R").textContent = jsdata[36].districtData[15].recovered;
	  document.getElementById("st15D").textContent = jsdata[36].districtData[15].deceased;

      document.getElementById("st16C").textContent = jsdata[36].districtData[16].confirmed;
	  document.getElementById("st16").textContent = jsdata[36].districtData[16].district;
	  document.getElementById("st16A").textContent = jsdata[36].districtData[16].active;
	  document.getElementById("st16R").textContent = jsdata[36].districtData[16].recovered;
	  document.getElementById("st16D").textContent = jsdata[36].districtData[16].deceased;

       document.getElementById("st17C").textContent = jsdata[36].districtData[17].confirmed;
	  document.getElementById("st17").textContent = jsdata[36].districtData[17].district;
	  document.getElementById("st17A").textContent = jsdata[36].districtData[17].active;
	  document.getElementById("st17R").textContent = jsdata[36].districtData[17].recovered;
	  document.getElementById("st17D").textContent = jsdata[36].districtData[17].deceased;

        document.getElementById("st18C").textContent = jsdata[36].districtData[18].confirmed;
	  document.getElementById("st18").textContent = jsdata[36].districtData[18].district;
	  document.getElementById("st18A").textContent = jsdata[36].districtData[18].active;
	  document.getElementById("st18R").textContent = jsdata[36].districtData[18].recovered;
	  document.getElementById("st18D").textContent = jsdata[36].districtData[18].deceased;

	    document.getElementById("st19C").textContent = jsdata[36].districtData[19].confirmed;
	  document.getElementById("st19").textContent = jsdata[36].districtData[19].district;
	  document.getElementById("st19A").textContent = jsdata[36].districtData[19].active;
	  document.getElementById("st19R").textContent = jsdata[36].districtData[19].recovered;
	  document.getElementById("st19D").textContent = jsdata[36].districtData[19].deceased;

	    document.getElementById("st20C").textContent = jsdata[36].districtData[20].confirmed;
	  document.getElementById("st20").textContent = jsdata[36].districtData[20].district;
	  document.getElementById("st20A").textContent = jsdata[36].districtData[20].active;
	  document.getElementById("st20R").textContent = jsdata[36].districtData[20].recovered;
	  document.getElementById("st20D").textContent = jsdata[36].districtData[20].deceased;
      
	    document.getElementById("st21C").textContent = jsdata[36].districtData[21].confirmed;
	  document.getElementById("st21").textContent = jsdata[36].districtData[21].district;
	  document.getElementById("st21A").textContent = jsdata[36].districtData[21].active;
	  document.getElementById("st21R").textContent = jsdata[36].districtData[21].recovered;
	  document.getElementById("st21D").textContent = jsdata[36].districtData[21].deceased;
      
       document.getElementById("st22C").textContent = jsdata[36].districtData[22].confirmed;
	  document.getElementById("st22").textContent = jsdata[36].districtData[22].district;
	  document.getElementById("st22A").textContent = jsdata[36].districtData[22].active;
	  document.getElementById("st22R").textContent = jsdata[36].districtData[22].recovered;
	  document.getElementById("st22D").textContent = jsdata[36].districtData[22].deceased;

	   document.getElementById("st23C").textContent = jsdata[36].districtData[23].confirmed;
	  document.getElementById("st23").textContent = jsdata[36].districtData[23].district;
	  document.getElementById("st23A").textContent = jsdata[36].districtData[23].active;
	  document.getElementById("st23R").textContent = jsdata[36].districtData[23].recovered;
	  document.getElementById("st23D").textContent = jsdata[36].districtData[23].deceased;
      
       document.getElementById("st24C").textContent = jsdata[36].districtData[24].confirmed;
	  document.getElementById("st24").textContent = jsdata[36].districtData[24].district;
	  document.getElementById("st24A").textContent = jsdata[36].districtData[24].active;
	  document.getElementById("st24R").textContent = jsdata[36].districtData[24].recovered;
	  document.getElementById("st24D").textContent = jsdata[36].districtData[24].deceased;
      
};


getApi()


	const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
