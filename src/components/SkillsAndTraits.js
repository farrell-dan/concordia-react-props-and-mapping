const SkillsAndTraits = ( {skillsAndTraits}) => {
    return skillsAndTraits.map((skill, index) => {
            return <li key={index + 1}>{skill}</li>;
        });
        
}

export default SkillsAndTraits;