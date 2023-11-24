export class Curso
{
    constructor (public id:number, public title:string, public platform: string, public launch_year:number, public offers_certificate:boolean, public description: string, public image:string, public duration_hours:number)
    {
        this.id=id;
        this.title=title;
        this.platform=platform;
        this.launch_year=launch_year;
        this.offers_certificate=offers_certificate;
        this.description=description;
        this.image=image;
        this.duration_hours=duration_hours;
    }
}