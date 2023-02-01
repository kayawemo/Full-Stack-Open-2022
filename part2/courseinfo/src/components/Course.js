import Header from './Header'
import Content from './Content'

const Course = ({courses}) => {
    console.log('course working..', courses)
    return (
        <>
            <Header name='Web development curriculum'/>
            <Content courses ={courses}/>
        </>
    )
}

export default Course
