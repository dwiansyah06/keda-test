import React, { useState } from 'react'

const Two = () => {

    const [inputList, setInputList] = useState([{ bilangan: "" }]);
    const [result, setResult] = useState('')
    const [length, setLength] = useState(2)

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
        for (var j = 0; j < inputList.length; j++){
            if (re.test(inputList[j].bilangan)) {
                input.push(parseInt(inputList[j].bilangan))
            } else {
                alert('Hanya boleh angka')
                break;
            }
        }
        
        var value = 0
        var result
        var listRes = []
        var maxValue = Math.max(...input)
        var indexPatokan = input.indexOf(maxValue)
        var valAfter = input.at(indexPatokan + 1);
        var valBefore = input.at(indexPatokan - 1);

        if(valAfter > valBefore) {
            result = input.slice(indexPatokan)
        } else {
            result = input.slice(0, (indexPatokan + 1)).reverse()
        }

        for (var i = 0; i < length; i++){
            let number
            if(result[i] == undefined) {
                number = 0
            } else {
                number = result[i]
            }

            listRes.push(number)
            value += number
        }

        setResult(`${listRes.toString().replace(/,/g, '+')} = ${value}`)
    }

    return (
        <div className='border-x-[1px] border-black h-[100vh] p-2'>
            <h2 className='mb-6'>Soal nomor 2</h2>
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

            <div className='space-y-1 mt-4'>
                <label className='text-sm '>Masukan Length</label>
                <input
                    placeholder="Masukan length"
                    value={length}
                    type="number"
                    onChange={e => setLength(e.target.value)}
                    className="border-[1px] border-black w-full text-sm p-3 mt-2"
                />
            </div>

            <div className='flex justify-between space-x-4'>
                <button className='px-3 py-2 bg-secondary text-white text-sm rounded-md w-full mt-4 mb-2' onClick={sortingNumberOne}>Jumlahkan</button>
                <button className='px-3 py-2 bg-red-500 text-white text-sm rounded-md w-full mt-4 mb-2' onClick={resetForm}>Reset</button>
            </div>
            
            <label className='text-sm'>Result : {result}</label>
        </div>
    )
}

export default Two