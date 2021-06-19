import React from "react";
const SearchBar = () => {
	return (
		<form className="form-inline" style={{ marginLeft: "65%" }}>
			<div className="form-group mx-sm-3 mb-2">
				<label for="inputPassword2" className="sr-only">Nhập tên môn học</label>
				<input type="text" className="form-control" id="inputPassword2" placeholder="Nhập tên môn học" />
			</div>
			<button type="submit" className="btn btn-primary mb-2">TÌM KIẾM</button>
		</form>
	)
}
export default SearchBar;