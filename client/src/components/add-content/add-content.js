import React, {Component} from 'react';
import PizzaServis from '../../services/pizza-service';


const service = new PizzaServis();

class AddContent extends Component {
    state = {
        url: '',
        name: '',
        price: '',
        category: '',
        ingredients: [],
    }

    message = (text) => {
        if (text) {

            alert(text);
        
        }
    }

    setInput = async (e) => {
        await this.setState({[e.target.name]: e.target.value})
    }

    setTextarea = async (e) => {
        const str = e.target.value;
        var mySplits = str.split(",", 6); 
        await this.setState({ingredients: mySplits})
    }

    onAddCard = async () => {
        //гавайская.jpeg
        let {url, name, price, category, ingredients} = this.state
        name = name[0].toUpperCase() + name.slice(1);
        category = category.toLowerCase()
        ingredients = ingredients.map(item => {return item.toLowerCase()})
        const  regex = new RegExp("(.*?)\.(jpg|jpeg)$");
        
        if(url==='' || name ==='' || price ==='' || category ==='' || ingredients.length === 0){
            this.message('Пустое поле')
            return;
        }

        if (!(regex.test(url))) {
            this.message('Нет рассширения у фотографии')
            return;
        }
        category = category.toLowerCase()

        console.log({url, name, price, category, ingredients})
        service.addCard({url, name, price, category, ingredients})
            .then(res => this.message(res.message))
    }

    render() {
        return(
            <>
                <div className='addcontent'>
                    <div className='container'>
                        <div className='addcontent__block'>
                            
                            <div className='addcontent__add'>
                                <div className='addcontent__title'>Добавление карточки</div>
                                <div className='addcontent__inputs'>
                                    <div className='addcontent__input'>
                                        <label>Название фото</label> <input onChange={this.setInput} name='url'/>
                                    </div>
                                    <div className='addcontent__input'>
                                        <label>Название пиццы</label> <input pattern="^[а-яА-ЯеЁa-zA-Z]+$" onChange={this.setInput} name='name'/>
                                    </div>
                                    <div className='addcontent__input'>
                                        <label>Цена пиццы</label> <input onChange={this.setInput} type="number" name='price'/>
                                    </div>
                                    <div className='addcontent__input'>
                                        <label>Категория</label> 

                                        <input onChange={this.setInput} required  name='category' type="text" list="exampleList"/>
                                        <datalist id="exampleList">
                                            <option value="classical"/>  
                                            <option value="meat"/>
                                            <option value="vegetarian"/>  
                                            <option value="sharp"/>  
                                        </datalist>

                                    </div>
                                    <div className='addcontent__inputTextarea'>
                                    
                                        <label>Ингредиенты до 6 шт. (через ,)</label>
                                        <textarea onChange={this.setTextarea} required name='ingredients' ></textarea>
                                    </div>

                                </div>
                                <div className='button button_addContent' onClick={this.onAddCard}>Добавить</div>
                            </div>
                            <div className='addcontent__line'></div>
                            <div className='addcontent__remove'>
                                <div className='addcontent__title'>Удаление карточки</div>
                                <div className='addcontent__inputs'>
                                    <div className='addcontent__input'>
                                        <label>Название пиццы</label> <input/>
                                    </div>
                                </div>
                                <div className='button button_addContent'>Удалить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AddContent;