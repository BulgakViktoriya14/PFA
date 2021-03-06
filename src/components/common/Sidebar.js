import React from 'react';
import {NavLink} from 'react-router-dom';
import MoneyAccount from './MoneyAccount';
import close from './../../images/close.svg';

class Sidebar extends React.Component {
	closeSidebar = () => {
		this.props.blockSidebar.current.classList.remove("sidebar_open");
	}

	render() {
		return (
			<aside className="sidebar" ref={this.props.blockSidebar}>
				<nav className="menu">
					<ul className="menu-list">
						<button className="close" onClick={this.closeSidebar}><img src={close} alt="close"/></button>
						<li className="menu-item">
							<NavLink exact to="/income" className="menu-link" activeClassName="menu-link_active" onClick={this.closeSidebar}>Income</NavLink>
						</li>
						<li className="menu-item">
							<NavLink exact to="/expenses" className="menu-link" activeClassName="menu-link_active" onClick={this.closeSidebar}>Expenses</NavLink>
						</li>
					</ul>
				</nav>
				<MoneyAccount/>
			</aside>
		)
	}
}

export default React.forwardRef((props, ref) => <Sidebar blockSidebar={ref} {...props}/>);