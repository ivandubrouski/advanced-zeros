module.exports = function getZerosCount(number, base) {
	let zero=0, i=2;
	let arr=[];

	while(base>=i){
		if(base%i==0){
			arr.push(i);
			base=base/i;
		} else{
			i++;
		}
	}

	i=0;
	let zeros=[];
	
	while(i<arr.length){
		let tempNumber=number;
		while(tempNumber>0) {
			tempNumber=Math.floor(tempNumber/arr[i]);
			zero+=tempNumber;
		}

		let count=1;
		let j=i+1;
		for(j; j<arr.length; j++){
			if (arr[i]==arr[j]){
				count++;
			} else{
				break;
			}
		}
		zeros.push(Math.floor(zero/count));
		i++;
		zero=0;
	}
	return Math.min.apply(null,zeros);
}