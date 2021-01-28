let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

for (let subnewSchool of newSchool) {
	for (let subsubnewSchool of subnewSchool) {
    for (let elem of subsubnewSchool) {
		console.log(elem);
	  }
  }
}

