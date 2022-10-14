const Addfvrt = () => {
    return ( 
        <div className="addfvrt">
            <div className="form">
                <img height={100} width={150} src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                <form action="">
                    <input type="text" placeholder="tittle" />
                    <input type="text" placeholder="genre"/>
                    <input type="text" placeholder="language"/>
                    <input type="number" min={0} max={10} placeholder="ratings"/>
                    <center><button>Add</button></center>
                </form>
            </div>
            <div className="content">
                <h1>Add your <br/>favourites movies
                    <br/> and <br/>tv shows</h1>
            </div>
        </div>
     );
}
 
export default Addfvrt;