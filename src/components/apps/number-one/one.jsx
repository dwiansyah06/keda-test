import React, { useState } from 'react'

const One = () => {

    const [inputList, setInputList] = useState([{ bilangan: "" }]);
    const [result, setResult] = useState('')

    const handleInputChange = (e, index) => {
        const re = /^[0-9\b]+$/;
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };
       
      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };
       
      const handleAddClick = () => {
        setInputList([...inputList, { bilangan: "" }]);
      };

      const resetForm = () => {
        setInputList([{ bilangan: "" }]);
        setResult('')
      }

      const sortingNumberOne = () => {
        const re = /^[0-9\b]+$/;
        let input = []
        inputList.map((bilangan) => (
            input.push(parseInt(bilangan.bilangan))
        ))

        var output = [];
        var inserted;

        for (var i = 0; i < input.length ; i++){
            if (re.test(input[i])) {
                if(!output.includes(input[i])) {
                    inserted = false;
                    for (var j = 0; j < output.length; j++){
                        if (input[i] > output[j]){
                            inserted = true;
                            output.splice(j, 0, input[i]);
                            break;
                        }
                    }
    
                    if (!inserted) {
                        output.push(input[i])
                    }
                }
            } else {
                alert('Hanya boleh angka')

                return null
            }
                
        }

        setResult(output.toString())
    }

    return (
        <div className='border-x-[1px] border-black h-[100vh] p-2'>
            <div className='flex justify-between'>
                <button className='px-3 py-2 bg-primary text-white text-sm rounded-md' onClick={handleAddClick}>Tambah Field</button>
            </div>
            
            {inputList.map((x, i) => {
                return (
                    <div key={i} className="box mt-3 flex space-x-4 items-center">
                        <input
                            name="bilangan"
                            placeholder="Masukan angka"
                            value={x.bilangan}
                            type="number"
                            onChange={e => handleInputChange(e, i)}
                            className="border-[1px] border-black w-full text-sm p-3"
                            pattern="^[0-9]*$"
                        />
                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="px-3 py-2 bg-red-500 text-white text-sm rounded-md"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                        </div>
                    </div>
                );
            })}

            <div className='flex justify-between space-x-4'>
                <button className='px-3 py-2 bg-secondary text-white text-sm rounded-md w-full mt-4 mb-2' onClick={sortingNumberOne}>Sorting Angka</button>
                <button className='px-3 py-2 bg-red-500 text-white text-sm rounded-md w-full mt-4 mb-2' onClick={resetForm}>Reset</button>
            </div>
            
            <label className='text-sm'>Result : {result}</label>
        </div>
    )
}

export default One