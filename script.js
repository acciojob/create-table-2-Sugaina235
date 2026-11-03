function createTable() {
    //Write your code here
	const rowInput=prompt("Input number of rows");
	if(rowInput===null) return;
	const colInput=prompt("Input number of columns");
	
	if(colInput===null) return;
	if(isNaN(rowInput)||isNaN(colInput)||rowInput.trim()===""||colInput.trim()===""){
		return;
	}
	const rn=parseInt(rowInput,10);
	const cn=parseInt(colInput,10);
	if(rn<=0||cn<=0){
		alert("Please enter value greater than 0");
		return;
	}
	const table=document.getElementById("myTable");
	table.innerHTML="";
  for(let i=0;i<rn;i++){
	  const row=table.insertRow();
	  for(let j=0;j<cn;j++){
	  const cell=row.insertCell();
		  cell.textContent(`Row-${i} Column-${j}`);
	  
  }






	
	

  
}
