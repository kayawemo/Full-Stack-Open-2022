import Part from './Part'
import Title from './Title'
import Total from "./Total";

const Content = ({courses}) => {
    return (
        <>
            {courses.map(course => (
                <div key={course.id}>
                    <Title name={course.name}/>
                    {course.parts.map(part => (
                        <div key={part.id}>
                            <Part name={part.name} exercises={part.exercises}/>
                        </div>
                    ))}
                    <Total parts={course.parts}/>

                </div>
            ))}
        </>
    )
}

export default Content;



