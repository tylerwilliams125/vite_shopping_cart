export default function CartItem({item, onAddQuantity, onSubtractQuantity, onNameChange}) {

                

    console.log('Cart Item component rendered')
    return(
        <div className='row' key={item.id}> 
        <div className='col-4'>
             <input type='text' className={item.name.length > 0 ? 'form-control is-valid': 'form-control is-invalid'} value={item.name} onChange={(evt) => onNameChange(evt,item)}/> 
             </div>
             <div className='col-1 '>
                 <span>{item.quantity}</span>
            </div>
            <div className='col-4'>
                <button className='btn btn-primary rounded-circle ' disabled= {item.quantity >= 10 ? true : false} onClick={() => onAddQuantity(item)}>+</button>
                <button className='btn btn-danger rounded-circle ' disabled= {item.quantity <= 0 ? true : false}onClick={() => onSubtractQuantity(item)} >-</button>
            </div>
            
        </div>
)}
