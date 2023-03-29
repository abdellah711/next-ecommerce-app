const formatter = Intl.NumberFormat('en',{style:'currency',currency: 'USD'})
export const formatCurrency = (value: number) => {
    return formatter.format(value)
}