const FORMAT_PRICE = (value) => {
    return value && value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
export default FORMAT_PRICE