import React from "react";

//customHook
function useStorageListener
    (sincronize) {

    //creamos un estado para los cambios
    const [storageChange, setStorageChange] = React.useState(false)
    //llamamos a window para oir los cambios en el localStorage que estamos usando
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        sincronize()
        setStorageChange(false)
    }
    return { 
        show:storageChange,
        toggleShow
    }

}
export {
    useStorageListener
}