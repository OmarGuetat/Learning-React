import React ,{Component}from 'react'

class TeamMember extends Component{
    render(){
    return (
        <div className="col-md-4  col-sm-6 " >
            <div className="card"  >
                <div className="card-header" >
                <img style={{maxWidth:'100%'}} src={this.props.img} alt={this.props.name} />
                </div>
                <div className="card-body" >
                    <h4> {this.props.name} </h4>
                    <h6> {this.props.position} </h6>
                    <h6> {this.props.phone} </h6>
                    <h6> {this.props.email} </h6>
                    <h6> {this.props.website} </h6>
                </div>
            </div>
        </div>

    )
}
}
export default TeamMember;