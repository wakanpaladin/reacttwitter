/*
    Exercise 2

*/


var names = ['Peter','Dave'];
var helloes = React.createElement(Helloes, {names: names});
//debugger;
React.render(	
  helloes,//or just <Helloes names={names}/>,
  document.getElementsByTagName('body')[0]
);