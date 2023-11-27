import axios from 'axios'

export async function getData(date, postalCode) {
    const answer = await axios.get(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?where=location_city%3D%22Lyon%22%20AND%20firstdate_begin%20%3E%20date'${date}'%20AND%20location_postalcode%3D${postalCode}&order_by=firstdate_begin%20ASC&limit=20`);
    return answer.data.results;
}