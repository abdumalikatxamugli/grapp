const getMaxDate=()=>{
	var today = new Date();
	// var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 2).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	return  yyyy + '-' + mm + '-01';
}
export default getMaxDate;