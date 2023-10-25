import SkillsAndTraits from "./SkillsAndTraits";

const User = ({user}) => {
    return (
        <li>
            <h2>{user.name}</h2>
            <p>age: {user.age}</p>
            <ul>
                <h3>Skills and Traits</h3>
                <SkillsAndTraits skillsAndTraits={user['skills and traits']}/>
            </ul>
            <p>A character from {user.fiction} - <a href={user.wiki} target="_blank">more info</a></p>
        </li>
    )
}

export default User;