import React from 'react'

const Fruit = ({ fruit, onSave }) => {

    const [ val, setVal ] = React.useState(fruit.name)
    const [ shouldShowInput, setShouldShowInput ] = React.useState(false)
  
    const toggle = () => setShouldShowInput(!shouldShowInput)
  
    const save = () => {
        onSave(fruit.id, val)
        setShouldShowInput(false)
    }
  
    return (
        <div className="card">
            {
                <h4>
                    {
                        shouldShowInput ?
                        <input type="text" value={val} onChange={event => setVal(event.target.value)}/> :
                        <span>{ fruit.name }</span>
                    }
                    - (color: { fruit.color })
                </h4>
            }
            <button onClick={toggle}>{ shouldShowInput ? "Cancel" : "Edit" }</button>
  
            { shouldShowInput && <button onClick={save}>Save</button> }
            { shouldShowInput && <button onClick={() => setVal(fruit.name)}>Reset</button> }
        </div>
    )
  }

  export default Fruit;
