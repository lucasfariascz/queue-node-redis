import Queue from '../lib/Queue';

class UserController
{
  async store(req, res){
    const { name, email, password } = req.body;

    const user = {
      name, email, password
    }
    
    //Adicionar Jobs
    await Queue.add('RegistrationMail', {user});
    await Queue.add('UserReportMail', {user});
    return res.json(user);
  }
}

export default UserController;