import Mail from '../lib/Mail';

export default {
  key: 'UserReportMail',
  options:{
    delay: 5000,
  },
  async handle({data}){
    const {user} = data;
    console.log(user);
  }
}