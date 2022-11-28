const showNotification = (ref,
    severity, 
    summary, 
    detail,
    life) => {
    return(
        ref.current.show({
            severity: severity, 
            summary: summary, 
            detail: detail, 
            life: life
        })
    )
}



const clearNotification = (ref) => {
    return ref.current.clear();
}
export {showNotification, clearNotification }