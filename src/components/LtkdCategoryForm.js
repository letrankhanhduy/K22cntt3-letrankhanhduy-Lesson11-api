import { useEffect, useState } from 'react';
import axios from '../api/LtkdApi';

export default function LtkdCategoryFrom({ onCloseForm, onCategorySubmit, renderLtkdCategory }) {
    const [ltkdId, setLtkdId] = useState(0);
    const [LtkdCategoryName, setLtkdCategoryName] = useState("");
    const [LtkdCategoryStatus, setLtkdCategoryStatus] = useState(true);

    useEffect(() => {
        setLtkdId(renderLtkdCategory.ltkdId);
        setLtkdCategoryName(renderLtkdCategory.ltkdCategoryName);
        setLtkdId(renderLtkdCategory.ltkdCategoryStatus);
    })
    const LtkdHandleClose = () => {
        onCloseForm(false);
    }

    const LtkdHandleSubmit = async (event) => {
        event.preventDefault();
        let LtkdCategory = {
            LtkdId: 0,
            LtkdCategoryName: LtkdCategoryName,
            LtkdCategoryStatus: LtkdCategoryStatus
        };
        console.log("LtkdCategory", LtkdCategory);
        await axios.post("LtkdCategory", LtkdCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='LtkdCategoryName'
                        value={LtkdCategoryName}
                        onChange={(ev) => setLtkdCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='LtkdCategoryStatus'
                        value={LtkdCategoryStatus}
                        onChange={(ev) => setLtkdCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={LtkdHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={LtkdHandleClose}>Đóng</button>
            </form>
        </div>
    );
}