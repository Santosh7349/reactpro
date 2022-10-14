const Footer = () => {
    let footer_links=[
        {link:"Terms and Privacy Notice"},
        {link:"Send us Feedback"},
        {link:"Help"}
    ]
    return ( 
        <div className="footer">
            <div className="logo">
                <img width="200" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
            </div>
            <div className="footer_links">
                {footer_links.map((data)=>{
                return(
                    <a href="">{data.link}</a>

                )})
                }
            </div>
            <div className="footer_desc">
                 <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of,<br />
                    and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;