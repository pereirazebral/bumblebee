import CONFIG from "../constants/config";
const showNotification = (ref,
    severity = CONFIG.SEVERITY_NOTIFICATION.INFO, 
    summary, 
    detail,
    life = CONFIG.TIME_NOTIFICATION) => {
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