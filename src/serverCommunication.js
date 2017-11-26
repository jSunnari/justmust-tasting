import Request from 'superagent'; //https://visionmedia.github.io/superagent/

class ServerCommunication {
  createMember(userName){
    return new Promise((resolve, reject) => {
      Request
      .post("/api/member")
      .send({
        name: userName
      })
      .end((err, res) => {
        if (err || !res.ok) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
    });
  }

  createSession(memberId){
    return new Promise((resolve, reject) => {
      Request
      .post("/api/tastingsession")
      .send({
        memberId: memberId
      })
      .end((err, res) => {
        if (err || !res.ok) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
    });
  }

  getActiveSessions(){
    return new Promise((resolve, reject) => {
      Request
      .get("/api/tastingsession/active")
      .end((err, res) => {
        if (err || !res.ok) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
    });
  }
}

export let serverCommunication = new ServerCommunication();
