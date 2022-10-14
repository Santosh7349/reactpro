const Home = () => {
    let images = [
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1732/1351732-v-77bea0bdf9e6"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/6828/556828-v"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img height={500} width={1450} src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6838/1306838-h-5a58d2ed5fec" alt="" />
            </div>
            <div className="movies">
                {images.map((data)=>{
                    return(
                        <img height={375} width={275} src={data.img} alt="" />
                    )
                })
                }
               
                
            </div>
        </div>

     );
}
 
export default Home;