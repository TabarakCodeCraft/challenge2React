import React, { useEffect, useState } from 'react';
import "../card/card.css";
import { IoMdClose } from "react-icons/io";
import CheckBox from '../checkbox/checkBox';

const Card2 = () => {
    const [tag, setTag] = useState([]);
    const [inputValue, setInputValue] = useState('');

  
    useEffect(() => {
        const storedTags = localStorage.getItem('tags');
        if (storedTags) {
            setTag(JSON.parse(storedTags));
        }
    }, []);
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            const newTags = [...tag, inputValue.trim()];
            setTag(newTags);
            localStorage.setItem('tags', JSON.stringify(newTags));
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        const newTags = [...tag];
        newTags.splice(index, 1);
        setTag(newTags);
        localStorage.setItem('tags', JSON.stringify(newTags));
    };

    return (
        <div className="card2">
            <div className="cardtop"></div>
            <button className='close'><IoMdClose /></button>
            <h3 className='addmember'>Add members</h3>
            <div className="member">
                <input
                    className='input'
                    type='text'
                    placeholder='Enter member name'
                    value={inputValue}
                    onChange={handleInput} />

                <button className='ADD' onClick={handleAdd}>ADD</button>
            </div>

            <div className="tags">
                {tag.map((tags, index) => (
                    <button className='tag' key={index}>
                        {tags}
                        <button className='closeTag' onClick={() => handleDelete(index)}>
                            <IoMdClose />
                        </button>
                    </button>
                ))}
            </div>
            <CheckBox />
        </div>
    );
}

export default Card2;
