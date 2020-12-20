import { Language } from './language';
import { Level } from './level';
import { Enrollment } from './enrollment';



class TargetYourStudents {

    public learn: { answer: [string] };
    public prerequisites: { answer: [string] };
    public target: { answer: [string] };
}

class CourseLandingPage {

    public courseTitle: string;
    public courseSubtitle: string;
    public courseDescription: string;
    public basicInfo: {
        language: Language;
        level: Level;
    }
    public courseImage: string;
    public promotionalVideo: string;
}

class Settings {

    public enrollment: {
        option: Enrollment;
        password: string
    };

}

export class Craft {
    public _id: string;
    public title: string;
    public createdBy: string;
    public publish: boolean;
    public enableCertificate:boolean;
    public targetYourStudents: TargetYourStudents;
    public courseLandingPage: CourseLandingPage;
    public settings: Settings;

    constructor(

    ) { }


}