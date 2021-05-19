import React, {Component} from 'react';
import CardWorker from '../cardWorker/cardWorker';

class WorkerPanel extends Component {
    render() {
        return(
            <>
                
                <div className='worker'>
                    <div  className='container'>
                        <div className='worker__title'>Обработка зкаказов</div>
                        <div className='worker__block'>
                            <CardWorker/>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default WorkerPanel;