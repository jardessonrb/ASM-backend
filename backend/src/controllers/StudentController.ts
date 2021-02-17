import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';


export default {
    
    async create(request: Request, response: Response){
        const { 
            name_student,
            email_student,
            user_student,
            password_student
        } = request.body;

        const data = request.body;

        console.log(request.body);
        

        const studentRepository = getRepository(Student);

        const student = studentRepository.create(data);

        await studentRepository.save(student);

        return response.status(201).json(student);


    }
}