const addDates=(date, days)=>{
	var result = new Date(date);
	result.setDate(result.getDate() + parseInt(days));
	var dd = String(result.getDate()).padStart(2, '0');
	var mm = String(result.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = result.getFullYear();

	return  yyyy + '-' + mm + '-' + dd;
}
export default addDates;