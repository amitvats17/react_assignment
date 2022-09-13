import React, { useState,useEffect }  from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Getcategories, GetproductsByCategory } from "../Services/Product";

const Navbar = () => {
	const [categories,setCategories] = useState([]);
	useEffect(()=>{
		try {
			const data = Getcategories();
			data.then(src=>{
				setCategories(src);
			})
		} catch (error) {
			
		}
	},[])


return (
	
	<>
	<Nav>
		<NavMenu>
			<ul>
			<a href='/'>All</a>
			{categories.map((cat,i) => {
				return (
						<li key={i}>
							<a href={`http://localhost:3000/?category=${cat}`} >{cat}</a>
						</li>
					);
			})}
			</ul>
		{/* <NavLink to="/about">
			About
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
