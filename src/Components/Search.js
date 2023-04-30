import React, {useRef} from 'react';
import {STUDENTS} from '../studentsList'

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search(props) {
	const stdNameRef = useRef(null)
	const joinDateRef = useRef(null)
	let studentDateRecord = null;

	const checkStudentExist = () => {

		let studentExist = false
		STUDENTS.some(student=>{
			if(student.name.toLowerCase() === stdNameRef.current.value.toLowerCase()){
				studentExist = true
				studentDateRecord = student.validityDate;
			}
		})

		return studentExist;
	}
	
	const addResident = () => {
		const studentExist = checkStudentExist();
		if(!studentExist){
			props.errCallBack(`Sorry, ${stdNameRef.current.value} is not a verified student!`)
			return;
		}

		let validStudent = checkValidity(joinDateRef.current.value, studentDateRecord)
		if(!validStudent){
			props.errCallBack(`Sorry, ${stdNameRef.current.value}'s validity has Expired!`)			
			return;
		}

		props.addResidentCallBack(stdNameRef.current.value)
		stdNameRef.current.value = ''
		joinDateRef.current.value = ''

	}

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" ref={stdNameRef}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" ref={joinDateRef}/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={()=>{addResident()}}>Add</button>
		</div>
	);
}

export default Search;
