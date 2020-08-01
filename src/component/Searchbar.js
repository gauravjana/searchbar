import React, {Component} from 'react';
import '../search.css';


class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            error: null,
            isLoaded: false,
           searchData:[]

        };
    }

    search(key) {
        console.warn(key)



            fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + key, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "8b46305e2dmshabf7ac695ef79d0p12e72cjsn07a76430f6bc"
                }
            })
                .then(res => res.json())
                .then(
                    (res) => {
                        this.setState({
                            isLoaded: true,
                            searchData: res.drinks

                        });
                    },
                    // error handler
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
    }



    render() {
        const { error, isLoaded, searchData } = this.state;

        return (
            <div>
                <h1>Search Bar</h1>
                <input type="text" onChange={(event => this.search(event.target.value))}/>
                <div className="col">


                    {searchData.map(drinks => <div>{drinks.strDrink}</div>)}

                </div>
            </div>




        );
    }
}

export default Searchbar;
