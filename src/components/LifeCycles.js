import React from "react";

export default class LifeCycles extends React.PureComponent{
   render() {
       return <div>
           <h2>Mounting - componentDidMount (Chỉ chạy 1 lần) - Dùng gọi API...</h2>
           <h2>Updating - componentDidUpdate (Hạn chế dùng) (Chạy được nhiều lần)</h2>
           <h2>Unmounting - componentWillUnmount(recommended), componentDidUnmount - (Chỉ chạy 1 lần) - Clear timeout in</h2>
       </div>
   }
}