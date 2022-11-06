import React from "react";


export default function Thinking() {

    return <div>
        <h3>1. Chia giao diện người dùng thành các component phân cấp (cha - con)</h3>
        <h3>2. Xây dựng các component tĩnh</h3>
        <h3>3. Xác định các state trong giao diện người dùng cần.</h3>
        <h3>4. Xác định những component cần dùng đến state đó.</h3>
        <h3>5. Cập nhật dữ liệu cho state ở component khi có sự thay đổi dữ liệu trên component đó</h3>
        <h3>(state chỉ nên cập nhật trên component mà nó được khởi tạo - local state)</h3>
    </div>
}