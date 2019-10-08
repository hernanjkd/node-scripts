const fetch = require(`node-fetch`);
const fs = require(`fs`);
const sample = {
    id: 1,
    catalog_id: 38423,
    type_name: `city`,
    category_id: 2,
    contact_id: 1,
    type_name: "",
    pdf_catalog_page_id: "",
    pdf_annotation_id: "",
    product_id: 1,
    search_key: "",
    page_id: '',
    merchant_id: 1,
    category_name: "",
    member_id: 1,
    legacy_catalog_id: 1,
    group_id: 1,
    name: "",
}
const endpoints = [
    `/apps/${sample.name}/catalog/${sample.catalog_id}`,
    `/apps/states/${sample.catalog_id}`,
    `/apps/feed/processed/${sample.catalog_id}`,
    // //`/catalogs`,
    // `/catalogs/type/${sample.type_name}`,
    // `/catalogs/${sample.catalog_id}`,
    // `/catalogs/${sample.catalog_id}/active`,
    // `/catalogs/${sample.catalog_id}/Category/${sample.category_id}`,
    // // `/catalogs/${sample.catalog_id}/products`,
    // `/catalogs/${sample.catalog_id}/search/${sample.search_key}`,
    // `/catalogs/${sample.catalog_id}/searching/${sample.search_key}`,
    // `/catalogs/${sample.catalog_id}/pdf`,
    // // `/catalogs/${sample.catalog_id}/categories/${sample.category_id}/products`,
    // `/catalogs/${sample.id}/categories`,
    // `/catalogs/${sample.id}/categories/${sample.category_id}`,
    // `/categories/${sample.id}`,
    // `/catalogs/${sample.id}/Category/${sample.category_id}/categories`,
    // `/catalogs/${sample.id}/Category/${sample.category_id}/categories/${sample.category_id}`,
    // `/catalogs/${sample.id}/grid-categories`,
    // `/catalogs/${sample.id}/savingsoffer`,
    // `/catalogs/${sample.catalog_id}/user_options`,
    // `/catalogs/${sample.catalog_id}/versions`,
    // `/catalogs/${sample.catalog_id}/products/${sample.product_id}`,
    // //  `/contacts`,
    // `/contacts/${sample.contact_id}`,
    // `/pdf/annotations/${sample.pdf_catalog_page_id}`,
    // `/pdf/annotations/${sample.pdf_catalog_page_id}/product/${sample.product_id}`,
    // //  `/pdf/annotations/${sample.pdf_catalog_page_id}/products`,
    // `/pdf/annotation/${sample.pdf_annotation_id}`,
    // `/pdf/${sample.catalog_id}/page-options/${sample.page_id}`,
    // //   `/departments`,
    // `/departments/${sample.department_id}/catalogs`,
    // //      `/catalogs/${sample.catalog_id}/dynamic`,
    // //     `/catalogs/${sample.catalog_id}/dynamic_pdf`,
    // //      `/catalogs/${sample.catalog_id}/dynamic_mobile_pdf`,
    // //   `/catalogs/${sample.catalog_id}/dynamic_mobile`,
    // `/catalogs/${sample.catalog_id}/category/${sample.category_id}`,
    // `/catalogs/${sample.catalog_id}/mobile_category/${sample.category_id}`,
    // `/catalogs/${sample.catalog_id}/dynamic/single`,
    // //    `/dyncatalogs/${sample.catalog_id}`,
    // //    `/dyncatalogs/${sample.catalog_id}/orphaned`,
    // //  `/dyncatalogs/${sample.catalog_id}/products`,
    // `/dyncatalogs/${sample.catalog_id}/products/${sample.product_id}`,
    // `/dyncatalogs/${sample.catalog_id}/search/${sample.search_key}`,
    // `/dyncatalogs/${sample.catalog_id}/searching/${sample.search_key}`,
    // `/dyncatalogs/${sample.catalog_id}/lifestyle`,
    // `/dyncatalogs/${sample.catalog_id}/page/${sample.page_id}`,
];
module.exports.test = function (api, filepath) {
    return new Promise((resolve, reject) => {
        var obj = {};
        var promises = [];

        endpoints.forEach(endpoint => {
            obj[endpoint] = "";
            var apicall = api + endpoint + '?limit=1';
            promises.push(
                fetch(apicall)
                    .then(function (data) {
                        return data.json()
                            .catch(function (error) {
                                console.log(error)
                            });
                    })
                    .then(function (json) {
                        obj[endpoint] = json;
                    })
            );
        });

        Promise.all(promises).then(() => {

            fs.writeFile(filepath, JSON.stringify(obj, null, 4), `utf8`, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`saved`)//Everything went OK!
                }
            });

            resolve('SUCCESS');
        })
            .catch(err => reject('MANUALLY ERROR MESSAGE REJECTED'));
    })
}