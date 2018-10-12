/*var a = React.createElement('a',{href:'https://google.com',target:'_blank',title:'google link'},'google');
var p= React.createElement('p',null,'this is a paragraph');
var content = document.getElementById('content');
ReactDOM.render(
	React.createElement('div',null,a,p),content
	);*/


////////////////////

/*var h1 = React.createElement('h1',null,"Hello World");
var p = React.createElement('p',null,"this is a paragraph");
class customComponent extends React.Component {
	render(){
		return (
			React.createElement('div',null,h1,p)
			);
	}
}
var firstComponent = React.createElement(customComponent,null);	
var content = document.getElementById('content');
ReactDOM.render(firstComponent,content);*/	

class customLink extends React.Component{
	render(){
		//console.log(this.props,'this.props')
		return (
			React.createElement('a',this.props, this.props.linktext)

			)
		
	};
}

var mylink = React.createElement('div', null,

	React.createElement(customLink, { href:'https://google.com',linktext:'google'}),
	React.createElement(customLink, { href:'facebook',linktext:'facebook'}),
	React.createElement(customLink, { href:'youtube',linktext:'youtube'})


	)

var content = document.getElementById('content');
ReactDOM.render(mylink,content);

 