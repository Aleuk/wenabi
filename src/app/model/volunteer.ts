import { Entry } from "./entry";
import { Status } from "./status";

export class Volunteer {
    public id: string = '';
    public createdDate: string = '';
    public status: string = '';
    public picture: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public companyName: string = '';
    public title: string = '';
    public city: string = '';
    public country: string = '';
    public postalCode: string = '';
    public streetName: string = '';
    public coordinatorFirstName: string = '';
    public coordinatorLastName: string = '';
    public entries: Entry[] = [];

    constructor(
        id: string,
        createdDate: string,
        status: string,
        picture: string,
        firstName: string ,
        lastName: string,
        companyName: string,
        title: string,
        city: string,
        country: string,
        postalCode: string,
        streetName: string,
        coordinatorFirstName: string,
        coordinatorLastName: string,
        entries: Entry[]){
            this.id = id;
            this.createdDate = createdDate;
            this.status = status;
            this.picture = picture;
            this.firstName = firstName;
            this.lastName = lastName;
            this.companyName = companyName;
            this.title = title;
            this.city = city;
            this.country = country;
            this.postalCode = postalCode;
            this.streetName = streetName;
            this.coordinatorFirstName = coordinatorFirstName;
            this.coordinatorLastName = coordinatorLastName;
            this.entries = entries;
        }

    static convert(vol: any): Volunteer {
        return new Volunteer(
            vol.id,
            vol.createdDate,
            vol.status,
            '',
            vol.volunteerProfile.firstname,
            vol.volunteerProfile.lastname,
            vol.volunteerProfile.company.name,
            vol.initiative.title,
            vol.initiative.city,
            vol.initiative.country,
            vol.initiative.postalCode,
            vol.initiative.streetName,
            vol.coordinatorProfile.firstname,
            vol.coordinatorProfile.lastname,
            vol.entries ? vol.entries : []
        );
    }
}
