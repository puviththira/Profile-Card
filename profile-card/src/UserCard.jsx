import { ReactPropTypes } from "react";

const userData = [
  {
  name:"Christina Mariano", 
  city:"New York",
  description:"Cyber security Assistant", 
  skills:["Networking", "System Administration",
  "Operating System", "Virtual Machine", 
  "Network Security Control", "Python", 
  "Javascript","MongoDB", "React","Node"], 
  online:true, 
  profile:"images/1.jpeg",
},
{
  name:"Alina khristophar", 
  city:"Sidney",
  description:"Full Stack Developer", 
  skills:["HTML","Bootstrap","spring boot", "Python", 
  "Javascript","MongoDB", "React","Node"], 
  online:true, 
  profile:"images/4.jpeg",
},
{
  name:"Rosy Thomas", 
  city:"London",
  description:"Data scientist", 
  skills:["Statistics", "Data visualization",
  "Machine Learning", "Data wrangling", 
  "Mathematics", "Python", 
  "java","Perl", "SQL","C++"], 
  online:true, 
  profile:"images/5.jpeg",
}
];
function User(props) {
  return (
    <div className='card-container'>
        <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>{props.skills.map((skill,index)=> (
              <li key={index}>{skill}</li>
            ))}</ul>
        </div>
    </div>
  )
}

export const UserCard = () => {
  return <>
  {
    userData.map((user,index)=>(
      <User key = {index}
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}/>
    ))
  }
  </>;
};
{/*User.ReactPropTypes={
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes,string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
}*/}