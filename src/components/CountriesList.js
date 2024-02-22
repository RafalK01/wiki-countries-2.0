import { Link } from "react-router-dom"

function CountriesList({countries}) {
    
    return (
        <div className="container">
            <div className="row">
             <div className="col-5 d-flex flex-column" style={{ maxHeight: '85vh', overflow: 'scroll' }}>
                <div className="list-group">
                    {countries.map(country=> {
                        return(
                            <Link className="list-group-item list-group-item-action d-flex flex-column align-items-center" to={`/${country.alpha3Code}`} >
                            <img src={`https://flagcdn.com/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}-flag`} />
                            <p>{country.name.common}</p>
                            </Link>
                        )
                    })}
                    </div>
                 </div>
            </div>
         </div>
    )
}

export default CountriesList;
