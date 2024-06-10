import data from './data';
import {useState} from 'react';
import './styles.css';

const Accordian = function(){
const[selected,setSelected] = useState(null);
function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);
}
return (
    <div className="wrapper"> 
        <div className="accordian">
         { data && data.length > 0 ? (
            data.map(dataItem=> (
                <div className="item" key={dataItem.id}>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                        <h1>{dataItem.question}</h1>
                        <span>+</span>
                    </div>
                    {dataItem.id === selected ? <div className="content">{dataItem.answer}</div> : null}
                </div>
            ))) : (
                <div>data not found</div>
            )
        }
    </div>
    </div>    
)
}
export default Accordian;


 /*
  

            import data from './data';
import {useState} from 'react';
const Accordian = function(){
const[selected,setSelected] = useState(null);
return (
    <div className="wrapper">
        <div className="accordian">
            {data && data.length > 0 ? (
                data.map(dataItem => {
                <div className="item">
                    <div className="title">
                        <h3>
                            {dataItem.id}
                        </h3>
                        <h1>Hellllo</h1>
                        <span>+</span>
                    </div>
                </div>})): (
                <div> Data not found</div>
            )}
        </div>
   </div>       
)
}
export default Accordian;


    */



