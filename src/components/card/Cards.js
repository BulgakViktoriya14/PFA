import React from 'react';
import {connect} from 'react-redux';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCards: this.props.cardsIncome.map((item) =>
                <article key={item.id} className="card">
                    <h3 className="cart__title">{item.name}</h3>
                    <h4 className="card__category">{item.category}</h4>
                    <p className="card__bottom">
                        <span className="card__sum">{item.sum}</span>
                        <span className="card__date">{item.date}</span>
                    </p>
                </article>
            )
        }
    } 
    componentWillReceiveProps(nextProps) {
        this.setState({
            listCards: nextProps.cardsIncome.map((item) =>
                <article key={item.id} className="card">
                    <h3 className="cart__title">{item.name}</h3>
                    <h4 className="card__category">{item.category}</h4>
                    <p className="card__bottom">
                        <span className="card__sum">{item.sum}</span>
                        <span className="card__date">{item.date}</span>
                    </p>
                </article>
            )
        })
    }
	render() {
		return (
            <div className="container cards">{this.state.listCards}</div>
        )
	}
}

function mapStateToProps(state) {
	return {
		cardsIncome: state.userInfo.cardsIncome
	}
}

export default connect(mapStateToProps)(Cards);