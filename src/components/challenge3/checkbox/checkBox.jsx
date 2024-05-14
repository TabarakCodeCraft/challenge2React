import React, { useState } from 'react';

const CheckBox = () => {
    const [edit, setEdit] = useState(false);
    const [commentChecked, setCommentChecked] = useState(true);
    const [addMembersChecked, setAddMembersChecked] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleCommentToggle = () => {
        setCommentChecked(!commentChecked);
    };

    const handleAddMembersToggle = () => {
        setAddMembersChecked(!addMembersChecked);
    };

    return (
        <div>
            <h2 className='allow'>Allow members to</h2>

            <div className="checkBox">

                <div className="box">
                    <label class="main">Comment
                        <input type="checkbox"
                            checked={commentChecked}
                            onChange={handleCommentToggle}

                        />
                        <span class="checkbox-container"></span>
                    </label>
                </div>

                <div className="box">
                    <label class="main">Edit
                        <input type="checkbox"
                            checked={edit}
                            onChange={handleEdit}
                        />
                        <span class="checkbox-container"></span>
                    </label>
                </div>

                <div className='box'>
                    <label class='main'>  Add members
                        <input
                            type="checkbox"
                            checked={addMembersChecked}
                            onChange={handleAddMembersToggle}
                        />
                        <span class="checkbox-container"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CheckBox;
