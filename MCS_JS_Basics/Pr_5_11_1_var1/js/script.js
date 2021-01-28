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

for (let i = 0; i < newSchool.length; i++) {
  for (let j = 0; j < newSchool[i].length; j++) {
    for (let k = 0; k < newSchool[i][j].length; k++) {
      console.log(newSchool[i][j][k]);
    }
  }
}
