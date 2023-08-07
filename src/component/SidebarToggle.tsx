import React from 'react';

import '../css/SidebarToggle.css';

function SidebarToggle(){
    // function toggleAlert(){
    //     alert(document.getElementById("toggleChk").checked)
    // }
    return <div>
        <input id="toggleChk" name="toggleChk" type="checkbox" / >
        <label htmlFor="toggleChk" id={"toggleChkLabel"}>
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div id="sideBar">        </div>
    </div>
}
export default SidebarToggle;