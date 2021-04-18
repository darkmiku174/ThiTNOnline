import React from "react";
import {Form,Button,Col,Row} from 'react-bootstrap'
const SearchBar = () =>{
  return (
	<form class="form-inline" style={{marginLeft:"65%"}}>
	  <div class="form-group mx-sm-3 mb-2">
	    <label for="inputPassword2" class="sr-only">Nhập tên môn học</label>
	    <input type="text" class="form-control" id="inputPassword2" placeholder="Nhập tên môn học"></input>
	  </div>
	  <button type="submit" class="btn btn-primary mb-2">TÌM KIẾM</button>
	</form>
	)
}
export default SearchBar;