
class Category extends React.Component {

    constructor() {
        super()
    }
    
    render() {
        let categories = data.map((result, index) => {
            console.log(result)
             return (
                <li class="cat-link left valign-wrapper" key={index}>
                <i class="material-icons">{result.icon}</i>{result.title}
               </li>
               
             )
          })

        return(
            <div className="row">
                <ul class="cat-nav center-align">
                    {categories}
                </ul>
            </div>
        )
    }
}



