enum missionStates {
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
  SUSPENDED = "SUSPENDED",
  INCOMING = "INCOMING"
}

export class Mission {


  id: number;
  name: string;
  dateBegining: string;
  dateEnding: string;
  state: missionStates;
  referent:string; //Users
  asssociated_collaborators :string; //Users list
  description: string;



  constructor(id: number, name: string, dateBegining: string, dateEnding: string, state : missionStates, referent : string, associated_collaborators :string, description: string) {
    this.id=id;
    this.name=name;
    this.dateBegining=dateBegining;
    this.dateEnding=dateEnding;
    this.state =state;
    this.referent=referent;
    this.asssociated_collaborators=associated_collaborators;
    this.description=description;





  }
}
