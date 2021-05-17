import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onFilterSelect} from '../../actions';


class Filter extends Component {
    state = {
        title: 'Все',
        mobClick: false,
    }
    componentDidMount() {
        
    }
    onFilterSelect = (name, title) => {
        this.props.onFilterSelect(name);
        this.setState({title});
    }
    onFilter = () => {
        if(this.state.mobClick === false) {
            this.setState({mobClick:true});
        } else {
            this.setState({mobClick:false});
        }
        
    }

    render() {
        let categories = [
            {name:'all', label: 'Все'},
            {name:'classical', label: 'Классические'},
            {name: 'meat', label: 'Мясные'},
            {name: 'vegetarian', label: 'Вегетарианские'},
            {name: 'sharp', label: 'Острые'},
        ];
        const items = categories.map(({name, label}) => {
            const active = this.props.filter === name,
                  clazz = active ? 'button_filter button_filter_active' : 'button_filter';
            return (
                <div>
                    <div type='button'
                        className={`button ${clazz}`}
                        key={name} 
                        onClick={() => this.onFilterSelect(name , label)}>
                            {label}
                    </div>
                </div>
            )
        });
        const clazzFilterButtons = this.state.mobClick ? 'block filter__buttons' : 'filter__buttons';


        return (
            <div className='filter'>
                <div className='container'>
                    <div className='button button_mobFilter' onClick={this.onFilter}>
                        Фильтр
                    </div>
                    <div className={clazzFilterButtons}>
                        {items}
                    </div>
                    <div className='filter__title'>{this.state.title} пиццы</div>
                </div>
            </div>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
} 
const mapDispatchToProps = {
    onFilterSelect,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);