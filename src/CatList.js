import React, {Component} from 'react' 

export default class CatList extends Component {
    list = () => {
         return this.props.catPics.map(cat => <img src={cat.url} alt='cat here' key={cat.id} />)
    }

    render(){
        return(
            <div>{this.list()}</div>
        )
    }
}
