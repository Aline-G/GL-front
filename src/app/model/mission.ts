enum missionStates {
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
  SUSPENDED = "SUSPENDED",
}

export class Mission {


  id: number;
  name: string;
  dateBeginning: Date;
  dateEnding: Date;
  missionState: missionStates;
  referent:string; //Users
  asssociated_collaborators :string; //Users list
  description: string;



  constructor(id: number, name: string, dateBeginning: Date, dateEnding: Date, missionState : missionStates, referent : string, associated_collaborators :string, description: string) {
    this.id=id;
    this.name=name;
    this.dateBeginning=dateBeginning;
    this.dateEnding=dateEnding;
    this.missionState =missionState;
    this.referent=referent;
    this.asssociated_collaborators=associated_collaborators;
    this.description=description;





  }
}
