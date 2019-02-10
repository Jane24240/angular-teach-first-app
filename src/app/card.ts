export class Card {
    firstname: string;
    lastname: string;
    votes: number;
    constructor(
        firstName: string,
        lastName: string,
        votes: number 
    ){
      this.firstname = firstName;
      this.lastname = lastName;
      this.votes = votes;
    }
    get name():string{
        return this.firstname+' '+this.lastname;
    }


}

