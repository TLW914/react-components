class GroceryListItem extends React.Component {
	constructor(props){
		super(props);
 		this.state = {
		    done: false,
		   // bold: false
		};
	}

	onListItemClick() {
	  	this.setState({done: !this.state.done});
	}

 	render(){
		var style = {
			 textDecoration: this.state.done ? 'line-through' : 'none'
		};
		return (
		    <li style={style} onClick = { this.onListItemClick.bind(this) } key={this.props.key}>{this.props.item}</li>
		    // <li text={text} onMouse
		);
	}

 }
 const GroceryList = (props) =>{
	return (
		<div>
			<ul>
				<h2> Grocery List </h2>
				{props.itemList.map((item ,index) =>{
					return <GroceryListItem item={item} key={index}/>
				})}
			</ul>
		</div>
	);
}

ReactDOM.render(<GroceryList itemList={['Cucumber','Kale','ICE CREAAAMMMM!' ,'apples', 'cheese']}/>, document.getElementById('app'));
