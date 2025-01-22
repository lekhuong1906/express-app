export default {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }
        const type = types[sort.type];

        if (type == 'default' || type == 'desc') {
            return `<a href="?_sort&column=${field}&type=${type}" class="col-3 btn btn-default">${field} ${sort.type}</a>`;
        } else {
            return `<a href="?_sort&column=${field}&type=${type}" class="col-3 btn btn-default">${field} ${sort.type}</a>`;
        }

    }
}