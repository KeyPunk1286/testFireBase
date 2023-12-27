export function isMatchFilter(brand, filterBrand) {
    if (filterBrand) {
        if (!brand.name.toLowerCase().includes(filterBrand.toLowerCase())) return false
    }
    return true
}
export function getUpdateFilter(updateItem, copyItem) {
    const data = {}
    if (updateItem.url !== copyItem.url) data.url = updateItem.url
    if (updateItem.info !== copyItem.info) data.info = updateItem.info
    if (updateItem.price !== copyItem.price) data.price = updateItem.price
    if (updateItem.sellers !== copyItem.sellers) data.sellers = updateItem.sellers
    if (updateItem.brand !== copyItem.brand) data.brand = updateItem.brand
    return data
}
// export function isMatchFilter(laptop, filterList, info) {
//     if (info) {
//         if (!laptop.info.toLowerCase().includes(info.toLowerCase())) return false
//     }
//     if (filterList.sellersList) {
//         if (!filterList.sellersList.includes(laptop.sellers)) return false
//     }
//     console.log('filterList.brandList');
//     console.log(filterList.brandList);
//     if (filterList.brandList) {
//         if (!filterList.brandList.includes(laptop.brand)) return false
//     }
//     return true
// }
// export function isMatchFilter(laptop, filterList, info) {
//     if (info) {
//         if (!laptop.info.toLowerCase().includes(info.toLowerCase())) return false
//     }
//     if (filterList.sellersList && !filterList.sellersList.includes(laptop.sellers)) {
//         return false
//     }
//     if (filterList?.brandList?.length > 0 && !filterList.brandList.includes(laptop.brand)) {
//         return false
//     }
//     return true
// }
