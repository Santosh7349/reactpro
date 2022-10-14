// // function name should be file name and funaction name start with uppercase
// function Navbar(){                  
//     return(
//         <div className="navbar">
//             <h1>navbar components</h1>
//         </div>
//     )
// }
// export default Navbar


// sfc enter shorcutt of creating the jsx
const Navbar = () => {
    let nav=[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Favourites",path:"/favourites"},
        {link:"Signup",path:"/addfvrt"}
    ]
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
            </div>
            <div className="links">
                {
                    nav.map((data)=>{
                        return(
                            <a href={data.path}>{data.link}</a>
                        )
                    })
                }
               
            </div>
        </div>
     );
}
 
export default Navbar;