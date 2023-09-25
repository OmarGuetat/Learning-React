import React,{Component} from 'react'
import TeamMember from './TeamMember'
import memberInfo from './MembersInfo';

class TeamClick extends Component{
    constructor(){
        super();
        this.state={
            memberInfo : memberInfo,
            members: [],
            counter : 0
        }
        this.clickEvent=this.clickEvent.bind(this)
    }
    clickEvent(){
        if (this.state.counter<this.state.memberInfo.length){
            this.state.members.push(this.state.memberInfo[this.state.counter]);
        this.setState(function(prevState){
            return{counter:prevState.counter+1}
        });
        console.log(this.state.members);
        this.newMembers = this.state.members.map(member => { 
            return <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}  
            website={member.website} 
            />
        })
        } 
    }
    render(){
        
    return (    
        <div className="row" >
            <div className='col-md-12' > 
            <button  className='btn btn-primary btn-lg btn-block' onClick={this.clickEvent} > Click Here!</button>
            </div>
            {this.newMembers}
        </div>
    )
    }
}

export default TeamClick;