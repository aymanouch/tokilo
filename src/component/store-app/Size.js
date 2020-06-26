import React from "react";

const Size = (props) => {
    let size;
    if(props.size.length > 0 ) {
    size = (<div className="size">
        <h3>size:</h3>
                <table>
                    <tr>
                    {
                        props.size.map(item => {
                        return <td key={item}>{item}</td>;
                        })
                    }
                    </tr>
                </table>
           </div>)
    } else {
        size = null;
    }
    

    return size;  
}

export default Size;