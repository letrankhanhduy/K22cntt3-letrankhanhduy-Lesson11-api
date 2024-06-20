import React from 'react'

export default function LtkdCategoryList({ renderLtkdCateGories, onAddNew }) {
    console.log("renderLtkdCategories: ", renderLtkdCateGories);
    let LtkdCategoryElement = renderLtkdCateGories.map((LtkdCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{LtkdCategory.ltkdId}</td>2
                <td>{LtkdCategory.ltkdCategoryName}</td>
                <td>{LtkdCategory.ltkdCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => ltkdhandleDelete(ltkdCategory.ltkdId)}>Delete</button>
                    <button className='btn btn-success' onClick={() => ltkdhandleEdit(ltkdCategory)}>Edit</button>
                </td>
            </tr>
        )
    })
    const ltkdhandleDelete = (ltkdId) => {
        if (window.confirm('Bạn Có Muốn Xóa ['+ltkdId+'] Không?')) {
            console.log("Delete:", ltkdId);
            onLtkdDelete(ltkdId);
        } else {

        }
    }
    const ltkdhandleEdit = (ltkdCategory)=>{
        onLtkdEdit(ltkdCategory);
    }

    const LtkdHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {LtkdCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={LtkdHandleAdd}>Them moi</button>
        </div>
    )
}