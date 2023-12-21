export function isMatchFilter(laptop, filterList, info) {
    if (info) {
        if (!laptop.info.toLowerCase().includes(info.toLowerCase())) return false
    }
    if (filterList.sellersList) {
        if (!laptop.sellers.includes(filterList.sellersList)) return false
    }
    if (filterList.brandList) {
        if (!laptop.brand.includes(filterList.brandList)) return false
    }
    return true
}
