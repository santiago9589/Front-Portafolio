import {ProyectU} from "./ProyectU"
import {EducationI} from "./Education"
import {CoursesI} from "./Courses"

export interface TechnologyI{
    proyects: ProyectU[],
    education:EducationI[]
    courses:CoursesI[]
}