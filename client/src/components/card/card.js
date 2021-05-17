import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './../button/button';

class Card extends Component  {
    constructor() {
        super()
        this.typs = [
            {name: 'тонкое', label: 'тонкое'},
            {name: 'традиционное', label: 'традиционное'}
        ]
        this.size = [
            {name: 26, label: '26 см.'},
            {name: 30, label: '30 см.'},
            {name: 40, label: '40 см.'}
        ]
    }
    state = {
        activeDough: 'тонкое',
        activeDiameter: 26,
        img: true,
        textButton: 'Добавить',
    }
    
    onToggleType  (dough)  {
            this.setState({activeDough:dough});
        }

    onToggleSize  (diameter)  {
        this.setState({activeDiameter:diameter});
    }
    
    addInOrder = () => {
        const {id, title, url, price} = this.props.menuItem;
        const {activeDough, activeDiameter} = this.state;
        const priceOfItem = price*activeDiameter;
        const priceOfPizza = price*activeDiameter;
        const quantity = 1;
        let item = {
                id,
                title,
                url,
                priceOfItem,
                priceOfPizza,
                activeDough,
                activeDiameter,
                quantity
            };
        
        this.props.newItemOrder(item);
    }

    changeQuantityInOrder = () => {
        const id = this.props.menuItem.id;
        const {activeDough, activeDiameter} = this.state;
        const addUp = true;
        this.props.changeQuantityInOrder({
            addUp,
            id,
            activeDough,
            activeDiameter
        });
    }
    
    onAdded = async () => {
        const {activeDough, activeDiameter} = this.state;
        const {menuItem, order} = this.props;
        let check = false;

        if(order.length === 0) {
            this.addInOrder();
        } else {
            order.forEach(item => {
                if(item.id === menuItem.id && item.activeDough === activeDough && item.activeDiameter === activeDiameter) {
                            check = true;
                }
            });

            if (check) {
                this.changeQuantityInOrder();
            } else {
                this.addInOrder();
            }
        }
    }

    changeInfo = (x) => {
            this.setState({img:x});
        
    }

    changeInfoMouseover = () => {
        
            this.setState({img:false});
        
    }

    changeInfoMouseout = () => {
        
            this.setState({img:true});
        
    }

    render() {
        
        const {title, url, price, category, ingredients, id} = this.props.menuItem;
        const {img} = this.state;

        const liTyps = this.typs.map(({name, label}) => {
            const activeType = this.state.activeDough === name;
            const clazzType = activeType ? 'active' : null;
            return <li onClick={() => this.onToggleType(name)} className={clazzType}>{label}</li>
        });

        const liSize = this.size.map(({name, label}) => {
            const activeSize = this.state.activeDiameter === name;
            const clazzSize = activeSize ? 'active' : null;
            return <li onClick={() => this.onToggleSize(name)}  className={clazzSize}>{label}</li>
        });

        let calzzButton = this.state.added ? 'button button_card ' : 'button button_card';

        const classImg = img ? `card__img card__img_active ` : 'card__img';
        const classInfo = img ? 'card__info' : 'card__info  card__info_active';
        
        return (
            <div className = 'card'>
                <div onMouseOver={this.changeInfoMouseover} onMouseOut={this.changeInfoMouseout}  className='card__top'>
                    <div className={classImg}>
                        <img src= {url}></img>
                    </div>
                    <div className={classInfo}>
                        <div className='card__ingredients'>
                            Ингредиенты
                            <ul>
                                {
                                    ingredients.map((item, index) => {
                                        return <li key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <h4 className='card__title'>{title}</h4>
                <div className="card__selector">
                    <ul className="card__dough">
                        {liTyps}
                    </ul>
    
                    <ul className='card__diameter'>
                        {liSize}
                    </ul>
                </div>
    
            <div className="card__bottom">
    
                <div className="card__price">от {price*this.state.activeDiameter} ₽</div>
                <Button onClick={this.onAdded} className={calzzButton}>
                    
                    <div className='button_card__text'>
                        <i className="fas fa-plus button_card__plus"></i>
                        <span className="button_card__add">{this.state.textButton}</span>
                    </div>

                    <div className="button__circle">
                        <div className="button__text-circle">{this.state.quantity}</div>
                    </div>
                </Button>

                </div>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        order: state.orderItems,
    }
} 
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);