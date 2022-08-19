import React from "react";

//este es nuestro HOC y recibe como parametro en changeAlert
function withStorageListener(WrappedComponent) {

    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)
       window.addEventListener('storage',(change)=>{
        if(change.key==='TODOS_V1'){
            setStorageChange(true)
        }
       })
        const toggleShow=()=>{
            props.sincronize()
            setStorageChange(false)
        }
        return (
            //este wrappedComponent es el changeAlert
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}
export { withStorageListener }